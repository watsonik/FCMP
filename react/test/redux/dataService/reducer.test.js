import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  CHANGE_SEARCH_QUERY,
} from '../../../src/redux';


import { reducer } from '../../../src/redux/dataService/reducer';

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        movies: [],
        fetchingMovies: false,
        error: '',
        searchQuery: '',
      }
    )
  });

  it('should handle FETCH_MOVIES_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: FETCH_MOVIES_REQUEST,
      })
    ).toEqual(
      {
        movies: [],
        fetchingMovies: true,
        error: '',
        searchQuery: '',
      }
    )
  });

  it('should handle FETCH_MOVIES_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: FETCH_MOVIES_SUCCESS,
        payload: [ 'a', 'b', 'c'],
      })
    ).toEqual(
      {
        movies: [ 'a', 'b', 'c'],
        fetchingMovies: false,
        error: '',
        searchQuery: '',
      }
    )
  });

  it('should handle FETCH_MOVIES_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: FETCH_MOVIES_FAILURE,
        payload: 'something went wrong',
      })
    ).toEqual(
      {
        movies: [],
        fetchingMovies: false,
        error: 'something went wrong',
        searchQuery: '',
      }
    )
  });

  it('should handle CHANGE_SORT_TYPE', () => {
    expect(
      reducer(undefined, {
        type: CHANGE_SEARCH_QUERY,
        payload: 'batman'
      })
    ).toEqual(
      {
        movies: [],
        fetchingMovies: false,
        error: '',
        searchQuery: 'batman',
      }
    )
  });
})