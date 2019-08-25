import React from 'react';
import { Container } from 'semantic-ui-react';
import { TabbedRoutes } from '../../components/Tabs/TabbedRoutes';
import { UsersTab } from './UsersTab';
import { pagesSharedPropTypes } from '../pagesSharedPropTypes';

const panesTest = [
  {
    component: UsersTab,
    exact: true,
    path: '',
    text: 'Users'
  },
  {
    component: () => <div>Nothing</div>,
    path: '/edit/:id?',
    tabPath: '/edit',
    text: 'Edit User'
  }
];

export default function UsersPage({ match }) {
  return (
    <Container fluid>
      <TabbedRoutes baseLink={match.path} panes={panesTest} />
    </Container>
  );
}

UsersPage.propTypes = pagesSharedPropTypes;
