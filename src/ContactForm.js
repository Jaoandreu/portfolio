import React from 'react';
import './Contact.css';

const ContactForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-group">
        <label>Email:
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
          />
        </label>
      </div>
      <div className="form-group">
        <label>Message:
          <textarea
            name="message"
            rows="10"
            required
            placeholder="Message"
          ></textarea>
        </label>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;

