import React from 'react';

import { Grid } from 'semantic-ui-react';
import { SignUpFormWithMutation } from '../../components/Forms/SignUpForm';
import { pagesSharedPropTypes } from '../../helpers/proptypes/pagesSharedPropTypes';

export default function SignUpPage({ history, location }) {
  return (
    <Grid.Column mobile="16" computer="6">
      <SignUpFormWithMutation history={history} location={location} />
    </Grid.Column>
  );
}

SignUpPage.propTypes = pagesSharedPropTypes;
