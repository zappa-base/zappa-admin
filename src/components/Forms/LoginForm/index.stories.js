import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from 'semantic-ui-react';
import { LoginForm } from '.';

storiesOf('Forms/Login Form', module).add('default', () => (
  <Grid centered>
    <LoginForm />
  </Grid>
));
