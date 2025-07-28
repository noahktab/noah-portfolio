
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1>WELCOME TO MY PAGE</h1>
        <h2>Noah Tabori</h2>
        <p>Software Dev | Full Stack | Game Dev Enthusiast</p>
        <a href="#resume" className="hero-button">CHECK OUT MY RESUME!</a>
      </div>
    </div>
  );
}

export default Hero;
