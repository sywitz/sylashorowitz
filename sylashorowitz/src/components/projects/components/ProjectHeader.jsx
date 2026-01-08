/**
 * ProjectHeader - Project title, subtitle, and featured badge
 */

import React from 'react';
import { Link } from 'react-router-dom';

function ProjectHeader({ project }) {
  return (
    <div className="project-header">
      <div className="header-content">
        <div className="header-top-row">
          <Link to="/engineering" className="back-link"> Back to Engineering Portfolio</Link>
          {project.featured && <span className="featured-badge">FEATURED PROJECT</span>}
        </div>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
      </div>
    </div>
  );
}

export default ProjectHeader;

