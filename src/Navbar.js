import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <nav className="navbar-in">
    <button className="nav-button" onClick={() => document.getElementById('home').scrollIntoView()}>Home</button>
  <button className="nav-button" onClick={() => document.getElementById('portfolio').scrollIntoView()}>Portfolio</button>
  <button className="nav-button" onClick={() => document.getElementById('contactForm').scrollIntoView()}>Contact</button>
    </nav>
    </div>
    </>
  );
};

export default Navbar;