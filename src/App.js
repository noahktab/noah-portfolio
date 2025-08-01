import "./App.css";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Header from './Header';


function App() {
  return (
    <>
      <Hero />
      <div className="App">
        <About />
        <Projects />
        <Resume />
        <Header />

        <footer>
  <div className="footer-content">
    <p className="footer-note">
      © 2025 Noah Tabori — Built with React • Deployed on Vercel
    </p>
    <div className="footer-links">
      <a href="https://github.com/noahktab" target="_blank" rel="noreferrer">
        <img src="/github.png" alt="GitHub" className="footer-icon" />
      </a>
      <a href="https://www.linkedin.com/in/noah-tabori" target="_blank" rel="noreferrer">
        <img src="/linkedin.png" alt="LinkedIn" className="footer-icon" />
      </a>
    </div>
  </div>
</footer>
      </div>
    </>
  );
}

export default App;
