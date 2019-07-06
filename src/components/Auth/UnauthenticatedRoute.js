import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export function UnauthenticatedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (!rest.currentUser) {
          return <Component {...props} />;
        }
        return (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        );
      }}
    />
  );
}

UnauthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

UnauthenticatedRoute.defaultProps = {
  location: {}
};
