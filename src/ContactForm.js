import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const data = { email, message };
    setEmail('');
    setMessage('');

    // Replace YOUR_BACKEND_ENDPOINT with the actual endpoint
    fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit} data-netlify="true" name="contact">
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
      <button className={`submit-btn ${isSubmitting ? 'submitting' : ''}`} type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Thank you, we will be in touch soon!' : 'Send'}
      </button>
    </form>
  );
};

export default ContactForm;
