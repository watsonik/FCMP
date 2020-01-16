import React from 'react';
import './Backdrop.scss';

export const Backdrop = ({ show, toggle }) => (
  show ? <div className="backdrop" onClick={toggle}></div> : null
);
