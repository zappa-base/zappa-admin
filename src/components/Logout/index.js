import React, { Fragment, useContext, useState } from 'react';
import { Confirm, Menu, Icon } from 'semantic-ui-react';
import { UserContext } from '../Contexts/UserContext';

export function Logout() {
  const [state, setState] = useState({ opened: false, confirmed: false });
  const { currentUser, logout } = useContext(UserContext);

  const openModal = () => setState({ ...state, opened: true });
  const handleCancel = () =>
    setState({ ...state, opened: false, confirmed: false });
  const handleConfirm = () =>
    setState({ ...state, opened: false, confirmed: true });

  if (currentUser && state.confirmed) {
    logout();
  }

  return (
    <Fragment>
      <Menu.Item onClick={openModal}>
        <Icon name="sign-out" />
        Logout
      </Menu.Item>
      <Confirm
        content="Are you sure you want to log out?"
        open={state.opened}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        cancelButton="Cancel"
        confirmButton="Logout"
        size="mini"
      />
    </Fragment>
  );
}
