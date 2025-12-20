/**
 * ProjectTemplate - Individual project detail page
 * 
 * Displays detailed information about a specific project including:
 * hero image, overview, achievements, skills, story sections, and results.
 * Handles project not found case with error message.
 */

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../../data/projectData';
import './styles/ProjectTemplate.css';

function ProjectTemplate() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
        <Link to="/engineering" className="back-link"> Back to Engineering Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="project-template">
      {/* Hero Section */}
      <div className="project-hero">
        <div className="hero-content">
          <Link to="/engineering" className="back-link"> Back to Engineering Portfolio</Link>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          {project.featured && <span className="featured-badge">FEATURED PROJECT</span>}
        </div>
        {project.heroImage && (
          <div className="hero-image">
            <img src={project.heroImage} alt={project.title} />
          </div>
        )}
      </div>

      {/* Overview Section */}
      <div className="project-overview">
        <h2>Project Overview</h2>
        <p>{project.description}</p>
        
        {project.achievements && (
          <div className="achievements">
            <h3>Key Achievements:</h3>
            <ul>
              {project.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="skills-used">
          <h3>Skills & Technologies:</h3>
          <div className="skills-list">
            {project.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Story Sections */}
      <div className="project-story">
        {project.sections.map((section, index) => (
          <div key={index} className="section">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            {section.image && (
              <div className="section-image">
                <img src={section.image} alt={section.title} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Results Section */}
      {project.results && (
        <div className="project-results">
          <h2>Results & Impact</h2>
          <p>{project.results}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="project-navigation">
        <Link to="/engineering" className="nav-link"> Back to Engineering Portfolio</Link>
      </div>
    </div>
  );
}

export default ProjectTemplate;
