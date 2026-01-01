/**
 * SolarPanelDeploymentSystem - Project page for Solar Panel Deployment System
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';

function SolarPanelDeploymentSystem() {
  const project = projectData['solar-panel-deployment-system'];
  return <ProjectBase project={project} />;
}

export default SolarPanelDeploymentSystem;

