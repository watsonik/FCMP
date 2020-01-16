import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './style/index.scss';

ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('root'));