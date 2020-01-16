import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { changeSortType, fetchMovies } from '../../redux';
import { ToggleSwitch } from '../UI';
import './ControlBar.scss';

const mapStateToProps = ({ app, data }) => ({
    sortBy: app.sortBy,
    currentMovie: app.currentMovie,
    searchQuery: data.searchQuery,
    filmsCount: data.movies.length,
    movies: data.movies,
});

const mapDispatchToProps = dispatch => ({
    changeSortType: sortBy => dispatch(changeSortType(sortBy)),
    fetchMovies: searchQuery => dispatch(fetchMovies(searchQuery)),
})

const ControlBar = ({ changeSortType, filmsCount, sortBy, currentMovie, movies, fetchMovies, searchQuery }) => {
    const currentMovieGenre = currentMovie
        ? currentMovie.genres[0]
        : null;
    return (
        <div className="control-wrapper">
            <Switch>
                <Route exact path="/(|search)/">
                    <p className="films-count">
                        {`${filmsCount} movie${filmsCount === 1 ? '' : 's'} found`}
                    </p>
                </Route>
                <Route exact path="/film/:id">
                    <p className="same-genre-label">
                        {`Movies of the ${currentMovieGenre} genre`}
                    </p>
                </Route>
            </Switch>

            <Route exact path="/(|search)/">
                <ToggleSwitch
                    toggleHandler={(event) => {
                        changeSortType(event.target.value.toLowerCase());
                        if (searchQuery) fetchMovies(searchQuery);
                    }}
                    title="SORT BY"
                    leftLabel="YEAR"
                    rightLabel="TITLE"
                    selected={sortBy === 'release_date' ? 'year' : sortBy}
                />
            </Route>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);