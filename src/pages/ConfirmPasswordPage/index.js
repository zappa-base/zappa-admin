import React, { useContext } from 'react';
import {
  Container,
  Segment,
  Dimmer,
  Loader,
  Grid,
  Header
} from 'semantic-ui-react';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import queryString from 'query-string';

import { UserContext } from '../../components/Contexts/UserContext';
import { ErrorMessage } from './ErrorMessage';
import { ConfirmTokenView } from './ConfirmTokenView';
import { ConfirmedModal } from './ConfirmModal';
import { pagesSharedPropTypes } from '../../helpers/proptypes/pagesSharedPropTypes';
import { colProps } from '../../helpers/layout/colProps';

const mutation = loader('../../graphql/mutations/confirmAccount.gql');

export default function ConfirmPasswordPage({ history, location }) {
  const query = queryString.parse(location.search);

  const { login } = useContext(UserContext);

  const [mutate, { data, called, error, loading }] = useMutation(mutation);

  if (query.token && !called) {
    mutate({
      variables: {
        token: query.token
      }
    });
  }

  let renderChild;

  if (called && error) {
    renderChild = <ErrorMessage error={error} />;
  } else if (!loading && data && data.confirmUser && data.confirmUser.token) {
    renderChild = (
      <ConfirmedModal data={data} history={history} login={login} />
    );
  } else if (!query.token) {
    renderChild = <ConfirmTokenView loading={loading} mutate={mutate} />;
  } else {
    renderChild = (
      <div>
        <Header>Confirming Account</Header>
        <Dimmer active inverted>
          <Loader size="huge">Confirming Account</Loader>
        </Dimmer>
      </div>
    );
  }

  return (
    <Grid.Column {...colProps}>
      <Container fluid>
        <Segment>{renderChild}</Segment>
      </Container>
    </Grid.Column>
  );
}

ConfirmPasswordPage.propTypes = pagesSharedPropTypes;
