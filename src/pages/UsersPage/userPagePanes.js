import React from 'react';
import { UsersTab } from './UsersTab';

export const userPagePanes = [
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
