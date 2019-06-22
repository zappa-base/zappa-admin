import React from 'react';
import { Route } from 'react-router-dom';

import { authenticated, defaults, notFound, unauthenticated } from './routes';
import { asyncComponent } from '../../helpers/asyncComponent/asyncComponent';
import { AuthenticatedRoute } from '../../components/Auth/AuthenticatedRoute';

function mapRoute(currentUser, type = 'default') {
  const RouteType = type === 'authenticated' ? AuthenticatedRoute : Route;

  return route => (
    <RouteType
      component={asyncComponent(route.component)}
      currentUser={currentUser}
      exact={route.exact}
      key={route.title}
      path={route.path}
      requiredRole={route.role}
    />
  );
}

export function buildRoutes(currentUser) {
  const unauthenticatedRoutes = unauthenticated.map(mapRoute(currentUser));

  const authenticatedRoutes = authenticated.map(
    mapRoute(currentUser, 'authenticated')
  );

  const defaultsRoutes = defaults.map(mapRoute(currentUser));

  const notFoundRoute = notFound.map(mapRoute(currentUser));

  return unauthenticatedRoutes
    .concat(authenticatedRoutes)
    .concat(defaultsRoutes)
    .concat(notFoundRoute);
}
