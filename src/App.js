// Noah Tabori – React Portfolio (create-react-app style)

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Noah Tabori</h1>
        <p>Software Developer | Web & Game Dev Enthusiast</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>I’m a recent Computer Science graduate passionate about building intuitive software, games, and full-stack applications. I thrive in collaborative environments and enjoy combining logic with creativity.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Reversle – Mobile Puzzle Game</h3>
          <p>Designed and developed a puzzle game using Dart, Flutter, and Firebase. <a href="https://apps.apple.com/us/app/strategy-puzzle-reversle/id6463188331" target="_blank" rel="noreferrer">View on App Store</a></p>
        </div>
        <div className="project">
          <h3>Loopover iOS – Hackathon Project</h3>
          <p>Created in 24 hours using Swift/Xcode. <a href="https://github.com/typicel/loopover-ios" target="_blank" rel="noreferrer">View on GitHub</a></p>
        </div>
        <div className="project">
          <h3>Creative Code – Visual Experiment</h3>
          <p><a href="https://openprocessing.org/sketch/580366" target="_blank" rel="noreferrer">Check it out on OpenProcessing</a></p>
        </div>
      </section>

      <section id="resume">
        <h2>Resume</h2>
        <p><a href="/NoahTaboriResume.pdf" download>Download PDF</a></p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <ul>
          <li>Email: <a href="mailto:taborinoah@gmail.com">taborinoah@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/noahktab" target="_blank" rel="noreferrer">github.com/typicel</a></li>
          <li>LinkedIn: <a href="www.linkedin.com/in/noah-tabori">Noah-Tabori</a></li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2025 Noah Tabori</p>
      </footer>
    </div>
  );
}

export default App;
