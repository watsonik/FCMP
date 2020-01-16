import React from 'react';
import { connect } from 'react-redux';
import './MovieDetails.scss';

const mapStateToProps = ({ app }) => ({
    currentMovie: app.currentMovie,
});

const MovieDetails = ({ currentMovie: { title, vote_average, genres, release_date, poster_path, overview, runtime }}) => {
    return (
        <div className="details-wrapper">
            <img
                src={poster_path}
                className="movie-poster"
            />
            <div className="info-wrapper">
                <div className="title-wrapper">
                    <div className="score-wrapper">
                        <h2 className="movie-title">{title}</h2>
                        <div className="score-container">
                            <span className="movie-score">{vote_average}</span>
                        </div>
                    </div>
                    <p className="movie-genre">{genres[0]}</p>
                </div>
                <div className="year-duration-wrapper">
                    {release_date
                        ? <p>
                            {release_date.split('-')[0]}
                            <span className="year-label">year</span>
                        </p>
                        : null
                    }
                    {runtime
                        ? <p>
                            {runtime}
                            <span className="runtime-label">min</span>
                        </p>
                        : null
                    }
                </div>
                <p className="movie-description">{overview}</p>
            </div>
        </div>
    )
};

export default connect(mapStateToProps)(MovieDetails);