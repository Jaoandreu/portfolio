import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {

  function toggleMenu() {
    var buttonGroup = document.querySelector('.button-group');
    buttonGroup.classList.toggle('show');
  }

  return (
    <>
      <div className="navbar">
        <nav className="navbar-in">
          <button className="nav-button" onClick={() => document.getElementById('home').scrollIntoView()}>Home</button>
          <button className="nav-button" onClick={() => document.getElementById('portfolio').scrollIntoView()}>Portfolio</button>
          <button className="nav-button" onClick={() => document.getElementById('contactForm').scrollIntoView()}>Contact</button>
          <button className="menu-icon" onClick={() => toggleMenu()}>&#9776;</button>
        </nav>
        <div class="button-group">
          <button className="close-button" onClick={() => toggleMenu()}>&times;</button>
          <button className="nav-button-mobile" onClick={() => {document.getElementById('home').scrollIntoView(); toggleMenu();}} style={{ marginTop: '80px' }}>Home</button>
          <button className="nav-button-mobile" onClick={() => {document.getElementById('portfolio').scrollIntoView(); toggleMenu();}}>Portfolio</button>
          <button className="nav-button-mobile" onClick={() => {document.getElementById('contactForm').scrollIntoView(); toggleMenu();}}>Contact</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;