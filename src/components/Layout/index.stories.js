import { storiesOf } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router';

import { LayoutWithRouter } from '.';
import { MenuContextProvider } from '../Contexts/MenuContext';

const currentUser = {
  role: 'admin'
};

storiesOf('Layout', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Unauthenticated', () => {
    return (
      <MenuContextProvider>
        <LayoutWithRouter />
      </MenuContextProvider>
    );
  })
  .add('Authenticated', () => {
    return (
      <MenuContextProvider>
        <LayoutWithRouter currentUser={currentUser} />
      </MenuContextProvider>
    );
  });
