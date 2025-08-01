import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <h2 className="section-title">Resume</h2>

      <div className="resume-card">
        <div className="name">Noah Tabori</div>
        <div className="contact">
          Boulder, CO & Kailua, HI · taborinoah@gmail.com · 808-729-4009
        </div>

        <div className="section-block">
          <h3>Profile</h3>
          <p>
            Computer Science & Music student interested in software application development, HCI, and game dev.
            Passionate about applying technical and creative skills to intuitive software in collaborative environments.
          </p>
        </div>

        <div className="section-block">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>University of Colorado Boulder</strong> — B.A. in Computer Science, Minor in Music (May 2025)<br />
              GPA: 3.6 · Courses: Algorithms, OS, DB Systems, HCI, OOP, Biological Networks
            </li>
            <li>
              <strong>Punahou School, Honolulu, HI</strong> — Graduated 2021 (Grades K–12)
            </li>
          </ul>
        </div>

        <div className="section-block">
          <h3>Experience</h3>
          <ul>
            <li>
              <strong>Surge LLC</strong>, Software Developer (Summer 2023)<br />
              Built tools in Flutter across platforms. Integrated Firebase cloud messaging and maintained client apps.
            </li>
            <li>
              <strong>Island Snow</strong>, Sales & Customer Service (Summers 2021, 2024)<br />
              Delivered customer service, managed inventory and supported retail operations.
            </li>
            <li>
              <strong>Punahou School</strong>, Teaching Assistant (Summer 2022)<br />
              Supported art classes for ages 7–9. Assisted instruction and supervised student activities.
            </li>
          </ul>
        </div>

        <div className="section-block">
          <h3>Leadership & Projects</h3>
          <ul>
            <li>
              <strong>Trumpet Leadership – CU Boulder Marching Band</strong><br />
              Led 40+ section, facilitated rehearsals, morale, and faculty communication.
            </li>
            <li>
              <strong>Reversle</strong> — Flutter mobile puzzle game (iOS/Android)<br />
              Developed game mechanics, UI, Firebase sync. <a href="https://apps.apple.com/us/app/strategy-puzzle-reversle/id6463188331" target="_blank" rel="noreferrer">View on App Store</a>
            </li>
            <li>
              <strong>Loopover iOS</strong> — 1st Place HackCU10 Project<br />
              Built Swift/Xcode puzzle game in 24 hours. <a href="https://github.com/typicel/loopover-ios" target="_blank" rel="noreferrer">View on GitHub</a>
            </li>
          </ul>
        </div>

        <div className="section-block">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li><strong>Languages:</strong> C, C++, Java, JavaScript/HTML/CSS, Python, Dart, Swift, Scala, MySQL, NoSQL</li>
            <li><strong>Tools:</strong> Flutter, GitHub, Xcode 16, Docker, IntelliJ, Jupyter, Anaconda</li>
            <li><strong>Other:</strong> Trumpet (12 years), Basic Hebrew, Conversational Spanish</li>
          </ul>
        </div>
      </div>

      <div className="resume-download-wrapper">
        <a
          href="/Noah Tabori Resume (1).pdf"
          download="Noah_Tabori_Resume.pdf"
          className="resume-download-button"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}

export default Resume;
