import { changeSortType, changeSearchType, changeCurrentMovie } from '../../../src/redux';
import { CHANGE_SORT_TYPE, CHANGE_SEARCH_TYPE, CHANGE_CURRENT_MOVIE } from '../../../src/redux';

describe('action', () => {
  it('should create an action to change sorting type (year/title)', () => {
    const sortBy = 'year';
    const expectedAction = {
      type: CHANGE_SORT_TYPE,
      payload: sortBy,
    };
    expect(changeSortType(sortBy)).toEqual(expectedAction);
  })
});

describe('action', () => {
  it('should create an action to change search type (title/genres)', () => {
    const searchBy = 'genres';
    const expectedAction = {
      type: CHANGE_SEARCH_TYPE,
      payload: searchBy,
    };
    expect(changeSearchType(searchBy)).toEqual(expectedAction);
  })
});

describe('action', () => {
  it('should create an action to change selected movie', () => {
    const currentMovie = {
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
    };
    const expectedAction = {
      type: CHANGE_CURRENT_MOVIE,
      payload: currentMovie,
    };
    expect(changeCurrentMovie(currentMovie)).toEqual(expectedAction);
  })
});

