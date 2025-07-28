
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="overlay">
        <h1>WELCOME TO MY PAGE</h1>
        <p className="subtitle">Noah Tabori</p>
        <p className="roles">Software Dev | Full Stack | Game Dev Enthusiast </p>
        <a href="#resume" className="hero-button">CHECK OUT MY RESUME!</a>
      </div>
    </section>
  );
}

export default Hero;
