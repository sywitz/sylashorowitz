/**
 * ProjectBase - Base component for all project pages
 * 
 * Structure: Header (title/subtitle) -> Overview (description/achievements/skills) -> Sections (stages with media)
 */

import React from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import {
  ProjectNotFound,
  ProjectHeader,
  ProjectOverview,
  ProjectSections,
  ProjectNavigation
} from './components';
import './styles/ProjectTemplate.css';
import './styles/shared.css';

function ProjectBase({ project, customStyles = null, showOverviewImage = false }) {
  // Scroll to top when component mounts
  useScrollToTop();

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className={`project-template ${customStyles || ''}`}>
      <ProjectHeader project={project} />
      <ProjectOverview project={project} showImage={showOverviewImage} />
      <ProjectSections sections={project.sections} />
      <ProjectNavigation />
    </div>
  );
}

export default ProjectBase;

