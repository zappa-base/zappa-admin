export const unauthenticated = [
  {
    component: () => import('../../pages/SignUpPage'),
    exact: false,
    path: '/signup',
    title: 'Sign Up'
  },
  {
    component: () => import('../../pages/LoginPage'),
    exact: false,
    icon: 'sign-in',
    path: '/login',
    title: 'Login'
  }
];

export const authenticated = [
  {
    component: () => import('../../pages/HomePage'),
    exact: true,
    path: '/',
    title: 'Home'
  },
  {
    component: () => import('../../pages/UsersPage'),
    exact: false,
    path: '/users',
    title: 'Users'
  },
  {
    component: () => import('../../pages/LogoutPage'),
    exact: false,
    icon: 'sign-out',
    path: '/logout',
    title: 'Logout'
  }
];

export const defaults = [
  {
    component: () => import('../../pages/AboutPage'),
    exact: false,
    path: '/about',
    title: 'About'
  }
];

export const notFound = [
  {
    component: () => import('../../pages/NotFound'),
    exact: false,
    title: 'Page Not Found'
  }
];
