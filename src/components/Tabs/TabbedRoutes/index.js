import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import { Container, Menu, Segment } from 'semantic-ui-react';

const PanesInterface = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.element
  ]),
  exact: PropTypes.bool,
  path: PropTypes.string,
  tabPath: PropTypes.string,
  text: PropTypes.string
};

export function TabbedRoutes({ baseLink, panes }) {
  return (
    <Container fluid textAlign="left">
      <Menu attached="top" tabular>
        {panes.map(({ exact, path, tabPath, text }) => (
          <Menu.Item
            as={NavLink}
            exact={exact}
            key={path}
            to={baseLink + (tabPath || path)}
          >
            {text}
          </Menu.Item>
        ))}
      </Menu>
      <Segment attached="bottom">
        {panes.map(({ component, exact, path }) => (
          <Route
            component={component}
            exact={exact}
            key={path}
            path={baseLink + path}
          />
        ))}
      </Segment>
    </Container>
  );
}

TabbedRoutes.propTypes = {
  baseLink: PropTypes.string.isRequired,
  panes: PropTypes.arrayOf(PropTypes.shape(PanesInterface)).isRequired
};
