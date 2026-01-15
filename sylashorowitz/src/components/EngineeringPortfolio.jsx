/**
 * EngineeringPortfolio - Displays a grid of engineering project cards
 * 
 * Renders projects from the engineeringProjects data file in a grid layout.
 * Each project is displayed as a ProjectCard component.
 * Uses auto-scroll hook to smoothly scroll past the header on initial load.
 */

import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { engineeringProjects } from '../data/engineeringProjects';
import { useAutoScroll } from '../hooks/useAutoScroll';
import '../styles/EngineeringPortfolio.css';

function EngineeringPortfolio() {
  const projectsGridRef = useRef(null);
  const headerRef = useRef(null);

  // Auto-scroll: slowly scroll past the title to the first row of cards
  useAutoScroll({
    targetRef: projectsGridRef,
    headerRef: headerRef,
    scrollThreshold: 100,
    delay: 200,
    duration: 1000,
    headerOffset: 1
  });

  return (
    <div id="engineering" className="engineering-portfolio">
      <div ref={headerRef} className="portfolio-header">
        <h1>Engineering Portfolio</h1>
      </div>
      
      <div ref={projectsGridRef} className="projects-grid">
        {engineeringProjects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default EngineeringPortfolio;