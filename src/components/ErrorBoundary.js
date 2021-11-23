import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log(">> what is the error??", error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError && !this.props.message) {
      return <>Something has gone terribly wrong D:</>;
    }
    if (this.state.hasError && this.props.message) {
      return <>{this.props.message}</>;
    }
    return this.props.children;
  }
}
