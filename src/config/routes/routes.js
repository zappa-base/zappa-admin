import { asyncComponent } from '../../helpers/asyncComponent/asyncComponent';

export const unauthenticated = [
  {
    component: asyncComponent(() => import('../../pages/LoginPage')),
    exact: false,
    path: '/login',
    title: 'Login'
  }
];

export const authenticated = [
  {
    component: asyncComponent(() => import('../../pages/HomePage')),
    exact: true,
    path: '/',
    title: 'Home'
  },
  {
    component: asyncComponent(() => import('../../pages/UsersPage')),
    exact: false,
    path: '/users',
    title: 'Users'
  }
];

export const defaults = [
  {
    component: asyncComponent(() => import('../../pages/AboutPage')),
    exact: false,
    path: '/about',
    title: 'About'
  }
];

export const notFound = [
  {
    component: asyncComponent(() => import('../../pages/NotFound')),
    exact: false,
    title: 'Page Not Found'
  }
];
