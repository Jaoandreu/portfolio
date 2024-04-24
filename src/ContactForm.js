import React from 'react';
import './Contact.css';

const ContactForm = () => {
  return (
    <form id="contactForm" method="Post" data-netlify="true" name="newcontact">
      <input type="hidden" name="form-name" value="newcontact" />
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

