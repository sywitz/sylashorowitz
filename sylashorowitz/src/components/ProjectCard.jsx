/*
ProjectCard.js is a functional component that renders a beautiful, modular card for each project.
It displays project information including image, title with link, institution, year, description, and skills.
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
  link,
  featured
}) {
  const isExternalLink = link && /^https?:\/\//i.test(link);
  const TitleComponent = link ? (isExternalLink ? 'a' : Link) : 'span';
  const linkProps = isExternalLink
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : link
      ? { to: link }
      : {};

  return (
    <div className="project-card">
      <div className={`project-image-container ${image ? '' : 'no-image'}`}>
        {image ? (
          <img src={image} alt={title} className="project-image" loading="lazy" />
        ) : (
          <div className="project-image-placeholder" aria-hidden="true">
            <span>{title}</span>
          </div>
        )}
        {featured && <div className="featured-badge">FEATURED</div>}
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <TitleComponent
            {...linkProps}
            className={`project-title${link ? '' : ' project-title-static'}`}
          >
            {title}
          </TitleComponent>
          <div className="project-meta">
            <span className="institution">{institution}</span>
            <span className="year">{year}</span>
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