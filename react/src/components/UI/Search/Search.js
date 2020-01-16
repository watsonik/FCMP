import React from 'react';
import { connect } from 'react-redux';
import { ToggleSwitch } from '../';
import { getMovies, changeSearchType } from '../../../redux';
import './Search.scss';

const mapDispatchToProps = dispatch => ({
    getMovies: searchQuery => dispatch(getMovies(searchQuery)),
    changeSearchType: searchType => dispatch(changeSearchType(searchType)),
});

const mapStateToProps = state => ({
    searchBy: state.searchBy,
});

export const Search = connect(mapStateToProps, mapDispatchToProps)(
    ({ searchBy, getMovies, changeSearchType }) => {
        const onSearchSubmit = (event) => {
            event.preventDefault();
            const searchQuery = new FormData(event.target).get('search');
            getMovies(searchQuery);
        };

        return (
            <div className="search-wrapper">
                <h2 className="search-heading">FIND YOUR MOVIE</h2>
                <form className="search-form" onSubmit={onSearchSubmit}>
                    <input
                        className="search-field"
                        type="text" name="search"
                        placeholder="Search"/>
                    <button className="search-button" type="submit">SEARCH</button>
                </form>
                <div className="toggle-wrapper">
                    <ToggleSwitch
                        toggleHandler={event =>
                            changeSearchType(event.target.value.toLowerCase())}
                        title="SEARCH BY"
                        leftLabel="TITLE"
                        rightLabel="GENRES"
                        selected={searchBy}
                    />
                </div>
            </div>
        )
    }
);