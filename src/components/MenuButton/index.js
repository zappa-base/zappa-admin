import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

import styles from './menuButton.module.css';
import { MenuContext } from '../Contexts/MenuContext';

export function MenuButton() {
  return (
    <MenuContext.Consumer>
      {({ state, toggleMenu }) => {
        return (
          <div
            className={`${styles.buttonWrapper} ${
              state.opened ? styles.opened : styles.closed
            }`}
          >
            <Button circular icon onClick={toggleMenu}>
              <Icon name={state.opened ? 'close' : 'bars'} />
            </Button>
          </div>
        );
      }}
    </MenuContext.Consumer>
  );
}
