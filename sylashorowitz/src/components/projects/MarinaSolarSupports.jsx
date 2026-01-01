/**
 * MarinaSolarSupports - Project page for Marina Solar Panel Support
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';

function MarinaSolarSupports() {
  const project = projectData['marina-solar-supports'];
  return <ProjectBase project={project} />;
}

export default MarinaSolarSupports;

