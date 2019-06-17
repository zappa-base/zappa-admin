import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Segment } from 'semantic-ui-react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { StatePrinter } from './StatePrinter';

const state = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4'
};

storiesOf('Tools/StatePrinter', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Grid centered>
      <Grid.Column width="6">
        <Segment>
          <StatePrinter label="default" state={state} />
        </Segment>
      </Grid.Column>
    </Grid>
  ))
  .add('as dynamic variables', () => {
    const localState = {
      key1: text('key1', ''),
      key2: text('key2', ''),
      key3: text('key3', ''),
      key4: text('key4', '')
    };

    return (
      <Grid centered>
        <Grid.Column width="6">
          <Segment>
            <StatePrinter state={localState} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  });
