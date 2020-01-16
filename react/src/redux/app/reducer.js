import {
  CHANGE_SORT_TYPE,
  CHANGE_SEARCH_TYPE,
  CHANGE_CURRENT_MOVIE
} from '../actionTypes';

const initialState = {
  fetchingMovies: false,
  error: '',
  searchBy: 'title',
  sortBy: 'release_date',
  currentMovie: null,
}

export const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case CHANGE_SORT_TYPE:
      return {
        ...state,
        sortBy: payload === 'year'
          ? 'release_date'
          : payload
      };

    case CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchBy: payload,
      };

    case CHANGE_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: payload,
      };

    default:
      return state;
  }
};