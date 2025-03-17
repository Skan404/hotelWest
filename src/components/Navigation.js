import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Hotel Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Strona główna</Link></li>
          <li><Link to="/reservations">Rezerwacje</Link></li>
          <li><Link to="/pricing">Cennik</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
