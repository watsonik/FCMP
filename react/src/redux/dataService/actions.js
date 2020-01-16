import axios from 'axios';
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  CHANGE_SEARCH_QUERY
} from '../actionTypes';

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesError = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const changeSearchQuery = (query) => ({
  type: CHANGE_SEARCH_QUERY,
  payload: query,
});

export const fetchMovies = (searchQuery) => {
  return (dispatch, getState) => {
    const { searchBy, sortBy } = getState().app;
    dispatch(fetchMoviesRequest());
    dispatch(changeSearchQuery(searchQuery))
    axios.get(`https://reactjs-cdp.herokuapp.com/movies?search=${searchQuery}&searchBy=${searchBy}&sortBy=${sortBy}&limit=9&sortOrder=ascending
    `)
      .then(response => dispatch(fetchMoviesSuccess(response.data.data)))
      .catch(error => dispatch(fetchMoviesError(error.message)));
  }
};