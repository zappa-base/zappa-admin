import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';

import { loader } from 'graphql.macro';
import { onError } from 'apollo-link-error';
import { LoginForm } from './LoginForm';
import { UserContext } from '../../Contexts/UserContext';
import { postLoginRedirect } from '../../../helpers/auth/postLoginRedirect';
import { getInputErrors } from '../../../helpers/errors/getInputErrors';

const mutation = loader('../../../graphql/mutations/login.gql');

function onSubmit(mutate) {
  return data => {
    const { email, password } = data;

    mutate({
      variables: {
        email,
        password
      }
    });
  };
}

function onCompleted(login, from, history) {
  return data => {
    if (data.login.token) {
      login(data.login);

      postLoginRedirect(from, history);
    }
  };
}

function hasConfirmationError(error) {
  return (
    error &&
    error.graphQLErrors.some(value => value.extensions.code === 'UNCONFIRMED')
  );
}

export function LoginFormWithMutation({ from, history }) {
  const { login } = useContext(UserContext);

  const [mutate, { loading, error }] = useMutation(mutation, {
    onCompleted: onCompleted(login, from, history),
    onError
  });

  return (
    <LoginForm
      onSubmit={onSubmit(mutate)}
      loading={loading}
      errors={error && getInputErrors(error)}
      hasConfirmationError={hasConfirmationError(error)}
    />
  );
}

LoginFormWithMutation.propTypes = {
  from: PropTypes.object,
  history: PropTypes.object.isRequired
};

LoginFormWithMutation.defaultProps = {
  from: {}
};
