import React from 'react';
import { Route } from 'react-router-dom';

import { authenticated, defaults, notFound, unauthenticated } from './routes';

function mapRoute(route) {
  return (
    <Route exact={route.exact} path={route.path} component={route.component} />
  );
}

export function buildRoutes() {
  const unauthenticatedRoutes = unauthenticated.map(mapRoute);

  const authenticatedRoutes = authenticated.map(mapRoute);

  const defaultsRoutes = defaults.map(mapRoute);

  const notFoundRoute = notFound.map(mapRoute);

  return unauthenticatedRoutes
    .concat(authenticatedRoutes)
    .concat(defaultsRoutes)
    .concat(notFoundRoute);
}
