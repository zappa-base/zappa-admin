import React from 'react';
import PropTypes from 'prop-types';

import { SignUpFormWithMutation } from '../../components/Forms/SignUpForm';

export default function SignUpPage({ history, location }) {
  return <SignUpFormWithMutation history={history} location={location} />;
}

SignUpPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
