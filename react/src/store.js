import { createStore, combineReducers} from 'redux';
import { reducers } from './redux';

const store = reducers.length > 1
  ? createStore(combineReducers(...reducers))
  : createStore(...reducers);

export default store;