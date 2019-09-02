import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { loader } from 'graphql.macro';
import { onError } from 'apollo-link-error';
import { useMutation } from '@apollo/react-hooks';

import { getInputErrors } from '../../../helpers/errors/getInputErrors';
import { SignUpForm } from './SignUpForm';
import { BasicModal } from '../../Modals/BasicModal';

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

  const [mutate, { loading, error }] = useMutation(mutation, { onError });

  return (
    <Fragment>
      <SignUpForm
        errors={error && getInputErrors(error)}
        loading={loading}
        onSubmit={onSubmit(mutate, onSuccess)}
      />
      <BasicModal
        content={`A confirmation email has been sent out to ${state.email}.`}
        handleClose={handleClose}
        headerContent="Sign up successful"
        headerIcon="mail"
        opened={state.modalOpen}
      />
    </Fragment>
  );
}

SignUpFormWithMutation.propTypes = {
  history: PropTypes.object.isRequired
};
