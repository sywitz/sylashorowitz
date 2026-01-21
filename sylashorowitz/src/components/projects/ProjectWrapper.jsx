/**
 * ProjectWrapper - Generic wrapper for standard project pages
 * 
 * Handles the common pattern of fetching project data by ID and rendering ProjectBase.
 * Used by projects that don't need custom styling or layout variations.
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';

function ProjectWrapper({ projectId, showOverviewImage = false, customStyles = null }) {
  const project = projectData[projectId];
  return <ProjectBase project={project} showOverviewImage={showOverviewImage} customStyles={customStyles} />;
}

export default ProjectWrapper;


