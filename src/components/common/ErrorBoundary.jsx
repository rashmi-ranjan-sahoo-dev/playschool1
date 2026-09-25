import React from 'react';

/**
 * Graceful Error Boundary to prevent full-screen crashes
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="py-8 px-4 text-center text-stone-500 text-sm">
          <p>This section is temporarily unavailable.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
