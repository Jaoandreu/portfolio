import React from 'react';

const ContactForm = () => {
  return (
    <form name="contact" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
  );
};

export default ContactForm;

