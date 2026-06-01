import React from 'react';

const skillsData = [
  { name: 'Laravel', percentage: '85%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
  { name: 'Framer Motion', percentage: '70%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg', isImage: true },
  { name: 'Vue', percentage: '80%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', percentage: '85%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', percentage: '90%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Firebase.js', percentage: '60%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Python', percentage: '75%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Vite', percentage: '80%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
];

// Placeholder for Framer Motion since it doesn't have a reliable CDN link in devicon, using a framer-like icon or generic image
// Actually, let's use standard images for icons if possible, or devicon links.
const Skills = () => {
  return (
    <section className="skills section glass" id="skills">
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">Technologies and tools I work with to create amazing web experiences</p>
      
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <div className="skill-info">
                {skill.isImage ? (
                  <img src={skill.icon} alt={skill.name} className="skill-icon" style={{width: 20, filter: 'invert(1)'}} />
                ) : (
                  <img src={skill.icon} alt={skill.name} className="skill-icon" style={{width: 20}} />
                )}
                <span>{skill.name}</span>
              </div>
            </div>
            <div className="skill-progress-container">
              <div className="skill-labels">
                <span className="proficiency">Proficiency</span>
                <span className="percentage">{skill.percentage}</span>
              </div>
              <div className="progress-bar">
                <div 
                  className={`progress-fill color-${index % 4}`} 
                  style={{ width: skill.percentage }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
