/**
 * RenaissanceCastle - Project page for Wooden Renaissance Castle
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';

function RenaissanceCastle() {
  const project = projectData['renaissance-castle'];
  return <ProjectBase project={project} />;
}

export default RenaissanceCastle;

