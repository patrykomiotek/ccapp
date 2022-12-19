import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  // this.props
  // this.state

  state = {
    hasError: false,
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hasError: false,
  //   }
  // }

  static getDerivedStateFromError(error: Error) {
    console.log('getDerivedStateFromProps: ', error);

    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // sentry
    console.error('error: ', error);
    // this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{ fontWeight: 'bold', margin: 10 }}
          onClick={() => this.setState({ hasError: false })}
        >
          <p>{this.props.fallback ? this.props.fallback : "Error!!!"}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
