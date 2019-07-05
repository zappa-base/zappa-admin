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
  },
  {
    component: () => import('../../pages/ConfirmPasswordPage'),
    exact: false,
    path: '/activate-account',
    skipSidebar: true,
    title: 'Confirm Account'
  }
];
