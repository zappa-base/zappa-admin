import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';

export function UsersPage() {
  return (
    <Container fluid>
      <Segment>
        <h2>User Page</h2>
        <Link to="/users/test">Test</Link>
        <Route path="/users/test" render={() => <div>Hello World Test</div>} />
      </Segment>
    </Container>
  );
}
