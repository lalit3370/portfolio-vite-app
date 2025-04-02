// components/Projects.jsx
import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Redux, and Firebase with cart functionality, user authentication, and payment processing.',
      tags: ['React', 'Redux', 'Firebase', 'Stripe'],
      github: '#',
      live: '#',
      image: '/project1.jpg'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks with drag-and-drop functionality, due dates, and team collaboration features.',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
      image: '/project2.jpg'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with 5-day forecast, location search, and interactive charts displaying weather data.',
      tags: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation'],
      github: '#',
      live: '#',
      image: '/project3.jpg'
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FiGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;