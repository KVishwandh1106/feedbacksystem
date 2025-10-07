import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>📋 Feedback Manager</h1>
        </div>
        <nav className="nav">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Submit Feedback
          </Link>
          <Link 
            to="/feedbacks" 
            className={location.pathname === '/feedbacks' ? 'nav-link active' : 'nav-link'}
          >
            View Feedbacks
          </Link>
          <Link 
            to="/dashboard" 
            className={location.pathname === '/dashboard' ? 'nav-link active' : 'nav-link'}
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
