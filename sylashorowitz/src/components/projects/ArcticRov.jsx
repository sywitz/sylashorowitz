/**
 * ArcticRov - Project page for Arctic ROV
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';

function ArcticRov() {
  const project = projectData['arctic-rov'];
  return <ProjectBase project={project} />;
}

export default ArcticRov;

