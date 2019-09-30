import React from 'react';
import { TabbedRoutes } from '../../components/Tabs/TabbedRoutes';
import { pagesSharedPropTypes } from '../../helpers/proptypes/pagesSharedPropTypes';
import { userPagePanes } from './userPagePanes';

export default function UsersPage({ match }) {
  return <TabbedRoutes baseLink={match.path} panes={userPagePanes} />;
}

UsersPage.propTypes = pagesSharedPropTypes;
