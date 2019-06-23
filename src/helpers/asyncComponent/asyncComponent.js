import React, { Component } from 'react';

export function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    unmounted = false;

    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      if (this.unmounted) {
        return;
      }

      this.setState({
        component
      });
    }

    componentWillUnmount() {
      this.unmounted = true;
    }

    render() {
      const { component: C } = this.state;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
