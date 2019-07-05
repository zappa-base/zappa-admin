import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'semantic-ui-react';
import { SignUpFormWithMutation } from '../../components/Forms/SignUpForm';

export default function SignUpPage({ history, location }) {
  return (
    <Grid.Column mobile="16" computer="6">
      <SignUpFormWithMutation history={history} location={location} />
    </Grid.Column>
  );
}

SignUpPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
