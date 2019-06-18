import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import { LayoutWithRouter } from '.';
import { MenuContextProvider } from '../MenuContext';

storiesOf('Layout', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => {
    return (
      <MenuContextProvider>
        <LayoutWithRouter />
      </MenuContextProvider>
    );
  });
