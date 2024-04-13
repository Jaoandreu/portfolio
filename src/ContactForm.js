import React from 'react';

const ContactForm = () => {
  return (
    <form name="contact" method="POST" netlify>
      {/* This hidden input is crucial for Netlify to identify the form correctly */}
      <input type="hidden" name="form-name" value="contact" />

      <div className="form-group">
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          placeholder="Type your message here"
        ></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;

