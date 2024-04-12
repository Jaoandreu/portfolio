import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // Removed the isSubmitting state since we're not handling onSubmit

  return (
    <form name="contact" method="POST" id="contactForm" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className="reach-out">Got a problem to solve?</div>
      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          id="message"
          name="message"
          rows="10"
          required
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;

