import React from 'react';
import { UserContext } from '.';

export function withUserContext(Component) {
  return function WrapperComponent(props) {
    return (
      <UserContext.Consumer>
        {({ currentUser }) => (
          <Component currentUser={currentUser} {...props} />
        )}
      </UserContext.Consumer>
    );
  };
}
