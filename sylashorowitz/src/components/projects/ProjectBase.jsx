/**
 * ProjectBase - Base component for all project pages
 * 
 * Structure: Header (title/subtitle) -> Overview (description/achievements/skills) -> Sections (stages with media)
 */

import React, { useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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

