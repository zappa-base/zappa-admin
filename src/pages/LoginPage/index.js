import React from 'react';
import PropTypes from 'prop-types';

import { LoginFormWithMutation } from '../../components/Forms/LoginForm';

export default function LoginPage({ history, location }) {
  return (
    <LoginFormWithMutation
      history={history}
      from={location.state && location.state.from}
    />
  );
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
