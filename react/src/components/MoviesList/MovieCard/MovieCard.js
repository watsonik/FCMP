import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeCurrentMovie, fetchMovies, changeSearchType, changeSortType } from '../../../redux';

import './MovieCard.scss';

const mapDispatchToProps = dispatch => ({
    changeCurrentMovie: movieId => dispatch(changeCurrentMovie(movieId)),
    fetchMovies: (searchQuery, searchBy) => dispatch(fetchMovies(searchQuery, searchBy)),
    changeSearchType: (searchBy) => dispatch(changeSearchType(searchBy)),
    changeSortType: (sortBy) => dispatch(changeSortType(sortBy)),
});

const mapStateToProps = ({ data }) => ({
    movies: data.movies,
})

const MovieCard = ({ id, title, release_date, genres, poster_path, changeCurrentMovie, changeSearchType, fetchMovies, movies, changeSortType }) => {
    const genresList = genres.map(genre =>
        <span key={genre} className="card-genre">{genre} </span>);

    const year = release_date.split('-')[0];

    return (
        <li className="movie-card">
            <Link to={`/movie/${id}`}>
                <img
                    className="card-image"
                    src={poster_path}
                    onClick={() => {
                        changeCurrentMovie(movies.find(movie => movie.id === id));
                        changeSearchType('genres');
                        changeSortType('title');
                        fetchMovies(genres[0]);
                    }}
                />
            </Link>
            <div className="card-caption">
                <div className="card-title-wrapper">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-year">{year}</p>
                </div>
                {genresList}
            </div>
        </li>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);