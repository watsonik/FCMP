import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { changeSortType } from '../../redux';
import { ToggleSwitch } from '../UI';
import './ControlBar.scss';

const mapStateToProps = state => ({
    sortBy: state.sortBy,
    filmsCount: state.movies.length,
});

const mapDispatchToProps = dispatch => ({
    changeSortType: sortBy => dispatch(changeSortType(sortBy)),
})

const ControlBar = ({ changeSortType, filmsCount, sortBy }) => {
    return (
        <div className="control-wrapper">
            <p className="filmsCount">
                {`${filmsCount} movie${filmsCount === 1 ? '' : 's'} found`}
            </p>
            <Route exact path="/">
                <ToggleSwitch
                    toggleHandler={event =>
                        changeSortType(event.target.value.toLowerCase())}
                    title="SORT BY"
                    leftLabel="YEAR"
                    rightLabel="TITLE"
                    selected={sortBy}
                />
            </Route>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);