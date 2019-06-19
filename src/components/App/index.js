import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LayoutWithRouter } from '../Layout';
import { MenuContextProvider } from '../MenuContext';

export function App() {
  return (
    <BrowserRouter>
      <MenuContextProvider>
        <LayoutWithRouter />
      </MenuContextProvider>
    </BrowserRouter>
  );
}
