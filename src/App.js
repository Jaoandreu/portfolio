import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./Navbar";
import Projects from './Projects';
import Description from './Description';
import Contribution from './Contribution';
import projectData from './data/projects.json';
import Contact from './Contact';
import Clients from './Clients';


function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData.projects);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="text-content">
          <div id="home" className="welcome-message" style={{ textAlign: 'left' }}>No-Code/Low Code Studio</div>
          <Description />
          <button onClick={() => document.getElementById('portfolio').scrollIntoView()}>Discover More</button>
        </div>
        <div className="image-container">
          <img src="logo7.png" alt="Logo" style={{ width: "70%", height: 'auto', borderRadius: "0px" }} />
        </div>
      </div>
      <Contribution />
      <div id="portfolio" className="welcome-message" style={{ width: "80%", marginTop: "80px" }}>More About My Projects</div>
      <div className="projects-container">
        {projects.map((project) => (
          <Projects
            key={project.id}
            title={project.title}
            image={project.image}
            descriptionBold={project.descriptionBold}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
      <div id="client" className="welcome-message" style={{ width: "80%", marginTop: "80px", marginBottom: "20px" }}>Trusted by the kindest clients</div>
      <Clients />
      <Contact />
    </div>
  );
}

export default App;
