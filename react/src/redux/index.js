import { reducer as app } from './app/reducer';
import { reducer as data} from './dataService/reducer';
export * from './app/actions';
export * from './dataService/actions';

export const reducers = {
  app,
  data,
}