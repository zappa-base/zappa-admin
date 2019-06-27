import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Segment, Confirm } from 'semantic-ui-react';

import { UserContext } from '../../components/Contexts/UserContext';

export default function LogoutPage({ history }) {
  const [ state, setState ] = useState({ opened: true, confirmed: false });

  const handleCancel = () => history.goBack();
  const handleConfirm = () => setState({ ...state, opened: false, confirmed: true });

  return (
    <UserContext.Consumer>
      {({ currentUser, logout }) => {
        if (currentUser && state.confirmed) {
          logout();
        }

        return (
          <Container fluid>
            <Segment>
              <h2>Loggin Out</h2>
            </Segment>
            <Confirm
              content="Are you sure you want to log out?" 
              open={state.opened} 
              onCancel={handleCancel} 
              onConfirm={handleConfirm}
              size="tiny"
            />
          </Container>
        )
      }}
    </UserContext.Consumer>
  );
}

LogoutPage.propTypes = {
  history: PropTypes.object.isRequired,
}