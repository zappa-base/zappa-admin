import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { loader } from 'graphql.macro';

import { Grid, Segment, Form, Message, Button } from 'semantic-ui-react';
import { Mutation } from 'react-apollo';
// import { useMutation } from '@apollo/react-hooks';
import { BasicModal } from '../../components/Modals/BasicModal';

const mutation = loader('../../graphql/mutations/requestReset.gql');

export default function ForgotPasswordPage({ history }) {
  const [state, setState] = useState({ email: '', modal: false });

  return (
    <Grid.Column computer={6} mobile={16}>
      <Mutation mutation={mutation}>
        {(mutate, { loading, error }) => (
          <Segment>
            <Form
              loading={loading}
              onSubmit={() => {
                mutate({
                  variables: {
                    email: state.email
                  }
                });

                setState({ ...state, modal: true });
              }}
            >
              <Form.Field>
                <Form.Input
                  label="Email"
                  name="email"
                  onChange={({ target: { value: email } }) => {
                    setState({ ...state, email });
                  }}
                  type="email"
                  value={state.email}
                />
              </Form.Field>
              <Button disabled={!state.email} type="submit">
                Submit
              </Button>
            </Form>
            <Message
              error
              header="Internal Server Error"
              content="Please Try Again Later"
              hidden={!error}
            />
            <BasicModal
              headerContent="Password Reset:"
              headerIcon="mail"
              content={`Password reset request sent ${state.email}`}
              opened={state.modal && !error && !loading}
              handleClose={() => history.push('/')}
            />
          </Segment>
        )}
      </Mutation>
    </Grid.Column>
  );
}

ForgotPasswordPage.propTypes = {
  history: PropTypes.object.isRequired
};
