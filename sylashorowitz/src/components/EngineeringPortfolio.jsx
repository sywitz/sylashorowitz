/**
 * EngineeringPortfolio - Displays a grid of engineering project cards
 * 
 * Renders projects from the engineeringProjects data file in a grid layout.
 * Each project is displayed as a ProjectCard component.
 */

import React from 'react';
import ProjectCard from './ProjectCard';
import { engineeringProjects } from '../data/engineeringProjects';
import '../styles/EngineeringPortfolio.css';

function EngineeringPortfolio() {
  return (
    <div id="engineering" className="engineering-portfolio">
      <div className="portfolio-header">
        <h1>Engineering Portfolio</h1>
        <p>Innovative engineering solutions across mechatronics, sustainable design, and manufacturing</p>
      </div>
      
      <div className="projects-grid">
        {engineeringProjects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default EngineeringPortfolio;