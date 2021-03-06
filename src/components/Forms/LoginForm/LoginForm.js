import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Grid, Segment, Message, Header, Icon } from 'semantic-ui-react';
import { inputErrorsToFormErrors } from '../../../helpers/errors/inputErrorsToFormErrors';
import { ResendConfirmationWithRouter } from '../../ResendConfirmation';
import { colProps } from '../../../helpers/layout/colProps';

const intialState = {
  email: '',
  errors: null,
  password: ''
};

export function LoginForm({ hasConfirmationError, errors, loading, onSubmit }) {
  const [state, setState] = useState(() => intialState);

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      hasConfirmationError
    }));
  }, [hasConfirmationError]);

  return (
    <Grid.Column {...colProps}>
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
                setState({
                  ...state,
                  [target.name]: target.value,
                  hasConfirmationError: null
                })
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
          <Form.Button disabled={!state.email || !state.password}>
            Submit
          </Form.Button>
          <Message size="tiny" visible>
            <Icon name="info" />
            <Link to="/forgot-password">Forgot Password?</Link>
          </Message>
        </Form>
      </Segment>
      <ResendConfirmationWithRouter
        email={state.email}
        hasConfirmationError={state.hasConfirmationError}
      />
    </Grid.Column>
  );
}

LoginForm.propTypes = {
  errors: PropTypes.array,
  hasConfirmationError: PropTypes.bool,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func
};

LoginForm.defaultProps = {
  errors: undefined,
  hasConfirmationError: false,
  loading: false,
  onSubmit: () => {}
};
