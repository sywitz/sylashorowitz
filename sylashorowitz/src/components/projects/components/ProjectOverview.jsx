/**
 * ProjectOverview - Shared overview section component
 * Supports optional overviewImage for custom layouts
 */

import React from 'react';

function ProjectOverview({ project, showImage = false, imagePosition = 'right' }) {
  const overviewMedia = project.overviewVideo || project.overviewImage;

  // Render description with HTML support
  const renderDescription = () => {
    return <p dangerouslySetInnerHTML={{ __html: project.description }} />;
  };

  const renderOverviewMedia = () => {
    if (project.overviewVideo) {
      const video = typeof project.overviewVideo === 'string'
        ? { src: project.overviewVideo }
        : project.overviewVideo;

      return (
        <video
          controls={video.controls !== false}
          loop={video.loop ?? false}
          muted={video.muted ?? false}
          autoPlay={video.autoPlay ?? false}
          playsInline
        >
          <source src={video.src} type="video/mp4" />
        </video>
      );
    }

    return <img src={project.overviewImage} alt={project.title} />;
  };

  return (
    <div className="project-overview">
      <h2>Project Overview</h2>
      {showImage && overviewMedia ? (
        <div className={`overview-content ${imagePosition === 'left' ? 'overview-image-left' : ''}`}>
          {imagePosition === 'left' ? (
            <>
              <div className="overview-image">
                {renderOverviewMedia()}
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
                {renderOverviewMedia()}
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

