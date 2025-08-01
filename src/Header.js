// src/Header.js
import React from 'react';
import './Header.css'; // or just App.css if you're centralizing

function Header() {
  return (
    <div className="floating-header">
      <div className="header-left">Noah Tabori</div>
      <div className="header-right">
        <a href="https://github.com/noahktab" target="_blank" rel="noreferrer" className="footer-icon">
          <img src="/github.png" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/noah-tabori" target="_blank" rel="noreferrer" className="footer-icon">
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default Header;
