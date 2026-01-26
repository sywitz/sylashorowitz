/**
 * Fabrication - Custom project page for Fabrication project
 * 
 * Uses ProjectBase with standard layout
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';

function Fabrication() {
  const project = projectData['fabrication'];
  
  // Use ProjectBase with standard layout
  return <ProjectBase project={project} showOverviewImage={false} />;
}

export default Fabrication;

