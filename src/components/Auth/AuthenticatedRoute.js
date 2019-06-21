import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export function AuthenticatedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

AuthenticatedRoute.defaultProps = {
  location: {}
};
