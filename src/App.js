import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./Navbar";
import Projects from './Projects';
import Description from './Description';
import Contribution from './Contribution';
import projectData from './data/projects.json';
import './Contact.css';
import Footer from './Footer';
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
          <div id="home" className="welcome-message" style={{ textAlign: 'left' }}>Quick Dev Studio</div>
          <Description />
          <button onClick={() => document.getElementById('contactForm').scrollIntoView()}>Contact Me</button>
        </div>
        <div className="image-container">
          <img src="logo7.png" alt="Logo" style={{ width: "70%", height: 'auto', borderRadius: "0px" }} />
        </div>
      </div>
      <Contribution />
      <div id="portfolio" className="welcome-message" style={{ width: "80%", marginTop: "40px" }}>My Projects</div>
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
      <div id="client" className="welcome-message" style={{ width: "80%", marginTop: "80px", marginBottom: "20px" }}>Trusted by</div>
      <Clients />
      <div className="wrapper">
        <div className="container-footer">
          <form style={{ minWidth: "320px" }} name="contact" id="contactForm" method="Post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="reach-out">Got a problem to solve?</div>
            <div className="form-group">
              <input type="email" id="email" name="email" required placeholder="Email" />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="10" required placeholder="Message"></textarea>
            </div>
            <button className="submit-btn" type="submit">Let's Solve It</button>
          </form>
          <div className="right">
            <Footer />
          </div>
        </div>
        <div className="footer-container">
          <button onClick={() => document.getElementById('home').scrollIntoView()}>Home</button>
          <button onClick={() => document.getElementById('portfolio').scrollIntoView()}>Portfolio</button>
          <button onClick={() => document.getElementById('contactForm').scrollIntoView()}>Contact</button>
        </div>
        <div className="footer-center">
          © 2024 - All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
