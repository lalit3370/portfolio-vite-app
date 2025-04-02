// components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        
        <div className="about-grid">
          <div className="about-img">
            <div className="img-container">
              <img src="/src/assets/images/profile.jpeg" alt="Profile" />
            </div>
          </div>
          
          <div className="about-content">
            <p>
              I'm a passionate React developer with 3+ years of experience building 
              responsive and user-friendly web applications. I specialize in creating 
              performant, accessible, and scalable front-end solutions.
            </p>
            <p>
              My journey in web development started with a curiosity about how websites 
              work, and it has grown into a full-fledged career where I get to solve 
              interesting problems every day.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading tech blogs, or 
              experimenting with new web technologies.
            </p>
            
            <div className="about-info">
              <div>
                <span>Name:</span>
                <p>Lalit Kumar Singh</p>
              </div>
              <div>
                <span>Email:</span>
                <p>lalitks.dev@gmail.com</p>
              </div>
              <div>
                <span>Experience:</span>
                <p>3+ Years</p>
              </div>
              <div>
                <span>Location:</span>
                <p>Noida, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;