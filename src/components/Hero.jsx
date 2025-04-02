// components/Hero.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span>Lalit</span></h1>
          <h2>React JS Developer</h2>
          <p>I build exceptional digital experiences with modern web technologies.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
        
        <div className="hero-social">
          <a href="https://github.com/lalit3370" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/lalit-kumar-singh-38b807193/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/lalit3370?s=11" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;