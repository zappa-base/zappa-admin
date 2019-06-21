import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { SignUpForm } from '../../components/Forms/SignUpForm';

export default function SignUpPage() {
  return (
    <Container fluid>
      <Grid centered>
        <SignUpForm />
      </Grid>
    </Container>
  );
}
