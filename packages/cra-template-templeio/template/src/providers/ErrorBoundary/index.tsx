import React, { Component, ErrorInfo, ReactNode } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './index.types';

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
  > {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): { hasError: true } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (process.env.REACT_APP_SENTRY_DSN) {
      console.error(errorInfo);
      // Sentry.withScope((scope) => {
      //   scope.setExtras({ errorInfo });
      //   Sentry.captureException(error);
      // });
    }
  }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <div>Something went wrong. Implement pretty error page here.</div>;
    }

    return children;
  }
}
