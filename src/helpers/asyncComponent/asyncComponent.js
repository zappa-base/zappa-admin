import React, { useState, useEffect } from 'react';

export function asyncComponent(importComponent) {
  let unmounted = false;

  return function AsyncComponent(props) {
    const [state, setState] = useState({ component: null });

    useEffect(() => {
      async function getComponent() {
        const { default: component } = await importComponent();

        if (!unmounted) {
          setState({
            component
          });
        }
      }

      getComponent();

      return () => {
        unmounted = true;
      };
    });

    const { component: C } = state;

    return C ? <C {...props} /> : null;
  };
}
