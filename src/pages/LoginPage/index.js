import React from 'react';

import { LoginFormWithMutation } from '../../components/Forms/LoginForm';
import { pagesSharedPropTypes } from '../pagesSharedPropTypes';

export default function LoginPage({ history, location }) {
  return (
    <LoginFormWithMutation
      history={history}
      from={location.state && location.state.from}
    />
  );
}

LoginPage.propTypes = pagesSharedPropTypes;
