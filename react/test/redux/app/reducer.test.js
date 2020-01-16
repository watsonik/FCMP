import {
  CHANGE_SORT_TYPE,
  CHANGE_SEARCH_TYPE,
  CHANGE_CURRENT_MOVIE,
} from '../../../src/redux';

import { reducer } from '../../../src/redux/app/reducer';

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        fetchingMovies: false,
        error: '',
        searchBy: 'title',
        sortBy: 'release_date',
        currentMovie: null,
      }
    )
  });

  it('should handle CHANGE_SORT_TYPE', () => {
    expect(
      reducer(undefined, {
        type: CHANGE_SORT_TYPE,
        payload: 'title'
      })
    ).toEqual(
      {
        fetchingMovies: false,
        error: '',
        searchBy: 'title',
        sortBy: 'title',
        currentMovie: null,
      }
    )
  });

  it('should handle CHANGE_SEARCH_TYPE', () => {
    expect(
      reducer(undefined, {
        type: CHANGE_SEARCH_TYPE,
        payload: 'genres'
      })
    ).toEqual(
      {
        fetchingMovies: false,
        error: '',
        searchBy: 'genres',
        sortBy: 'release_date',
        currentMovie: null,
      }
    )
  });

  it('should handle CHANGE_CURRENT_MOVIE', () => {
    expect(
      reducer(undefined, {
        type: CHANGE_CURRENT_MOVIE,
        payload: {
          id: 2661,
          title: "Batman",
          tagline: "He's Here Big As Life In A Real Bat-Epic",
          vote_average: 6.1,
          vote_count: 269,
          release_date: "1966-07-30",
          poster_path: "https://image.tmdb.org/t/p/w500/udDVJXtAFsQ8DimrXkVFqy4DGEQ.jpg",
          overview: "The Dynamic Duo faces four super-villains who plan to hold the world for ransom with the help of a secret invention that instantly dehydrates people.",
          budget: 1377800,
          revenue: 0,
          genres: (5) ["Family", "Adventure", "Comedy", "Science Fiction", "Crime"],
        },
      })
    ).toEqual(
      {
        fetchingMovies: false,
        error: '',
        searchBy: 'title',
        sortBy: 'release_date',
        currentMovie: {
          id: 2661,
          title: "Batman",
          tagline: "He's Here Big As Life In A Real Bat-Epic",
          vote_average: 6.1,
          vote_count: 269,
          release_date: "1966-07-30",
          poster_path: "https://image.tmdb.org/t/p/w500/udDVJXtAFsQ8DimrXkVFqy4DGEQ.jpg",
          overview: "The Dynamic Duo faces four super-villains who plan to hold the world for ransom with the help of a secret invention that instantly dehydrates people.",
          budget: 1377800,
          revenue: 0,
          genres: (5) ["Family", "Adventure", "Comedy", "Science Fiction", "Crime"],
        },
      }
    )
  });
})
