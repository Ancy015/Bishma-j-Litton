import React from 'react';

const About = () => {
  return (
    <section className="about section glass" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src="/about.png" alt="About Me Avatar" />
        </div>
        <div className="about-text">
          <h2 className="section-title text-left">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut aperiam
            quia dignissimos corrupti, hic fugit, eveniet reprehenderit possimus voluptatum tenetur 
            provident consequatur itaque id rerum? Quo quaerat ab.
          </p>
          
          <div className="stats">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Education<br/>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
          
          <button className="btn btn-outline" style={{marginTop: '20px'}}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
