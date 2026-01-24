/**
 * AcousticLevitationRobot - Project page for Acoustic Levitation Robot
 */

import React from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { projectData } from '../../data/projectData';
import { ProjectHeader, ProjectOverview, ProjectSections, ProjectNavigation } from './components';
import './styles/AcousticLevitationRobot.css';

function AcousticLevitationRobot() {
  const project = projectData['acoustic-levitation-robot'];
  useScrollToTop();

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-template acoustic-levitation-project">
      <ProjectHeader project={project} />
      <ProjectOverview project={project} showImage={true} imagePosition="right" />
      <ProjectSections sections={project.sections} />
      <ProjectNavigation />
    </div>
  );
}

export default AcousticLevitationRobot;

