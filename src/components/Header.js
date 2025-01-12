// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={{ background: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      <h1>Welcome to Shuda's web</h1>
      <nav>
        <a href="#about" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>About</a>
        <a href="#services" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Services</a>
        <a href="#contact" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
