import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({ id, title, year, genres, posterUrl, selectMovie }) => {
    const genresList = genres.map(genre =>
        <span key={genre} className="card-genre">{genre} </span>);

    return (
        <li className="movie-card">
            <Link to={`/movie/${id}`}>
                <img
                    className="card-image"
                    src={posterUrl}
                    onClick={() => selectMovie(id)}
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

export default MovieCard;