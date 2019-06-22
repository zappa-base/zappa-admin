import PropTypes from 'prop-types';
import { Menu, Sidebar as SemanticSidebar } from 'semantic-ui-react';
import React from 'react';
import { buildSideBarItems } from '../../config/menu/buildSideBarItems';

export function Sidebar({ currentPathname, currentUser, opened }) {
  return (
    <SemanticSidebar
      animation="push"
      as={Menu}
      direction="left"
      inverted
      vertical
      visible={opened}
      width="thin"
    >
      <Menu.Item>
        <Menu.Menu>
          <Menu.Item>
            {/* Spacer */}
            <div style={{ marginTop: '2em' }} />
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>
      <Menu.Item>
        <Menu.Header as="h2">Zappa-Admin</Menu.Header>
      </Menu.Item>
      {buildSideBarItems(currentPathname, currentUser)}
    </SemanticSidebar>
  );
}

Sidebar.propTypes = {
  currentPathname: PropTypes.string,
  currentUser: PropTypes.object,
  opened: PropTypes.bool
};

Sidebar.defaultProps = {
  currentPathname: '/',
  currentUser: undefined,
  opened: true
};
