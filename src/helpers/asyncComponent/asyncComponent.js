import React, { useState, useEffect } from 'react';

export function asyncComponent(importComponent, title) {
  let unmounted = false;

  return function AsyncComponent(props) {
    const [state, setState] = useState({ component: null });

    useEffect(() => {
      async function getComponent() {
        const { default: component } = await importComponent();

        if (!unmounted) {
          document.title = title ? `${title} - Zappa Admin` : 'Zappa Admin';

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
