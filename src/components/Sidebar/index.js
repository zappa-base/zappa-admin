import PropTypes from 'prop-types';
import { Menu, Sidebar as SemanticSidebar } from 'semantic-ui-react';
import React from 'react';
import { buildSideBarItems } from '../../config/menu/buildSideBarItems';

export function Sidebar({ currentPathname, opened }) {
  return (
    <SemanticSidebar
      animation="push"
      as={Menu}
      direction="left"
      icon="labeled"
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
        <Menu.Header>Zappa-Admin</Menu.Header>
        <Menu.Menu>{buildSideBarItems(currentPathname, true)}</Menu.Menu>
      </Menu.Item>
    </SemanticSidebar>
  );
}

Sidebar.propTypes = {
  currentPathname: PropTypes.string,
  opened: PropTypes.bool
};

Sidebar.defaultProps = {
  currentPathname: '/',
  opened: true
};
