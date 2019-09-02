import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import { ConfirmTokenForm } from '../../components/Forms/ConfirmTokenForm';

export function ConfirmTokenView({ mutate, loading }) {
  return (
    <div>
      <Header>Confirm Account</Header>
      <ConfirmTokenForm mutate={mutate} loading={loading} />
    </div>
  );
}

ConfirmTokenView.propTypes = {
  mutate: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

ConfirmTokenView.defaultProps = {
  loading: false
};
