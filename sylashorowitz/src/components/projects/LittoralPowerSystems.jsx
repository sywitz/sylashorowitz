/**
 * LittoralPowerSystems - Custom project page for Littoral Power Systems
 * 
 * Custom layout with overview image
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';
import './styles/LittoralPowerSystems.css';

function LittoralPowerSystems() {
  const project = projectData['littoral-power-systems'];
  
  // Use ProjectBase with showOverviewImage flag to enable image layout
  return <ProjectBase project={project} showOverviewImage={true} customStyles="littoral-power-systems-project" />;
}

export default LittoralPowerSystems;

