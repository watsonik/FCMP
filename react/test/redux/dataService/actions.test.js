import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesError,
  changeSearchQuery } from '../../../src/redux';

import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  CHANGE_SEARCH_QUERY
} from '../../../src/redux';

describe('action', () => {
  it('should create an action to change the status of data fetching', () => {
    const expectedAction = {
      type: FETCH_MOVIES_REQUEST,
    };
    expect(fetchMoviesRequest()).toEqual(expectedAction);
  });
});

describe('action', () => {
  it('should create an action to update the movies list', () => {
    const movies = [ 'a', 'b', 'c' ];
    const expectedAction = {
      type: FETCH_MOVIES_SUCCESS,
      payload: movies,
    };
    expect(fetchMoviesSuccess(movies)).toEqual(expectedAction);
  });
});

describe('action', () => {
  it('should create an action to pass an error to state when fetching fails', () => {
    const error = new Error('unable to fetch');
    const expectedAction = {
      type: FETCH_MOVIES_FAILURE,
      payload: error,
    };
    expect(fetchMoviesError(error)).toEqual(expectedAction);
  });
});

describe('action', () => {
  it('should create an action to change the search request', () => {
    const searchQuery = 'batman';
    const expectedAction = {
      type: CHANGE_SEARCH_QUERY,
      payload: searchQuery,
    };
    expect(changeSearchQuery(searchQuery)).toEqual(expectedAction);
  });
});

