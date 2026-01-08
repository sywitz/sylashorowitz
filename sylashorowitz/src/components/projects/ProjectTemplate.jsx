/**
 * ProjectTemplate - Fallback project detail page
 * 
 * Generic template for projects without custom components.
 * Uses ProjectWrapper for the standard layout.
 * 
 * Note: New projects should have their own component files.
 * This is kept for backwards compatibility and as a fallback.
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectWrapper from './ProjectWrapper';

function ProjectTemplate() {
  const { projectId } = useParams();
  
  return <ProjectWrapper projectId={projectId} />;
}

export default ProjectTemplate;
