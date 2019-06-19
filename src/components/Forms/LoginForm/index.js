import React, { useState } from 'react';
import { Form, Grid, Segment, Message, Header } from 'semantic-ui-react';
import { StatePrinter } from '../../Debug/StatePrinter';

const intialState = {
  email: '',
  errors: null,
  password: ''
};

export function LoginForm() {
  const [state, setState] = useState(() => intialState);

  return (
    <Grid.Column width="6">
      <Segment>
        <Header as="h2">Login</Header>
        <Form error={state.errors && state.errors.form} onSubmit={() => {}}>
          <Form.Field>
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
