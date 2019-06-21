import React from 'react';
import { Route } from 'react-router-dom';

import { authenticated, defaults, notFound, unauthenticated } from './routes';
import { asyncComponent } from '../../helpers/asyncComponent/asyncComponent';
import { AuthenticatedRoute } from '../../components/Auth/AuthenticatedRoute';

function mapRoute(type = 'default') {
  const RouteType = type === 'authenticated' ? AuthenticatedRoute : Route;

  return route => (
    <RouteType
      component={asyncComponent(route.component)}
      exact={route.exact}
      key={route.title}
      path={route.path}
    />
  );
}

export function buildRoutes() {
  const unauthenticatedRoutes = unauthenticated.map(mapRoute());

  const authenticatedRoutes = authenticated.map(mapRoute('authenticated'));

  const defaultsRoutes = defaults.map(mapRoute());

  const notFoundRoute = notFound.map(mapRoute());

  return unauthenticatedRoutes
    .concat(authenticatedRoutes)
    .concat(defaultsRoutes)
    .concat(notFoundRoute);
}
