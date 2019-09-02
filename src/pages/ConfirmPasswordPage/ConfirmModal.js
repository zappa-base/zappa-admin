import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import { BasicModal } from '../../components/Modals/BasicModal';

export function ConfirmedModal({ data, history, login }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header size="huge">Account Confirmed!</Header>
      <BasicModal
        buttonText="Okay"
        content="Account Successfully Confirmed"
        handleClose={() => {
          login(data.confirmUser);
          history.push('/');
        }}
        headerContent="Account Confirmed"
        headerIcon="user circle"
        opened
      />
    </div>
  );
}

ConfirmedModal.propTypes = {
  data: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};
