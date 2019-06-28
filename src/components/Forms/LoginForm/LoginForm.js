import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Grid, Segment, Message, Header } from 'semantic-ui-react';
import { inputErrorsToFormErrors } from '../../../helpers/errors/inputErrorsToFormErrors';

const intialState = {
  email: '',
  errors: null,
  password: ''
};

export function LoginForm({ errors, loading, onSubmit }) {
  const [state, setState] = useState(() => intialState);

  return (
    <Grid.Column width="6">
      <Segment>
        <Header as="h2">Login</Header>
        <Form
          error={(state.errors && state.errors.form) || Boolean(errors)}
          loading={loading}
          onSubmit={event => {
            event.preventDefault();

            if (onSubmit) {
              onSubmit(state);
            }
          }}
        >
          <Form.Field>
            <Form.Input
              autoComplete="username"
              label="Email"
              name="email"
              onChange={({ target }) =>
                setState({ ...state, [target.name]: target.value })
              }
              type="email"
              value={state.email}
            />
            <Form.Input
              autoComplete="current-password"
              label="Password"
              name="password"
              onChange={({ target }) =>
                setState({ ...state, [target.name]: target.value })
              }
              type="password"
              value={state.password}
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

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  errors: PropTypes.array,
  loading: PropTypes.bool
};

LoginForm.defaultProps = {
  errors: undefined,
  loading: false,
  onSubmit: () => {}
};
