import React from 'react';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    desc: 'Full-featured e-commerce platform with payment gateway.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Fitness Tracker App',
    desc: 'Mobile fitness app with workout plans.',
    tags: ['React Native', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1526506118029-79a617631379?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'AI Content Generator',
    desc: 'AI-powered content generation tool.',
    tags: ['Vue', 'OpenAI', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Crypto Dashboard',
    desc: 'Real-time crypto tracking dashboard.',
    tags: ['Next.js', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Task Management',
    desc: 'Collaborative task management system.',
    tags: ['Laravel', 'Vue.js'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  },
  {
    title: 'Real Estate Platform',
    desc: 'Virtual tour real estate platform.',
    tags: ['React', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  }
];

const Projects = () => {
  return (
    <section className="projects section glass" id="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">A showcase of my recent work</p>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card glass" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <button className="btn btn-outline btn-sm">Code</button>
                <button className="btn btn-primary btn-sm">Demo</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
