import React, { useContext, useState } from 'react';
import queryString from 'query-string';
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Message
} from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

import { BasicModal } from '../../components/Modals/BasicModal';
import { UserContext } from '../../components/Contexts/UserContext';
import { inputErrorsToFormErrors } from '../../helpers/errors/inputErrorsToFormErrors';
import { getInputErrors } from '../../helpers/errors/getInputErrors';
import { pagesSharedPropTypes } from '../../helpers/proptypes/pagesSharedPropTypes';

const mutation = loader('../../graphql/mutations/resetPassword.gql');

const initialState = {
  password: '',
  'confirm-password': '',
  token: '',
  modal: false
};

export default function ResetPasswordPage({ location }) {
  const query = queryString.parse(location.search);

  const { login } = useContext(UserContext);
  const [state, setState] = useState(initialState);
  const [mutate, { data, error, loading }] = useMutation(mutation);

  const errors = error && getInputErrors(error);

  const onChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const token = query.token || state.token;

  return (
    <Grid.Column computer="6" mobile="16">
      <Segment>
        <Header>Reset Password Form</Header>
        <Form
          error={Boolean((state.errors && state.errors.form) || errors)}
          loading={loading}
          onSubmit={event => {
            event.preventDefault();

            if (state.password !== state['confirm-password']) {
              setState({
                ...state,
                errors: { form: "Passwords don't match" }
              });
              return;
            }

            mutate({
              variables: {
                password: state.password,
                token
              }
            });

            setState({ ...state, modal: true, errors: null });
          }}
        >
          <Form.Field>
            <Form.Input
              autoComplete="new-password"
              error={errors && errors[1] && errors[1].email}
              label="Password"
              name="password"
              onChange={onChange}
              type="password"
              value={state.password}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              autoComplete="new-password"
              label="Confirm Password"
              name="confirm-password"
              onChange={onChange}
              type="password"
              value={state.confirm}
            />
          </Form.Field>
          {!query.token && (
            <Form.Field>
              <Form.Input
                label="Token"
                name="token"
                onChange={onChange}
                type="text"
                value={state.token}
              />
            </Form.Field>
          )}
          <Message error {...inputErrorsToFormErrors(state, errors)} />
          <Button
            disabled={
              loading ||
              (!state.password || !state['confirm-password'] || !token)
            }
            loading={loading}
            type="submit"
          >
            Submit
          </Button>
        </Form>
        <BasicModal
          headerIcon="user circle"
          headerContent="Password Reset"
          content="Password reset succesful, logging in"
          handleClose={() => {
            login(data.resetPassword);
          }}
          opened={Boolean(
            state.modal &&
              !loading &&
              data &&
              data.resetPassword &&
              data.resetPassword.token
          )}
        />
      </Segment>
    </Grid.Column>
  );
}

ResetPasswordPage.propTypes = pagesSharedPropTypes;
