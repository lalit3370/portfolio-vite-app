import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <a href="#home" className="logo">
          ReactDev
        </a>

        <div className="header-right">
          <ThemeToggle />
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
