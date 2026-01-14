/**
 * ClimbingRobot - Project page for Climbing Robot (2.007 Robot)
 */

import React, { useEffect } from 'react';
import { projectData } from '../../data/projectData';
import { ProjectHeader, ProjectNavigation } from './components';
import './styles/ClimbingRobot.css';

// Import image
import overviewImage from '../../assets/engineering-data/2007-robot/Picture1.png';

// Import PDF
import finalReportPdf from '../../assets/engineering-data/2007-robot/2.007 Final Report.pdf';

function ClimbingRobot() {
  const project = projectData['climbing-robot'];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-template climbing-robot">
      <ProjectHeader project={project} />
      
      {/* Project Overview */}
      <div className="project-overview climbing-overview">
        <h2>Project Overview</h2>
        <div className="climbing-overview-content">
          <div className="climbing-overview-text">
            <p>{project.description}</p>
          </div>
          <div className="climbing-overview-image">
            <img src={overviewImage} alt="Climbing Robot Project" />
          </div>
        </div>
      </div>

      {/* Final Report PDF */}
      <div className="climbing-pdf-section">
        <h2>Final Report</h2>
        <div className="climbing-pdf-embed">
          <iframe 
            src={finalReportPdf} 
            type="application/pdf"
            title="Final Report"
            className="climbing-pdf-iframe"
          />
        </div>
      </div>

      <ProjectNavigation />
    </div>
  );
}

export default ClimbingRobot;

