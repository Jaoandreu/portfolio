import React from 'react';
import './Contact.css';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="container-footer">
        <ContactForm />
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
  );
};

export default Contact;