export const authenticated = [
  {
    component: () => import('../../pages/HomePage'),
    exact: true,
    path: '/',
    title: 'Home',
    role: 'user'
  },
  {
    component: () => import('../../pages/UsersPage'),
    exact: false,
    path: '/users',
    title: 'Users',
    role: 'admin'
  },
  {
    component: () => import('../../pages/LogoutPage'),
    exact: false,
    icon: 'sign-out',
    path: '/logout',
    title: 'Logout'
  }
];
