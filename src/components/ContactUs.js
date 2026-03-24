import React, { useState } from 'react';
import Header from './Header';
import '../Styles/contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <Header />
      <main className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions? We'd love to hear from you.</p>
            <div className="contact-details">
              <p>📞 +91-7869575249</p>
              <p>📧 magraiya@gmail.com</p>
              <p>📍 123 Tansen Street, Gwalior City</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group-contact">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group-contact">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group-contact">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;