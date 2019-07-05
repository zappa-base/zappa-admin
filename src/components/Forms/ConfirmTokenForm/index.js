import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';

export function ConfirmTokenForm({ loading, mutate }) {
  const [state, setState] = useState({ tokenInput: '' });

  return (
    <Form
      loading={loading}
      style={{ textAlign: 'left' }}
      onSubmit={event => {
        event.preventDefault();

        mutate({
          variables: {
            token: state.tokenInput
          }
        });
      }}
    >
      <Form.Field>
        <label htmlFor="token-input">
          Enter Token:
          <input
            id="token-input"
            onChange={({ target }) =>
              setState({ ...state, tokenInput: target.value })
            }
            type="text"
            value={state.tokenInput}
          />
        </label>
      </Form.Field>
      <Button type="submit" disabled={!state.tokenInput}>
        Submit
      </Button>
    </Form>
  );
}

ConfirmTokenForm.propTypes = {
  loading: PropTypes.bool,
  mutate: PropTypes.func.isRequired
};

ConfirmTokenForm.defaultProps = {
  loading: false
};
