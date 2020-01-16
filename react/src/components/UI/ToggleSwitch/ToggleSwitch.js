import React, { memo } from 'react';
import uuid from 'uuid';
import './ToggleSwitch.scss';

const Toggle = ({ toggleHandler, title, leftLabel, rightLabel }) => {
    const leftId = uuid.v4();
    const rightId = uuid.v4();

    return (
        <form className="switch-field">
            <div className="switch-title">{title}</div>
            <input
                className="switch-input"
                type="radio"
                id={leftId}
                name="switchToggle"
                value={leftLabel}
                onChange={toggleHandler}
                defaultChecked
            />
            <label className="switch-label" htmlFor={leftId}>{leftLabel}</label>

            <input
                className="switch-input"
                type="radio"
                id={rightId}
                name="switchToggle"
                value={rightLabel}
                onChange={toggleHandler}
            />
            <label className="switch-label" htmlFor={rightId}>{rightLabel}</label>
        </form>
    );
};

export const ToggleSwitch = memo(Toggle);