import React from 'react';
import { MemoryRouter } from 'react-router';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { LayoutWithRouter } from '.';
import { MenuContextProvider } from '../Contexts/MenuContext';

storiesOf('Layout', module)
  .addDecorator(withKnobs)
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
    const currentUser = {
      role: select(
        'Role',
        {
          Admin: 'admin',
          User: 'user',
          Moderator: 'moderator'
        },
        'admin'
      )
    };

    return (
      <MenuContextProvider>
        <LayoutWithRouter currentUser={currentUser} />
      </MenuContextProvider>
    );
  });
