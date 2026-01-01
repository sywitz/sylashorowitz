/**
 * ProjectTemplate - Fallback project detail page
 * 
 * Generic template for projects without custom components.
 * Uses ProjectBase for the standard layout.
 * 
 * Note: New projects should have their own component files.
 * This is kept for backwards compatibility and as a fallback.
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';

function ProjectTemplate() {
  const { projectId } = useParams();
  const project = projectData[projectId];
  
  return <ProjectBase project={project} />;
}

export default ProjectTemplate;
