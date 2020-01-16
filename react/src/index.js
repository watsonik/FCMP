import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import store from './store';
import './style/index.scss';

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root')
);
