import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ title, year, genres, posterUrl }) => {
    const genresList = genres.map(genre =>
        <span key={genre} className="card-genre">{genre} </span>);

    return (
        <li className="movie-card">
            <img className="card-image" src={posterUrl} />
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

export default MovieCard;