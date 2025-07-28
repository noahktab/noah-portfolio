import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">RESUME</h2>
      <div className="resume-card">
        <h3 className="name">Noah Tabori</h3>
        <p className="contact">Boulder, CO & Kailua, HI · taborinoah@gmail.com · 808-729-4009</p>

        <h4>Education</h4>
        <div className="section-block">
          <p><strong>University of Colorado Boulder</strong> – B.A. in Computer Science, Minor in Music (GPA: 3.6)</p>
          <p><em>Graduation: May 2025</em></p>
          <p><small>Relevant Courses: Algorithms, OS, Databases, HCI, Software Dev, Bio Networks</small></p>
        </div>
        <div className="section-block">
          <p><strong>Punahou School</strong>, Honolulu, HI (K–12)</p>
          <p><em>Graduated: May 2021</em></p>
        </div>

        <h4>Work Experience</h4>
        <div className="section-block">
          <p><strong>Surge LLC</strong> – Software Developer (Summer 2023)</p>
          <ul>
            <li>Developed cross-platform internal tools in Flutter.</li>
            <li>Set up Firebase Cloud Messaging across app ecosystem.</li>
            <li>Rolled out features based on client feedback.</li>
          </ul>
        </div>
        <div className="section-block">
          <p><strong>Island Snow</strong> – Sales & Customer Service (Summers 2021, 2024)</p>
          <ul>
            <li>Provided customer service and managed inventory.</li>
            <li>Collaborated during peak traffic for smooth operations.</li>
          </ul>
        </div>
        <div className="section-block">
          <p><strong>Punahou School</strong> – Teaching Assistant (Summer 2022)</p>
          <ul>
            <li>Assisted with curriculum for kids aged 7–9 in art program.</li>
          </ul>
        </div>

        <h4>Leadership & Projects</h4>
        <div className="section-block">
          <p><strong>Golden Buffalo Marching Band</strong> – Trumpet Section Leader (2021–Present)</p>
          <ul>
            <li>Led 40+ trumpet players; liaised with faculty.</li>
            <li>Boosted morale and school spirit.</li>
          </ul>
        </div>
        <div className="section-block">
          <p><strong>Mobile App Dev</strong> – <em>Reversle</em> Puzzle Game (Summer 2023)</p>
          <ul>
            <li>Worked on UI and core logic in Dart/Flutter.</li>
            <li><a href="https://apps.apple.com/us/app/strategy-puzzle-reversle/id6463188331" target="_blank" rel="noreferrer">App Store Link</a></li>
          </ul>
        </div>
        <div className="section-block">
          <p><strong>HackCU 10</strong> – 1st Place (Spring 2024)</p>
          <ul>
            <li>Built <em>LoopoverIOS</em> using Swift & Xcode 16.</li>
            <li><a href="https://github.com/typicel/loopover-ios" target="_blank" rel="noreferrer">GitHub Repo</a></li>
          </ul>
        </div>

        <h4>Skills</h4>
        <ul className="skills-list">
          <li><strong>Languages:</strong> C, C++, Java, Python, Swift, Dart, Scala, JS/HTML/CSS, SQL/noSQL</li>
          <li><strong>Tools:</strong> Flutter, GitHub, IntelliJ, Xcode, Docker, Jupyter</li>
          <li><strong>Other:</strong> Excel, Google Apps, Music (Trumpet), Basic Hebrew, Spanish</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
