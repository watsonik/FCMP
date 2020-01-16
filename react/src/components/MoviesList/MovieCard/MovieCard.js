import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeCurrentMovie } from '../../../redux';

import './MovieCard.scss';

const mapDispatchToProps = dispatch => ({
    changeCurrentMovie: movieId => dispatch(changeCurrentMovie(movieId)),
});

const MovieCard = ({ id, title, year, genres, posterUrl, changeCurrentMovie }) => {
    const genresList = genres.map(genre =>
        <span key={genre} className="card-genre">{genre} </span>);

    return (
        <li className="movie-card">
            <Link to={`/movie/${id}`}>
                <img
                    className="card-image"
                    src={posterUrl}
                    onClick={() => changeCurrentMovie(id)}
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

export default connect(null, mapDispatchToProps)(MovieCard);