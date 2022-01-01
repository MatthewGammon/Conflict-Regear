import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1 className="main-text">Albion Online Player Info and Regear</h1>
      <p className="lead">See your stats and submit regear requests!</p>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div className="ms-2">
            <Link to="/playerSearch">Search</Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav"></div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
