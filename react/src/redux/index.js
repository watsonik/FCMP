import { reducer as movieReducer } from './movies/reducer';
export * from './movies/actions';

export const reducers = [
  movieReducer,
]
