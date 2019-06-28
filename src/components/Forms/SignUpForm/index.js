import React from 'react';
import { Mutation } from 'react-apollo';

import { loader } from 'graphql.macro';
import { onError } from 'apollo-link-error';
import { getInputErrors } from '../../../helpers/errors/getInputErrors';
import { SignUpForm } from './SignUpForm';

const mutation = loader('../../../graphql/mutations/signup.gql');

function onSubmit(mutate) {
  return data => {
    const { email, nickname, password } = data;

    mutate({
      variables: {
        email,
        password,
        nickname
      }
    });
  };
}

export function SignUpFormWithMutation() {
  return (
    <Mutation mutation={mutation} onCompleted={() => {}} onError={onError}>
      {(mutate, { loading, error }) => (
        <SignUpForm
          onSubmit={onSubmit(mutate)}
          loading={loading}
          errors={error && getInputErrors(error)}
        />
      )}
    </Mutation>
  );
}
