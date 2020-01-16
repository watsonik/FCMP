import {
  CHANGE_SORT_TYPE,
  CHANGE_SEARCH_TYPE,
  GET_MOVIES,
  CHANGE_CURRENT_MOVIE
} from './actionTypes';
import movies from '../../../tempdata';

const initialState = {
  movies: [],
  searchBy: 'title',
  sortBy: 'year',
  searchQuery: '',
  currentMovie: null,
}

export const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case CHANGE_SORT_TYPE:
      return {
        ...state,
        sortBy: payload,
      };

    case CHANGE_SEARCH_TYPE:
      return {
        ...state,
        searchBy: payload,
      };

    case CHANGE_CURRENT_MOVIE:
      const currentMovie = state.movies
        .find(movie => movie.id === payload);
      return {
        ...state,
        currentMovie,
      };

    case GET_MOVIES:
      const { searchBy } = state;
      const result = movies.filter(movie => {
        if (typeof movie[searchBy] === 'string') {
          return movie[searchBy]
            .toLowerCase()
            .includes(payload.toLowerCase())
        }

        return movie[searchBy].some(
          genre => genre
            .toLowerCase()
            .includes(payload.toLowerCase())
        )
      })
      return {
        ...state,
        movies: result,
      };

    default:
      return state;
  }
};