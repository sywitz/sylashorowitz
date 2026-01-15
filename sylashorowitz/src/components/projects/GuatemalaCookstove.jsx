/**
 * GuatemalaCookstove - Project page for Guatemala Cookstove
 */

import React, { useEffect } from 'react';
import { projectData } from '../../data/projectData';
import { ProjectHeader, ProjectNavigation } from './components';
import './styles/GuatemalaCookstove.css';

// Import image
import overviewImage from '../../assets/engineering-data/guatemala-cookstove/PXL_20221213_220305099_edited_edited_edited.jpg';

// Import PDF
import thesisPdf from '../../assets/engineering-data/guatemala-cookstove/horowitz-sylas-bs-meche-2023-thesis.pdf';

function GuatemalaCookstove() {
  const project = projectData['guatemala-cookstove'];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-template guatemala-cookstove">
      <ProjectHeader project={project} />
      
      {/* Project Overview */}
      <div className="project-overview guatemala-overview">
        <h2>Project Overview</h2>
        <div className="guatemala-overview-content">
          <div className="guatemala-overview-text">
            <p>{project.description}</p>
          </div>
          <div className="guatemala-overview-image">
            <img src={overviewImage} alt="Guatemala Cookstove Project" />
          </div>
        </div>
      </div>

      {/* Thesis PDF */}
      <div className="guatemala-pdf-section">
        <h2>Thesis</h2>
        <div className="guatemala-pdf-embed">
          <iframe 
            src={thesisPdf} 
            type="application/pdf"
            title="Thesis Document"
            className="guatemala-pdf-iframe"
          />
        </div>
      </div>

      <ProjectNavigation />
    </div>
  );
}

export default GuatemalaCookstove;


