// components/Contact.jsx
import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            
            <div className="info-item">
              <FiMail className="info-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:lalitks.dev@gmail.com">lalitks.dev@gmail.com</a>
              </div>
            </div>
            
            {/* <div className="info-item">
              <FiPhone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
            </div> */}
            
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Noida, Uttar Pradesh</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;