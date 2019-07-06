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
  },
  {
    component: () => import('../../pages/ForgotPasswordPage'),
    exact: false,
    path: '/forgot-password',
    skipSidebar: true,
    title: 'Forgot Password'
  },
  {
    component: () => import('../../pages/ResetPasswordPage'),
    exact: false,
    path: '/reset-password',
    skipSidebar: true,
    title: 'Reset Password'
  }
];
