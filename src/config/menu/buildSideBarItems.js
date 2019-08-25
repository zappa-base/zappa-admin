import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import { authenticated, defaults, unauthenticated } from '../routes/routes';
import { isRequiredRoleLevel } from '../../helpers/auth/roleLevels';

function mapMenuItemGroup() {
  return route => (
    <Menu.Item
      exact={route.path === '/'}
      as={NavLink}
      key={route.title}
      to={route.path}
    >
      {route.icon && <Icon name={route.icon} />}
      {route.title}
    </Menu.Item>
  );
}

export function buildSideBarItems(currentPathname, currentUser) {
  const sidebarMapper = mapMenuItemGroup();

  const defaultItems = defaults.map(sidebarMapper);
  const conditionalItems = (currentUser
    ? authenticated.filter(
        route =>
          !route.role || isRequiredRoleLevel(currentUser.role, route.role)
      )
    : unauthenticated.filter(route => !route.skipSidebar)
  ).map(sidebarMapper);

  return defaultItems.concat(conditionalItems);
}
