import React from 'react';
import ToggleSwitch from '../UI/ToggleSwitch/ToggleSwitch';
import './ControlBar.scss';

const ControlBar = ({ toggleSorting }) => {
    return (
        <div className="control-wrapper">
            <ToggleSwitch
                toggleHandler={toggleSorting}
                title="SORT BY"
                leftLabel="YEAR"
                rightLabel="TITLE"
            />
        </div>
    )
}

export default ControlBar;
