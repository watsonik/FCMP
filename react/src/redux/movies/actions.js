import {
  CHANGE_SORT_TYPE,
  CHANGE_SEARCH_TYPE,
  CHANGE_CURRENT_MOVIE,
  GET_MOVIES,
} from './actionTypes';

export const changeSortType = (newType) => ({
  type: CHANGE_SORT_TYPE,
  payload: newType,
});

export const changeSearchType = (newType) => ({
  type: CHANGE_SEARCH_TYPE,
  payload: newType,
});

export const changeCurrentMovie = (movieId) => ({
  type: CHANGE_CURRENT_MOVIE,
  payload: movieId,
});

export const getMovies = (searchQuery) => ({
  type: GET_MOVIES,
  payload: searchQuery,
});
