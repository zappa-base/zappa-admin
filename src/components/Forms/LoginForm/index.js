import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';

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

function hasConfirmationError(error) {
  return (
    error &&
    error.graphQLErrors.some(value => value.extensions.code === 'UNCONFIRMED')
  );
}

export function LoginFormWithMutation({ from, history }) {
  return (
    <UserContext.Consumer>
      {({ login }) => (
        <Mutation
          mutation={mutation}
          onCompleted={data => {
            if (data.login.token) {
              login(data.login);

              postLoginRedirect(from, history);
            }
          }}
          onError={onError}
        >
          {(mutate, { loading, error }) => (
            <LoginForm
              onSubmit={onSubmit(mutate)}
              loading={loading}
              errors={error && getInputErrors(error)}
              hasConfirmationError={hasConfirmationError(error)}
            />
          )}
        </Mutation>
      )}
    </UserContext.Consumer>
  );
}

LoginFormWithMutation.propTypes = {
  from: PropTypes.object,
  history: PropTypes.object.isRequired
};

LoginFormWithMutation.defaultProps = {
  from: {}
};
