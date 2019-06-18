import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu, Sidebar, Grid } from 'semantic-ui-react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import { MenuButton } from '../MenuButton';
import { MenuContext } from '../MenuContext';
import { HomePage } from '../../pages/HomePage';
import { UsersPage } from '../../pages/UsersPage';

import styles from './layout.module.css';

function Layout({ location: { pathname } }) {
  return (
    <Fragment>
      <MenuButton />
      <MenuContext.Consumer>
        {({ state }) => (
          <Sidebar.Pushable>
            <Sidebar
              animation="push"
              as={Menu}
              direction="left"
              icon="labeled"
              inverted
              vertical
              visible={state.opened}
              width="thin"
            >
              <Menu.Item>
                <Menu.Menu>
                  <Menu.Item>
                    <div style={{ marginTop: '2em' }} />
                  </Menu.Item>
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item>
                <Menu.Header>Zappa-Admin</Menu.Header>
                <Menu.Menu>
                  <Menu.Item as={Link} to="/" active={pathname === '/'}>
                    Home
                  </Menu.Item>
                  <Menu.Item
                    as={Link}
                    to="/users"
                    active={pathname === '/users'}
                  >
                    Users
                  </Menu.Item>
                </Menu.Menu>
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Grid
                className={`${styles.grid} ${
                  state.opened ? styles.opened : styles.closed
                }`}
                padded
              >
                <Grid.Column>
                  <Switch>
                    <Route path="/" exact>
                      <HomePage />
                    </Route>
                    <Route path="/users">
                      <UsersPage />
                    </Route>
                  </Switch>
                </Grid.Column>
              </Grid>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        )}
      </MenuContext.Consumer>
    </Fragment>
  );
}

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

Layout.defaultProps = {
  location: {}
};

export const LayoutWithRouter = withRouter(Layout);
