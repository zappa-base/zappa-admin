import { MemoryRouter } from 'react-router';
import { Sidebar as SemanticSidebar, Segment } from 'semantic-ui-react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import React from 'react';

import { Sidebar } from '.';
import { ParagraphLoader } from '../Loaders/ParagraphLoader';

storiesOf('Sidebar', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('default', () => (
    <SemanticSidebar.Pushable as={Segment}>
      <Sidebar opened={boolean('Opened', true)} />
      <SemanticSidebar.Pusher>
        <div style={{ padding: 20 }}>
          <ParagraphLoader />
          <ParagraphLoader />
          <ParagraphLoader />
          <ParagraphLoader />
        </div>
      </SemanticSidebar.Pusher>
    </SemanticSidebar.Pushable>
  ));
