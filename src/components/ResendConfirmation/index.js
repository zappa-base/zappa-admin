import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, Message } from 'semantic-ui-react';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';

import { BasicModal } from '../Modals/BasicModal';

const mutation = loader('../../graphql/mutations/resendConfirmation.gql');

export function ResendConfirmation({ email, hasConfirmationError, history }) {
  const [state, setState] = useState({ modal: false });
  const [mutate, { error, loading }] = useMutation(mutation);

  const onClick = event => {
    event.preventDefault();

    mutate({
      variables: {
        email
      }
    });

    setState({
      ...state,
      modal: true
    });
  };

  return (
    <div>
      <Message warning hidden={!hasConfirmationError}>
        <p>Resend Confirmation to {email}?</p>
        <Button
          color="green"
          onClick={onClick}
          loading={loading}
          disabled={loading}
        >
          Resend
        </Button>
      </Message>
      <Message
        error
        header="Internal Server Error"
        content="Please Try Again Later"
        hidden={!error}
      />
      <BasicModal
        content={`Confirmation resent to ${email}`}
        handleClose={() => history.push('/login')}
        headerContent="Confirmation Resent"
        headerIcon="mail"
        opened={state.modal && !error}
      />
    </div>
  );
}

ResendConfirmation.propTypes = {
  email: PropTypes.string,
  hasConfirmationError: PropTypes.bool,
  history: PropTypes.object.isRequired
};

ResendConfirmation.defaultProps = {
  hasConfirmationError: false,
  email: undefined
};

export const ResendConfirmationWithRouter = withRouter(ResendConfirmation);
