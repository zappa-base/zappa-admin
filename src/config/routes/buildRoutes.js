import React from 'react';
import { Route } from 'react-router-dom';

import { authenticated, defaults, notFound, unauthenticated } from './routes';
import { asyncComponent } from '../../helpers/asyncComponent/asyncComponent';
import { AuthenticatedRoute } from '../../components/Auth/AuthenticatedRoute';
import { UnauthenticatedRoute } from '../../components/Auth/UnauthenticatedRoute';

function mapRoute(currentUser, type = 'default') {
  let RouteType = Route;

  switch (type) {
    case 'authenticated':
      RouteType = AuthenticatedRoute;
      break;
    case 'unauthenticated':
      RouteType = UnauthenticatedRoute;
      break;
    default:
      break;
  }

  return route => (
    <RouteType
      component={asyncComponent(route.component, route.title)}
      currentUser={currentUser}
      exact={route.exact}
      key={route.title}
      path={route.path}
      requiredRole={route.role}
    />
  );
}

export function buildRoutes(currentUser) {
  const unauthenticatedRoutes = unauthenticated.map(
    mapRoute(currentUser, 'unauthenticated')
  );

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
