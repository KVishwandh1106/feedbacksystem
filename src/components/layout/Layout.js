import React from 'react';
import Header from './Header';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2025 Feedback Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
