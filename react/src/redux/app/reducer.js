import {
  CHANGE_SORT_TYPE,
  CHANGE_SEARCH_TYPE,
  CHANGE_CURRENT_MOVIE
} from '../actionTypes';

const initialState = {
  movies: [],
  fetchingMovies: false,
  error: '',
  searchBy: 'title',
  sortBy: 'release_date',
  searchQuery: '',
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

    // case GET_MOVIES:
    //   const { searchBy, sortBy } = state;
    //   const result = moviesSource.filter(movie => {
    //     if (typeof movie[searchBy] === 'string') {
    //       return movie[searchBy]
    //         .toLowerCase()
    //         .includes(payload.toLowerCase())
    //     }

    //     return movie[searchBy].some(
    //       genre => genre
    //         .toLowerCase()
    //         .includes(payload.toLowerCase())
    //     )
    //   }).sort((a, b) => {
    //     return a[sortBy] < b[sortBy] ? -1 : 1;
    //   });

    //   return {
    //     ...state,
    //     movies: result,
    //   };

    default:
      return state;
  }
};