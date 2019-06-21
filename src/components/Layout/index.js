import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Sidebar as SemanticSidebar } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import { MenuButton } from '../MenuButton';
import { MenuContext } from '../Contexts/MenuContext';
import { Sidebar } from '../Sidebar';
import UsersPage from '../../pages/UsersPage';

import styles from './layout.module.css';
import { buildRoutes } from '../../config/routes/buildRoutes';

export function Layout({ isAuth, location: { pathname } }) {
  return (
    <Fragment>
      <MenuButton />
      <MenuContext.Consumer>
        {({ state }) => (
          <SemanticSidebar.Pushable>
            <Sidebar
              opened={state.opened}
              currentPathname={pathname}
              isAuth={isAuth}
            />
            <SemanticSidebar.Pusher>
              <Grid
                className={`${styles.grid} ${
                  state.opened ? styles.opened : styles.closed
                }`}
                padded
              >
                <Grid.Column>
                  <Switch>
                    {buildRoutes()}
                    <Route component={HomePage} path="/" exact />
                    <Route component={UsersPage} path="/users" />
                  </Switch>
                </Grid.Column>
              </Grid>
            </SemanticSidebar.Pusher>
          </SemanticSidebar.Pushable>
        )}
      </MenuContext.Consumer>
    </Fragment>
  );
}

Layout.propTypes = {
  isAuth: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

Layout.defaultProps = {
  isAuth: false,
  location: {}
};

export const LayoutWithRouter = withRouter(Layout);
