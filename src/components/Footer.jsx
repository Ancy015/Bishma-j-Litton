import React from 'react';
import { FaInstagram, FaTiktok, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Portfolio<span>.</span></h3>
          <p>Full Stack Developer & UI/UX Designer</p>
        </div>
        
        <div className="social-icons small">
          <a href="#" className="icon instagram"><FaInstagram /></a>
          <a href="#" className="icon tiktok"><FaTiktok /></a>
          <a href="#" className="icon github"><FaGithub /></a>
          <a href="#" className="icon youtube"><FaYoutube /></a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Made with &hearts; by me.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
