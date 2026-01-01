/**
 * MechanicalRabbit - Project page for Mechanical Rabbit
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';

function MechanicalRabbit() {
  const project = projectData['mechanical-rabbit'];
  return <ProjectBase project={project} />;
}

export default MechanicalRabbit;

