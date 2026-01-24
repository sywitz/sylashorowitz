/**
 * ProjectCard - Displays a project card in the engineering portfolio grid
 * 
 * Shows project image, title (with optional link), institution, year, description, and skills.
 * Supports both internal React Router links and external links.
 */

import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({
  id,
  title,
  institution,
  year,
  description,
  skills = [],
  image,
  secondaryImage,
  link,
  featured
}) {
  // Determine if link is external (starts with http:// or https://)
  const isExternalLink = link && /^https?:\/\//i.test(link);

  // Render title with appropriate link or as plain text
  const renderTitle = () => {
    if (!link) {
      return <span className="project-title project-title-static">{title}</span>;
    }
    
    if (isExternalLink) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-title"
        >
          {title}
        </a>
      );
    }
    
    return (
      <Link to={link} className="project-title">
        {title}
      </Link>
    );
  };

  // Render image with appropriate link wrapper
  const renderImage = () => {
    if (!image) {
      return (
        <div className="project-image-placeholder" aria-hidden="true">
          <span>{title}</span>
        </div>
      );
    }

    const imageElement = (
      <img src={image} alt={title} className="project-image" loading="lazy" />
    );

    if (!link) {
      return imageElement;
    }

    if (isExternalLink) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-image-link"
        >
          {imageElement}
        </a>
      );
    }

    return (
      <Link to={link} className="project-image-link">
        {imageElement}
      </Link>
    );
  };

  // Render secondary image if provided
  const renderSecondaryImage = () => {
    if (!secondaryImage) return null;

    const imageElement = (
      <img src={secondaryImage} alt={`${title} overview`} className="project-image project-image-secondary" loading="lazy" />
    );

    if (!link) {
      return imageElement;
    }

    if (isExternalLink) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-image-link"
        >
          {imageElement}
        </a>
      );
    }

    return (
      <Link to={link} className="project-image-link">
        {imageElement}
      </Link>
    );
  };

  return (
    <div className="project-card">
      <div className={`project-image-container ${image ? '' : 'no-image'} ${secondaryImage ? 'has-secondary-image' : ''}`}>
        {renderImage()}
        {renderSecondaryImage()}
        {featured && <div className="featured-badge">FEATURED</div>}
      </div>
      
      <div className="project-content">
        <div className="project-header">
          {renderTitle()}
          <div className="project-meta">
            <span className="institution">{institution}, {year}</span>
          </div>
        </div>
        
        <div className="project-description">
          <p>{description}</p>
        </div>
        
        <div className="project-skills">
          <h4>Skills:</h4>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;