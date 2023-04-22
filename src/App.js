import "./App.css";

import Project from "./components/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="home">
      <Header />
      <div id="navbar">
        <a href="#About">ABOUT</a>
        <a href="#Education">EDUCATION</a>
        <a href="#Project">PROJECTS</a>
        <a href="#Skill">SKILLS</a>
        <a href="#Contact">CONTACT</a>
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Education">
        <Education />
      </div>
      <div id="Project">
        <Project />
      </div>
      <div id="Skill">
        <Skill />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;