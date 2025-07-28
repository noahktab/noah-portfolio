
import './App.css';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  return (
    <>
    <Hero />
    <div className="App">
      
      <About />
      <Projects />
      <Resume />

      <footer>
        <div className="footer-content">
          <div>
            <h4>Noah Tabori</h4>
            <p>Creative technologist blending music, code, and clean UI.</p>
            <p>Email: <a href="mailto:taborinoah@gmail.com">taborinoah@gmail.com</a></p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/noahktab" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/noah-tabori" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;
