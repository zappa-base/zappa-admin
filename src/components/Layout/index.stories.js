import { storiesOf } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router';

import { LayoutWithRouter } from '.';
import { MenuContextProvider } from '../Contexts/MenuContext';

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
