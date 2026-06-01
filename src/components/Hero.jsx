import React from 'react';
import { FaInstagram, FaTiktok, FaGithub, FaYoutube, FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="social-icons">
          <a href="#" className="icon instagram"><FaInstagram /></a>
          <a href="#" className="icon tiktok"><FaTiktok /></a>
          <a href="#" className="icon github"><FaGithub /></a>
          <a href="#" className="icon youtube"><FaYoutube /></a>
        </div>
        <h1 className="hero-title">
          Hi, I'm <span>OualiCode</span>
        </h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error quasi est labore? 
          Laborum hic commodi architecto ex eligendi quasi. Accusantium provident ipsa illum 
          facilis praesentium fuga aliquid, eveniet molestiae.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">
            <FaDownload /> Download CV
          </button>
          <button className="btn btn-outline">
            <FaEnvelope /> Contact Me
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/hero.png" alt="OualiCode 3D Avatar" />
      </div>
    </section>
  );
};

export default Hero;
