/**
 * ProjectHeader - Project title, subtitle, and featured badge
 */

import React from 'react';
import { Link } from 'react-router-dom';

function ProjectHeader({ project }) {
  return (
    <div className="project-header">
      <div className="header-content">
        <Link to="/engineering" className="back-link"> Back to Engineering Portfolio</Link>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        {project.featured && <span className="featured-badge">FEATURED PROJECT</span>}
      </div>
    </div>
  );
}

export default ProjectHeader;

