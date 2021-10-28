import React, { Component, ReactNode } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.types';

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

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <div>Something went wrong. Implement pretty error page here.</div>;
    }

    return children;
  }
}
