import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid, Segment } from 'semantic-ui-react';
import { StatePrinter } from './StatePrinter';

const objState = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4'
};

const arrayState = ['array1', 'array2', 'array3', 'array4', 'array5', 'array6'];

storiesOf('Tools/StatePrinter', module)
  .add('state as Object', () => (
    <Grid centered>
      <Grid.Column width="6">
        <Segment>
          <StatePrinter label="default" state={objState} />
        </Segment>
      </Grid.Column>
    </Grid>
  ))
  .add('state as Array', () => (
    <Grid centered>
      <Grid.Column width="6">
        <Segment>
          <StatePrinter label="default" state={arrayState} />
        </Segment>
      </Grid.Column>
    </Grid>
  ))
  .add('state as String', () => (
    <Grid centered>
      <Grid.Column width="6">
        <Segment>
          <StatePrinter label="default" state="String State" />
        </Segment>
      </Grid.Column>
    </Grid>
  ))
  .add('state as Number', () => (
    <Grid centered>
      <Grid.Column width="6">
        <Segment>
          <StatePrinter label="default" state={1000} />
        </Segment>
      </Grid.Column>
    </Grid>
  ))
  .add('state as Boolean', () => (
    <Grid centered>
      <Grid.Column width="6">
        <Segment>
          <StatePrinter label="default" state={false} />
        </Segment>
      </Grid.Column>
    </Grid>
  ));
