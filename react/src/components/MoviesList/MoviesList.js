import React from 'react';
import MovieCard from './MovieCard/MovieCard';
import './MoviesList.scss';

const MoviesList = ({ movies, sortBy }) => {
    const movieCards = movies
        .sort((a, b) => {
            return a[sortBy] < b[sortBy]
                ? -1
                : 1
        })
        .map(movie => {
            const { id } = movie;
            return <MovieCard key={id} {...movie}/>
        });

    return (
        <>
            <div className="movies-list">
                {movieCards}
            </div>
        </>
    );
}

export default MoviesList;