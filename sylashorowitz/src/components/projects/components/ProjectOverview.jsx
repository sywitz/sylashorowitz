/**
 * ProjectOverview - Shared overview section component
 * Supports optional overviewImage for custom layouts
 */

import React from 'react';

function ProjectOverview({ project, showImage = false, imagePosition = 'right' }) {
  // Render description with HTML support
  const renderDescription = () => {
    return <p dangerouslySetInnerHTML={{ __html: project.description }} />;
  };

  return (
    <div className="project-overview">
      <h2>Project Overview</h2>
      {showImage && project.overviewImage ? (
        <div className={`overview-content ${imagePosition === 'left' ? 'overview-image-left' : ''}`}>
          {imagePosition === 'left' ? (
            <>
              <div className="overview-image">
                <img src={project.overviewImage} alt={project.title} />
              </div>
              <div className="overview-text">
                {renderDescription()}
              </div>
            </>
          ) : (
            <>
              <div className="overview-text">
                {renderDescription()}
              </div>
              <div className="overview-image">
                <img src={project.overviewImage} alt={project.title} />
              </div>
            </>
          )}
        </div>
      ) : (
        renderDescription()
      )}

      <div className="skills-used">
        <h3>Skills & Technologies:</h3>
        <div className="skills-list">
          {project.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;

