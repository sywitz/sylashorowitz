/**
 * LiberiaRecycledWasteBins - Project page for Liberia: Recycled Waste Bins
 */

import React from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { projectData } from '../../data/projectData';
import { ProjectHeader, ProjectNavigation } from './components';
import './styles/LiberiaRecycledWasteBins.css';

// Import images
import overviewImage from '../../assets/engineering-data/liberia-recycled-waste-bins/Screenshot 2022-01-23 232747.png';
import steelFrameImage from '../../assets/engineering-data/liberia-recycled-waste-bins/Screenshot 2022-01-23 232903_cropped.png';
import wireFrameImage from '../../assets/engineering-data/liberia-recycled-waste-bins/Screenshot 2022-01-23 232832_edited_edited.jpg';

// Import PDFs
import steelFramePdf from '../../assets/engineering-data/liberia-recycled-waste-bins/iii. Steel Frame Bin 2.pdf';
import wireFramePdf from '../../assets/engineering-data/liberia-recycled-waste-bins/i. Wire Frame Bin.pdf';
import designPresentationPdf from '../../assets/engineering-data/liberia-recycled-waste-bins/Final Design Presentation.pdf';

function LiberiaRecycledWasteBins() {
  const project = projectData['liberia-recycled-waste-bins'];
  useScrollToTop();

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-template liberia-waste-bins">
      <ProjectHeader project={project} />
      
      {/* Project Overview */}
      <div className="project-overview liberia-overview">
        <h2>Project Overview</h2>
        <div className="liberia-overview-content">
          <div className="liberia-overview-text">
            <p>
              Waste bins made from heat-fused plastic water sachets. Tackling issues of plastic waste in underserved communities in Liberia by creating "value" from "waste" with community partner{' '}
              <a 
                href="https://www.facebook.com/ERILiberia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="eri-link"
              >
                Environmental Rescue Initiative (ERI)
              </a>.
            </p>
            <p>
              Below are links to sections of the project. I worked with a team of 4 on the Project Summary presentation. I worked independently on the Steel Frame Bin and Wire Frame Bin resources for ERI. Click on the buttons below to view PDFs!
            </p>
          </div>
          <div className="liberia-overview-image">
            <img src={overviewImage} alt="Liberia Waste Bins Project" />
          </div>
        </div>
      </div>

      {/* Image Overlays with Buttons */}
      <div className="liberia-image-buttons-container">
        <div className="liberia-image-button-wrapper">
          <div className="liberia-image-overlay">
            <img src={steelFrameImage} alt="Steel Frame Bin" />
            <div className="liberia-overlay-background"></div>
            <a 
              href={steelFramePdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="liberia-overlay-button"
            >
              Steel Frame Bin
            </a>
          </div>
        </div>
        
        <div className="liberia-image-button-wrapper">
          <div className="liberia-image-overlay">
            <img src={wireFrameImage} alt="Wire Frame Bin" />
            <div className="liberia-overlay-background"></div>
            <a 
              href={wireFramePdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="liberia-overlay-button"
            >
              Wire Frame Bin
            </a>
          </div>
        </div>
      </div>

      {/* Design Presentation PDF */}
      <div className="liberia-pdf-section">
        <h2>Design Presentation</h2>
        <div className="liberia-pdf-embed">
          <iframe 
            src={designPresentationPdf} 
            type="application/pdf"
            title="Final Design Presentation"
            className="liberia-pdf-iframe"
          />
        </div>
      </div>

      <ProjectNavigation />
    </div>
  );
}

export default LiberiaRecycledWasteBins;
