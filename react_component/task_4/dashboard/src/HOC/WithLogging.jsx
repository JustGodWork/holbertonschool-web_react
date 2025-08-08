import React from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function WithLogging(WrappedComponent) {
  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrappedComponent)} is going to unmount`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  WithLoggingComponent.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;
  return WithLoggingComponent;
}

export default WithLogging;
