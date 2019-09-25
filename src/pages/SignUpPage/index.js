import React from 'react';

import { SignUpFormWithMutation } from '../../components/Forms/SignUpForm';
import { pagesSharedPropTypes } from '../../helpers/proptypes/pagesSharedPropTypes';

export default function SignUpPage({ history, location }) {
  return <SignUpFormWithMutation history={history} location={location} />;
}

SignUpPage.propTypes = pagesSharedPropTypes;
