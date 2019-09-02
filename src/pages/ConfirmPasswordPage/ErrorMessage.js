import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

export function ErrorMessage({ error }) {
  return (
    <Message
      icon="exclamation"
      header="Confirmation Token Error:"
      list={error.graphQLErrors.map(({ message }) => message)}
      negative
    />
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.object
};

ErrorMessage.defaultProps = {
  error: {}
};
