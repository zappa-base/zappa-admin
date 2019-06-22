import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isRequiredRoleLevel } from '../../helpers/auth/roleLevels';

export function AuthenticatedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (
          rest.currentUser &&
          (!rest.requiredRole ||
            isRequiredRoleLevel(rest.currentUser.role, rest.requiredRole))
        ) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
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
