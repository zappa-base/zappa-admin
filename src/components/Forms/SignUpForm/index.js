import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';

import { loader } from 'graphql.macro';
import { onError } from 'apollo-link-error';
import { Modal, Header, Icon, Button } from 'semantic-ui-react';
import { getInputErrors } from '../../../helpers/errors/getInputErrors';
import { SignUpForm } from './SignUpForm';

const mutation = loader('../../../graphql/mutations/signup.gql');

function onSubmit(mutate, onSuccess) {
  return async data => {
    const { email, nickname, password } = data;

    const response = await mutate({
      variables: {
        email,
        password,
        nickname
      }
    });

    if (response && response.data && response.data.signup) {
      onSuccess(email);
    }
  };
}

export function SignUpFormWithMutation({ history }) {
  const [state, setState] = useState({ modalOpen: false });

  const onSuccess = email => setState({ ...state, email, modalOpen: true });
  const handleClose = () => {
    setState({ ...state, modalOpen: false });

    history.push('/login');
  };

  return (
    <Mutation mutation={mutation} onError={onError}>
      {(mutate, { loading, error }) => (
        <Fragment>
          <SignUpForm
            errors={error && getInputErrors(error)}
            loading={loading}
            onSubmit={onSubmit(mutate, onSuccess)}
          />
          <Modal
            basic
            closeOnDimmerClick={false}
            onClose={handleClose}
            open={state.modalOpen}
            size="mini"
          >
            <Header icon="mail" content="Sign up successful" />
            <Modal.Content>
              <p>A confirmation email has been sent out to {state.email}.</p>
            </Modal.Content>
            <Modal.Actions>
              <Button color="green" onClick={handleClose}>
                <Icon name="checkmark" /> Okay
              </Button>
            </Modal.Actions>
          </Modal>
        </Fragment>
      )}
    </Mutation>
  );
}

SignUpFormWithMutation.propTypes = {
  history: PropTypes.object.isRequired
};
