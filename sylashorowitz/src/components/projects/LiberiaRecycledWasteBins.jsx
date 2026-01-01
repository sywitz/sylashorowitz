/**
 * LiberiaRecycledWasteBins - Project page for Liberia: Recycled Waste Bins
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';

function LiberiaRecycledWasteBins() {
  const project = projectData['liberia-recycled-waste-bins'];
  return <ProjectBase project={project} />;
}

export default LiberiaRecycledWasteBins;

