import React from 'react';
import ControlBar from './ControlBar/ControlBar';
import MovieCard from './MovieCard/MovieCard';

const MoviesList = ({movies}) => {
  const list = movies.map(movie => <Moviecard title={movie.title}/>);

  return (
    <>
      <ControlBar />
      {list}
    </>
  );
}

export default MoviesList;
