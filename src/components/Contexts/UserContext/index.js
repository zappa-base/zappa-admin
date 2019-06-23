import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { reducer } from './reducer';
import { initialState } from './initialState';
import { actionTypes } from './actionTypes';

export const UserContext = createContext(initialState);

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{
        currentUser: state,
        dispatch,
        login: data => dispatch({ type: actionTypes.LOGIN, data }),
        logout: () => dispatch({ type: actionTypes.LOGOUT })
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node
};

UserContextProvider.defaultProps = {
  children: null
};
