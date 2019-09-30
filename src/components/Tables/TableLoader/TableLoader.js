import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';

export function TableLoader({ message }) {
  return (
    <tr>
      <td colSpan="100%" style={{ padding: '20px 0', textAlign: 'center' }}>
        <Loader active size="huge">
          {message}
        </Loader>
      </td>
    </tr>
  );
}

TableLoader.propTypes = {
  message: PropTypes.string
};

TableLoader.defaultProps = {
  message: 'Loading...'
};
