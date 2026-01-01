/**
 * ProjectNavigation - Shared navigation component
 */

import React from 'react';
import { Link } from 'react-router-dom';

function ProjectNavigation() {
  return (
    <div className="project-navigation">
      <Link to="/engineering" className="nav-link"> Back to Engineering Portfolio</Link>
    </div>
  );
}

export default ProjectNavigation;

