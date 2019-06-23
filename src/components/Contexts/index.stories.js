import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Button } from 'semantic-ui-react';
import { UserContext, UserContextProvider } from './UserContext';

storiesOf('Context/UserContext', module).add('default', () => (
  <Grid centered>
    <Grid.Column>
      <UserContextProvider>
        <UserContext.Consumer>
          {({ currentUser, login, logout }) => (
            <div>
              {currentUser ? currentUser.nickname : 'No User'}
              <div>
                <Button
                  onClick={() => {
                    login({
                      role: 'admin',
                      nickname: 'Test User'
                    });
                  }}
                >
                  Update User
                </Button>
                <Button onClick={logout}>Logout</Button>
              </div>
            </div>
          )}
        </UserContext.Consumer>
      </UserContextProvider>
    </Grid.Column>
  </Grid>
));
