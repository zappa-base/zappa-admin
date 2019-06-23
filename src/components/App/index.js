import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LayoutWithRouterUser } from '../Layout';
import { MenuContextProvider } from '../Contexts/MenuContext';
import { UserContextProvider } from '../Contexts/UserContext';

export function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <MenuContextProvider>
          <LayoutWithRouterUser />
        </MenuContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}
