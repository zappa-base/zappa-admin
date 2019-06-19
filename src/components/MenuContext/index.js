import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  opened: true
};

export const MenuContext = createContext(initialState);

export function MenuContextProvider({ children }) {
  const [state, setState] = useState(initialState);

  return (
    <MenuContext.Provider
      value={{
        state,
        toggleMenu: toggle => {
          setState({ opened: toggle !== 'undefined' ? !state.opened : toggle });
        }
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

MenuContextProvider.propTypes = {
  children: PropTypes.node
};

MenuContextProvider.defaultProps = {
  children: null
};
