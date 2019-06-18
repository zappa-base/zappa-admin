import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

function getInitialState() {
  return {
    opened: true
  };
}

export const MenuContext = createContext(getInitialState());

export function MenuContextProvider({ children }) {
  const [state, setState] = useState(getInitialState());

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
