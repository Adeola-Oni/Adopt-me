import React from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return this.setState({ hasError: true });
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary caught and error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing
          <Link to="/">Click here</Link>
          to go back to the homepage or wait 5seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
