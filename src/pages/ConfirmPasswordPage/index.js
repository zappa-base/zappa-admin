import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Dimmer,
  Loader,
  Grid,
  Header,
  Message
} from 'semantic-ui-react';
import { loader } from 'graphql.macro';
import { Mutation } from 'react-apollo';
import queryString from 'query-string';

import { UserContext } from '../../components/Contexts/UserContext';
import { ConfirmTokenForm } from '../../components/Forms/ConfirmTokenForm';
import { BasicModal } from '../../components/Modals/BasicModal';

const mutation = loader('../../graphql/mutations/confirmAccount.gql');

export default function ConfirmPasswordPage({ history, location }) {
  const query = queryString.parse(location.search);

  return (
    <UserContext.Consumer>
      {({ login }) => (
        <Grid.Column mobile="16" computer="6">
          <Container fluid>
            <Segment>
              <Mutation mutation={mutation}>
                {(mutate, { data, called, error, loading }) => {
                  if (query.token && !called) {
                    mutate({
                      variables: {
                        token: query.token
                      }
                    });
                  }

                  if (called && error) {
                    return (
                      <Message
                        icon="exclamation"
                        header="Confirmation Token Error:"
                        list={error.graphQLErrors.map(({ message }) => message)}
                        negative
                      />
                    );
                  }

                  if (
                    !loading &&
                    data &&
                    data.confirmUser &&
                    data.confirmUser.token
                  ) {
                    const handleClose = () => {
                      login(data.confirmUser);
                      history.push('/');
                    };

                    return (
                      <div style={{ textAlign: 'center' }}>
                        <Header size="huge">Account Confirmed!</Header>
                        <BasicModal
                          buttonText="Okay"
                          content="Account Successfully Confirmed"
                          handleClose={handleClose}
                          headerContent="Account Confirmed"
                          headerIcon="user circle"
                          opened
                        />
                      </div>
                    );
                  }

                  if (!query.token) {
                    return (
                      <div>
                        <Header>Confirm Account</Header>
                        <ConfirmTokenForm mutate={mutate} loading={loading} />
                      </div>
                    );
                  }

                  return (
                    <div>
                      <Header>Confirming Account</Header>
                      <Dimmer active inverted>
                        <Loader size="huge">Confirming Account</Loader>
                      </Dimmer>
                    </div>
                  );
                }}
              </Mutation>
            </Segment>
          </Container>
        </Grid.Column>
      )}
    </UserContext.Consumer>
  );
}

ConfirmPasswordPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
