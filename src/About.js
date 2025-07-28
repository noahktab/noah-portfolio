
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2>ABOUT ME</h2>
      <p className="summary">
        University of Colorado Boulder • School of Engineering & Applied Science<br />
        B.A. in Computer Science, Minor in Music • Class of 2025
      </p>
      <div className="about-grid">
        <div className="bio">
          <h3>Get to know me!</h3>
          <p>
            Hey! I'm Noah Tabori, a software developer and creative technologist based in Colorado and Hawaii.
            I have hands-on experience with full-stack projects, mobile apps, game development, and collaborative teamwork.
            I'm particularly passionate about crafting intuitive experiences, learning new tech, and bringing both logic
            and creativity into everything I build.
          </p>
          <a className="contact-button" href="#contact">CONTACT</a>
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          <div className="skill-card">
            <h4>Languages & Tools</h4>
            <p>C • C++ • Java • Python • Dart • Swift • Flutter • React • Git • Firebase</p>
          </div>
          <div className="skill-card">
            <h4>Web & Game Dev</h4>
            <p>HTML/CSS • JavaScript • Node • Xcode • Unity (basic) • Firebase • GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
