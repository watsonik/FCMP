import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard/MovieCard';
import './MoviesList.scss';

const mapStateToProps = ({ data }) => ({
    movies: data.movies,
});

const MoviesList = ({ movies }) => {
    const movieCards = movies
        .map(movie => {
            const { id } = movie;
            return <MovieCard
                key={id}
                {...movie}/>
        });

    const noMovies = (
        <li className="no-movies">
            <h2>No films found</h2>
        </li>
    )

    return (
        <ul className="movies-list">
            {movieCards.length ? movieCards : noMovies}
        </ul>
    );
}

export default connect(mapStateToProps)(MoviesList);