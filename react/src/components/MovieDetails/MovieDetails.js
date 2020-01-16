import React from 'react';
import './MovieDetails.scss';

const MovieDetails = ({ title, score = 'N/A', genres, year, runtime, plot, posterUrl }) => {
  return (
    <div className="details-wrapper">
      <img
        src={posterUrl}
        className="movie-poster"
      />
      <div className="info-wrapper">
        <div className="title-wrapper">
          <div className="score-wrapper">
            <h2 className="movie-title">{title}</h2>
            <span className="movie-score">{score}</span>
          </div>
          <p className="movie-genre">{genres[0]}</p>
        </div>
        <div className="year-duration-wrapper">
          <p>
            {year}
            <span className="year-label">year</span>
          </p>
          <p>
            {runtime}
            <span className="runtime-label">min</span>
          </p>
        </div>
        <p className="movie-description">{plot}</p>
      </div>
    </div>
  )
};

export default MovieDetails;