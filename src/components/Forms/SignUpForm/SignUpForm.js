import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Grid, Segment, Message, Header } from 'semantic-ui-react';

import { inputErrorsToFormErrors } from '../../../helpers/errors/inputErrorsToFormErrors';
import { colProps } from '../../../helpers/layout/colProps';

const intialState = {
  confirm: '',
  email: '',
  errors: null,
  nickname: '',
  password: ''
};

export function SignUpForm({ errors, loading, onSubmit }) {
  const [state, setState] = useState(() => intialState);

  return (
    <Grid.Column {...colProps}>
      <Segment>
        <Header as="h2">Sign Up</Header>
        <p>Welcome to Zappa Admin</p>
        <p>Sign up here if applying for admin or moderator.</p>
        <Form
          error={Boolean((state.errors && state.errors.form) || errors)}
          loading={loading}
          onSubmit={event => {
            event.preventDefault();

            if (state.password !== state.confirm) {
              setState({ ...state, errors: { form: "Passwords don't match" } });
              return;
            }

            if (onSubmit) {
              onSubmit(state);
            }

            setState({ ...state, errors: null });
          }}
        >
          <Form.Field>
            <Form.Input
              autoComplete="nickname"
              label="Nickname"
              name="nickname"
              error={errors && errors[1] && errors[1].nickname}
              onChange={({ target }) =>
                setState({ ...state, [target.name]: target.value })
              }
              value={state.nickname}
            />
            <Form.Input
              autoComplete="username"
              label="Email"
              name="email"
              error={errors && errors[1] && errors[1].email}
              onChange={({ target }) =>
                setState({ ...state, [target.name]: target.value })
              }
              type="email"
              value={state.email}
            />
            <Form.Input
              autoComplete="new-password"
              label="Password"
              name="password"
              error={errors && errors[1] && errors[1].password}
              onChange={({ target }) =>
                setState({ ...state, [target.name]: target.value })
              }
              type="password"
              value={state.password}
            />
            <Form.Input
              autoComplete="new-password"
              label="Confirm Password"
              name="confirm"
              onChange={({ target }) =>
                setState({ ...state, [target.name]: target.value })
              }
              type="password"
              value={state.confirm}
            />
          </Form.Field>
          <Message error {...inputErrorsToFormErrors(state, errors)} />
          <Form.Button
            disabled={Object.keys(state).some(
              key => key !== 'errors' && !state[key]
            )}
          >
            Submit
          </Form.Button>
        </Form>
      </Segment>
    </Grid.Column>
  );
}

SignUpForm.propTypes = {
  errors: PropTypes.array,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func
};

SignUpForm.defaultProps = {
  errors: undefined,
  loading: false,
  onSubmit: () => {}
};
