import React from 'react';
import { Link } from 'react-router-dom';
import travolta from '../../../assets/img/404.jpg';
import './NotFound.scss';

const NotFound = () => (
  <div className="notfound-wrapper">
    <h2 className="notfound-heading">404! Page not found</h2>
    <img className="notfound-image" src={travolta}/>
    <p className="notfound-subtitle">Go back to the
      <Link to="/">
        <span className="notfound-link"> Home Page</span>
      </Link>
    </p>
  </div>
);

export default NotFound;