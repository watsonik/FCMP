import React from 'react';
import { ToggleSwitch } from '../'
import './Search.scss';

export const Search = ({ onSearch, onSearchTypeChange }) => (
    <div className="search-wrapper">
        <h2 className="search-heading">FIND YOUR MOVIE</h2>
        <form className="search-form" onSubmit={onSearch}>
            <input
                className="search-field"
                type="text" name="search"
                placeholder="Search"/>
            <button className="search-button" type="submit">SEARCH</button>
        </form>
        <div className="toggle-wrapper">
            <ToggleSwitch
                toggleHandler={onSearchTypeChange}
                title="SEARCH BY"
                leftLabel="TITLE"
                rightLabel="GENRES"
            />
        </div>
    </div>
)