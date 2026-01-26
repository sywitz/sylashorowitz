/**
 * TidalPump - Custom project page for Tidal Energy Pump
 * 
 * Custom layout with water-themed styling
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';
import './styles/TidalPump.css';

function TidalPump() {
  const project = projectData['tidal-pump'];
  
  // Use ProjectBase with showOverviewImage flag to enable image layout
  // Add custom class for water-themed styling
  return <ProjectBase project={project} showOverviewImage={true} customStyles="tidal-pump-project" />;
}

export default TidalPump;

