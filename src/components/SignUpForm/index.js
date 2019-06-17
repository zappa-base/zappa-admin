import React, { useState } from 'react';
import { Form, Grid, Segment, Message, Header } from 'semantic-ui-react';
import { StatePrinter } from '../Debug/StatePrinter';

const intialState = {
  confirm: '',
  email: '',
  errors: null,
  nickname: '',
  password: ''
};

export function SignUpForm() {
  const [state, setState] = useState(() => intialState);

  return (
    <Grid.Column width="6">
      <Segment>
        <Header as="h2">Sign Up</Header>
        <p>Welcome to Zappa Admin Sign Up</p>
        <Form
          error={state.errors && state.errors.form}
          onSubmit={() => {
            if (state.password !== state.confirm) {
              setState({ ...state, errors: { form: "Passwords don't match" } });
            }
          }}
        >
          <Form.Field>
            <Form.Input
              label="Nickname"
              name="nickname"
              onChange={({ target }) =>
                setState({ ...state, [target.name]: target.value })
              }
              value={state.nickname}
            />
            <Form.Input
              label="Email"
              name="email"
              onChange={({ target }) =>
                setState({ ...state, [target.name]: target.value })
              }
              type="email"
              value={state.email}
            />
            <Form.Input
              label="Password"
              name="password"
              onChange={({ target }) =>
                setState({ ...state, [target.name]: target.value })
              }
              type="password"
              value={state.password}
            />
            <Form.Input
              label="Confirm Password"
              name="confirm"
              onChange={({ target }) =>
                setState({ ...state, [target.name]: target.value })
              }
              type="password"
              value={state.confirm}
            />
          </Form.Field>
          <Message error content={state.errors && state.errors.form} />
          <Form.Button
            disabled={Object.keys(state).some(
              key => key !== 'errors' && !state[key]
            )}
          >
            Submit
          </Form.Button>
        </Form>
      </Segment>
      <StatePrinter label="Signup Form" state={state} />
    </Grid.Column>
  );
}
