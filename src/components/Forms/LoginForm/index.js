import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';

import { loader } from 'graphql.macro';
import { LoginForm } from './LoginForm';
import { UserContext } from '../../Contexts/UserContext';
import { postLoginRedirect } from '../../../helpers/auth/postLoginRedirect';

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
        >
          {(mutate, { loading }) => (
            <LoginForm onSubmit={onSubmit(mutate)} loading={loading} />
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
