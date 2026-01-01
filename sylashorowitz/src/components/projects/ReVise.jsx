/**
 * ReVise - Project page for RE-VISE
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';

function ReVise() {
  const project = projectData['re-vise'];
  return <ProjectBase project={project} />;
}

export default ReVise;

