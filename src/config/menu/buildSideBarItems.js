import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { authenticated, defaults, unauthenticated } from '../routes/routes';

export function buildSideBarItems(currentPathname, userAuthenticated = false) {
  const routesToBuild = defaults.concat(
    userAuthenticated ? authenticated : unauthenticated
  );

  return routesToBuild.map(route => (
    <Menu.Item
      active={currentPathname === route.path}
      as={Link}
      to={route.path}
    >
      {route.title}
    </Menu.Item>
  ));
}
