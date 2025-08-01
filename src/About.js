import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-wrapper">
      <div className="about" id="about">
        <h2>ABOUT ME</h2>
        <div className="summary">
          <p>
            University of Colorado at Boulder | School of Engineering & Applied
            Science
          </p>
          <p>Bachelor's in Computer Science | Class of 2025</p>
        </div>

        <div className="about-grid">
          <div className="bio">
            <h3>Get to know me!</h3>
            <p>
              Hi there! I’m Noah Tabori, a software and full-stack engineer who recently completed a Bachelor's degree in Computer Science from the University of Colorado at Boulder. 
              I am an aspiring creative technologist looking to develop impactful software solutions at the intersection of creativity and functionality. 
              I have professional experience in full-stack work environments and project-based experience in games and UX design, 
              as well as strong foundations in several coding languages and frameworks.</p>

          <p>I am looking to work in a collaborative environment where I can hone my skills and contribute to a team. I am at the beginning of my career and am willing to put in the time and effort to make any team successful, and try to get out as much of it as I put in. I am flexible, patient, even-keeled, and above all, friendly.

            </p>
            <div className="contact-button-wrapper">
              <a className="contact-button" href="mailto:taborinoah@gmail.com">
                Contact
              </a>
            </div>
          </div>

          <div className="skills">
            <h3>My Skills</h3>
            <div className="project-card">
              <h4>Languages & Tools</h4>
              <p>
                C • C++ • Java • Python • Dart • Swift • Flutter • React • Git •
                Firebase
              </p>
            </div>
            <div className="project-card">
              <h4>Web & Game Dev</h4>
              <p>
                HTML/CSS • JavaScript • Node • Xcode • Unity (basic) • Firebase
                • GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
