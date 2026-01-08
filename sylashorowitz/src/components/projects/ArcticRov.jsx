/**
 * ArcticRov - Project page for Arctic ROV
 */

import React from 'react';
import { projectData } from '../../data/projectData';
import ProjectBase from './ProjectBase';
import './styles/ArcticRov.css';

function ArcticRov() {
  const project = projectData['arctic-rov'];
  return <ProjectBase project={project} showOverviewImage={true} customStyles="arctic-rov-project" />;
}

export default ArcticRov;

