import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Sidebar as SemanticSidebar } from 'semantic-ui-react';
import { Switch, withRouter } from 'react-router-dom';

import { MenuButton } from '../MenuButton';
import { MenuContext } from '../Contexts/MenuContext';
import { Sidebar } from '../Sidebar';

import styles from './layout.module.css';
import { buildRoutes } from '../../config/routes/buildRoutes';

export function Layout({ currentUser, location: { pathname } }) {
  return (
    <Fragment>
      <MenuButton />
      <MenuContext.Consumer>
        {({ state }) => (
          <SemanticSidebar.Pushable>
            <Sidebar
              currentPathname={pathname}
              currentUser={currentUser}
              opened={state.opened}
            />
            <SemanticSidebar.Pusher>
              <Grid
                centered
                className={`${styles.grid} ${
                  state.opened ? styles.opened : styles.closed
                }`}
                padded
              >
                <Switch>{buildRoutes(currentUser)}</Switch>
              </Grid>
            </SemanticSidebar.Pusher>
          </SemanticSidebar.Pushable>
        )}
      </MenuContext.Consumer>
    </Fragment>
  );
}

Layout.propTypes = {
  currentUser: PropTypes.object,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

Layout.defaultProps = {
  currentUser: undefined,
  location: {}
};

export const LayoutWithRouter = withRouter(Layout);
