import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LayoutWithRouter } from '../Layout';
import { MenuContextProvider } from '../Contexts/MenuContext';

export function App() {
  return (
    <BrowserRouter>
      <MenuContextProvider>
        <LayoutWithRouter />
      </MenuContextProvider>
    </BrowserRouter>
  );
}
