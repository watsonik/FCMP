import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducers } from './redux';

const store = createStore(
    combineReducers(reducers), applyMiddleware(thunk)
);

export default store;