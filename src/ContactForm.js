import React from 'react';
import './Contact.css';

const ContactForm = () => {
  return (
    <form name="contact" id="contactForm" method="Post" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-group">
        <input
          type="name"
          name="name"
          required
          placeholder="Name"
        />
      </div>
      <div className="reach-out">Got a problem to solve?</div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <textarea
          id="message"
          name="message"
          rows="10"
          required
          placeholder="Message"
        ></textarea>
      </div>
      <button className="submit-btn" type="submit">Send</button>
    </form>
  );
};

export default ContactForm;

