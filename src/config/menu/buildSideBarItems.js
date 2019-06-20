import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { authenticated, defaults, unauthenticated } from '../routes/routes';

function mapMenuItemGroup(currentPathname) {
  return route => (
    <Menu.Item
      active={currentPathname === route.path}
      as={Link}
      to={route.path}
    >
      {route.icon && <Icon name={route.icon} />}
      {route.title}
    </Menu.Item>
  );
}

export function buildSideBarItems(currentPathname, userAuthenticated = false) {
  const sidebarMapper = mapMenuItemGroup(currentPathname);

  const defaultItems = defaults.map(sidebarMapper);
  const conditionalItems = (userAuthenticated
    ? authenticated
    : unauthenticated
  ).map(sidebarMapper);

  return defaultItems.concat(conditionalItems);
}
