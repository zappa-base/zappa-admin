import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from 'semantic-ui-react';
import { SignUpForm } from './SignUpForm';

storiesOf('Forms/SignUp Form', module).add('default', () => (
  <Grid centered>
    <SignUpForm />
  </Grid>
));
