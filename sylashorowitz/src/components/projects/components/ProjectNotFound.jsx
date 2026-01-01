/**
 * ProjectNotFound - Shared component for project not found state
 */

import React from 'react';
import { Link } from 'react-router-dom';

function ProjectNotFound() {
  return (
    <div className="project-not-found">
      <h1>Project Not Found</h1>
      <p>The project you are looking for does not exist.</p>
      <Link to="/engineering" className="back-link"> Back to Engineering Portfolio</Link>
    </div>
  );
}

export default ProjectNotFound;

