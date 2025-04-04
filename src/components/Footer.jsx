// components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Lalit Kumar Singh</h3>
            <p>React JS Developer creating modern web applications</p>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/lalit3370" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/lalit-kumar-singh-38b807193/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            {/* <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a> */}
            {/* <a href="https://codepen.io" target="_blank" rel="noreferrer"><FaCodepen /></a> */}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Lalit Kumar Singh. All rights reserved.</p>
          <p>Built with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;