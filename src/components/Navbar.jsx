import React from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Portfolio<span>.</span></h2>
      </div>
      <ul className="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <BsMoonStarsFill /> : <BsSunFill />}
        </button>
        <button className="btn btn-primary">Hire Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
