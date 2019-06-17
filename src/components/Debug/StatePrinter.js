import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Segment } from 'semantic-ui-react';

export function StatePrinter({ console, label, state }) {
  if (console) {
    console.log(state);
  }

  return (
    <Container>
      <Segment padded>
        <Label attached="top">{label || ''} State</Label>
        {(() => {
          if (!state) return 'null';

          switch (typeof state) {
            case 'string':
            case 'number':
            case 'boolean':
              return state;
            default:
              return Object.keys(state).map(key => (
                <div>
                  <span>{`${key} : ${state[key]}`}</span>
                </div>
              ));
          }
        })()}
      </Segment>
    </Container>
  );
}

StatePrinter.propTypes = {
  console: PropTypes.bool,
  label: PropTypes.string,
  state: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string
  ])
};

StatePrinter.defaultProps = {
  console: true,
  label: '',
  state: null
};
