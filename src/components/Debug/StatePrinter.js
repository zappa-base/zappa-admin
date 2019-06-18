import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Segment } from 'semantic-ui-react';

export function StatePrinter({ shouldConsole, label, state }) {
  if (shouldConsole) {
    console.info(state);
  }

  return (
    <Container>
      <Segment padded>
        <Label attached="top">{label || ''} State</Label>
        {(() => {
          if (typeof state !== 'boolean' && !state) return 'null';

          switch (typeof state) {
            case 'string':
            case 'number':
            case 'boolean':
              return (
                <div>
                  <span>{`${state}`}</span>
                </div>
              );
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
  label: PropTypes.string,
  shouldConsole: PropTypes.bool,
  state: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string
  ])
};

StatePrinter.defaultProps = {
  shouldConsole: true,
  label: '',
  state: null
};
