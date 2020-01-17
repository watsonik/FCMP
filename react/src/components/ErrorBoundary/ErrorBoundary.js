import React, { Component } from 'react';
import { Modal } from '../UI';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
  }

  static getDerivedStateFromError = (error) => {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch = (error) => {
    console.error(`An error has occurred: ${error.message}`)
  }

  modalToggleHandler = () => {
    this.setState({ error: null });
    location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Modal
            show={this.state.hasError}
            toggle={this.modalToggleHandler}>
            {this.state.hasError ? this.state.error.message : null}
          </Modal>
          {this.props.children}
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary;
