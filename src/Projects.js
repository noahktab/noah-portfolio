import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>PROJECTS</h2>
      <p className="projects-intro">Explore my work in software development, game design, and full-stack projects.</p>
      <div className="project-card-grid">

        <div className="project-card left-image">
          <img src="/reversle.png" alt="Reversle project screenshot" />
          <div className="project-content">
            <h3>Reversle - Mobile Puzzle Game</h3>
            <p>A Reversi-like puzzle game developed in Flutter, deployed to iOS and Android with Firebase integration. This was a passion project worked on with coworkers during the downtimes of our primary contract.</p>
            <div className="project-button-wrapper">
              <a href="https://apps.apple.com/us/app/strategy-puzzle-reversle/id6463188331" target="_blank" rel="noreferrer">
                VIEW PROJECT
              </a>
            </div>
          </div>
        </div>

        <div className="project-card right-image">
          <img src="/iphonedark2.png" alt="Loopover iOS screenshot" />
          <div className="project-content">
            <h3>Loopover iOS - University Hackathon Winner</h3>
            <p>A Swift-based iOS game developed to deployment in 24 hours. Features a Rubik's-Cube-styled puzzle in 2D, the objective being to return a scrambled board to its original state. Logic grid inspired by CaryKH's original game.</p>
            <div className="project-button-wrapper">
              <a href="https://github.com/typicel/loopover-ios" target="_blank" rel="noreferrer">
                VIEW PROJECT
              </a>
            </div>
          </div>
        </div>

        <div className="project-card left-image">
          <div className="project-visual invitro-visual" role="img" aria-label="InvitroLibrary science learning app concept">
            <span className="visual-label">InvitroLibrary</span>
            <span className="visual-card visual-card-observe">Observe</span>
            <span className="visual-card visual-card-record">Record</span>
            <span className="visual-card visual-card-learn">Learn</span>
          </div>
          <div className="project-content">
            <h3>InvitroLibrary - Educational Science Web App</h3>
            <p>An AI-driven educational web application for Invitro Library LLC that helps 3rd grade students learn the scientific method through interactive observation of ulu (breadfruit) plant kits. I contribute frontend and UX work, shaping a more engaging, gamified experience with weekly objectives, interactive tasks, and child-friendly UI elements.</p>
            <p className="project-tech">Technologies: TypeScript, React.js, Replit AI, Claude Code</p>
            <div className="project-button-wrapper">
              <a href="/Resume-Noah-Tabori.pdf" target="_blank" rel="noreferrer">
                VIEW RESUME
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
