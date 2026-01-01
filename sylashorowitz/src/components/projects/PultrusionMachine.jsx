/**
 * PultrusionMachine - Custom project page for Pultrusion Machine
 * 
 * Custom layout with image positioned next to body text in overview section
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';
import './styles/ProjectTemplate.css';
import './styles/shared.css';
import './styles/PultrusionMachine.css';

function PultrusionMachine() {
  const project = projectData['pultrusion-machine'];
  
  // Use ProjectBase with showOverviewImage flag to enable image layout
  return <ProjectBase project={project} showOverviewImage={true} />;
}

export default PultrusionMachine;

