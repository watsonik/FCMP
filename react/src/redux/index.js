import { reducer as app } from './app/reducer';
import { reducer as data} from './dataService/reducer';
export * from './app/actions';
export * from './dataService/actions';
export * from './actionTypes';

export const reducers = {
  app,
  data,
}