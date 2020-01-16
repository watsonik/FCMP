import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToggleSwitch } from '../UI';
import './ControlBar.scss';

const ControlBar = ({ toggleSorting, filmsCount }) => {
    return (
        <div className="control-wrapper">
            <p className="filmsCount">
                {`${filmsCount} movie${filmsCount === 1 ? '' : 's'} found`}
            </p>
            <Route exact path="/">
                <ToggleSwitch
                    toggleHandler={toggleSorting}
                    title="SORT BY"
                    leftLabel="YEAR"
                    rightLabel="TITLE"
                />
            </Route>
        </div>
    )
}

export default ControlBar;