
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>PROJECTS</h2>
      <p className="projects-intro">Explore my work in software development, game design, and full-stack projects.</p>
      <div className="project-card-grid">

        <div className="project-card">
          <img src="/reversle-cover.jpg" alt="Reversle project screenshot" />
          <div className="project-content">
            <h3>Reversle – Mobile Puzzle Game</h3>
            <p>Logic-based word puzzle developed in Flutter, deployed to iOS with Firebase integration.</p>
            <a href="https://apps.apple.com/us/app/strategy-puzzle-reversle/id6463188331" target="_blank" rel="noreferrer">
              VIEW PROJECT
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src="/loopover-cover.jpg" alt="Loopover iOS screenshot" />
          <div className="project-content">
            <h3>Loopover iOS – Hackathon Winner</h3>
            <p>Swift-based game developed in 24 hours. Logic grid inspired by CaryKH’s original game.</p>
            <a href="https://github.com/typicel/loopover-ios" target="_blank" rel="noreferrer">
              VIEW PROJECT
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
