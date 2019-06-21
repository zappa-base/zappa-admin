import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { LoginForm } from '../../components/Forms/LoginForm';

export default function LoginPage() {
  return (
    <Container fluid>
      <Grid centered>
        <LoginForm />
      </Grid>
    </Container>
  );
}
