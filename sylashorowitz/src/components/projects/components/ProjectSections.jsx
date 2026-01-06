/**
 * ProjectSections - Project stages/steps with flexible media support
 * Supports images, gifs, videos, and subsections
 */

import React from 'react';
import { renderContent } from '../utils/renderContent';

function ProjectSections({ sections }) {
  const renderMedia = (media) => {
    if (!media) return null;

    // Handle media as object with type property
    if (typeof media === 'object' && media.type) {
      if (media.type === 'video') {
        return (
          <div className="section-media">
            <video controls>
              <source src={media.src || media.url} type={media.mimeType || 'video/mp4'} />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      }
      // Object with type 'image' or 'gif' - treat as image
      const src = media.src || media.url || media;
      return (
        <div className="section-media">
          <img src={src} alt={media.alt || ''} />
        </div>
      );
    }

    // Handle media as string path
    const mediaStr = typeof media === 'string' ? media : '';
    
    if (mediaStr.endsWith('.mp4') || mediaStr.endsWith('.webm') || mediaStr.endsWith('.mov') || mediaStr.endsWith('.avi')) {
      return (
        <div className="section-media">
          <video controls>
            <source src={mediaStr} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    // Default to image (handles .jpg, .png, .gif, .svg, etc.)
    return (
      <div className="section-media">
        <img src={mediaStr} alt="" />
      </div>
    );
  };

  return (
    <div className="project-sections">
      {sections.map((section, index) => (
        <div key={index} className={`section ${section.layout ? `section-${section.layout}` : ''}`}>
          <h2>{section.title}</h2>
          
          {/* Diagonal overlay layout: image with text overlay */}
          {section.layout === 'diagonal-overlay' && section.image ? (
            <div className="diagonal-overlay-container">
              <div className="diagonal-overlay-image">
                <img src={section.image} alt={section.title} />
              </div>
              <div className="diagonal-overlay-text">
                {renderContent(section.content)}
              </div>
            </div>
          ) : section.layout === 'text-with-side-images' && section.sideImages ? (
            <>
              <div className="text-with-side-images-container">
                {section.contentBoxes && section.contentBoxes.length > 0 ? (
                  section.contentBoxes.map((box, boxIndex) => (
                    <div key={boxIndex} className="text-with-side-images-pair">
                      <div className="text-with-side-images-content-box">
                        {renderContent(box.content)}
                      </div>
                      {section.sideImages[boxIndex] && (
                        <div className="side-image-wrapper">
                          <img src={section.sideImages[boxIndex]} alt={`${section.title} - Image ${boxIndex + 1}`} />
                        </div>
                      )}
                    </div>
                  ))
                ) : section.content ? (
                  <div className="text-with-side-images-pair">
                    <div className="text-with-side-images-content-box">
                      {renderContent(section.content)}
                    </div>
                    {section.sideImages[0] && (
                      <div className="side-image-wrapper">
                        <img src={section.sideImages[0]} alt={`${section.title} - Image 1`} />
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
              
              {/* Component sections */}
              {section.componentSections && section.componentSections.length > 0 && (
                <div className="component-sections-container">
                  {section.componentSections.map((component, compIndex) => (
                    <div key={compIndex} className="component-section">
                      <div className="component-header">
                        <span className="component-number">{component.number}</span>
                        <h3 className="component-title">{component.title}</h3>
                      </div>
                      <div className={`component-content-wrapper ${component.imagePosition === 'left' ? 'image-left' : 'image-right'}`}>
                        {component.image && component.imagePosition === 'left' && (
                          <div className="component-image-wrapper">
                            <img src={component.image} alt={`${component.number} ${component.title}`} />
                          </div>
                        )}
                        <div className="component-text">
                          {renderContent(component.content)}
                        </div>
                        {component.image && component.imagePosition !== 'left' && (
                          <div className="component-image-wrapper">
                            <img src={component.image} alt={`${component.number} ${component.title}`} />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              {renderContent(section.content)}
              {/* Support image, video, or gif - can be string path or object */}
              {section.image && renderMedia(section.image)}
              {section.video && renderMedia(section.video)}
              {section.gif && renderMedia(section.gif)}
            </>
          )}
          
          {/* Image gallery: three images in a row with captions */}
          {section.imageGallery && section.imageGallery.length > 0 && (
            <div className="image-gallery">
              {section.imageGallery.map((item, galleryIndex) => (
                <div key={galleryIndex} className="gallery-item">
                  <div className="gallery-image">
                    <img src={item.image} alt={item.caption || ''} />
                  </div>
                  {item.caption && (
                    <div 
                      className="gallery-caption" 
                      dangerouslySetInnerHTML={{ __html: item.caption }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Support subsections */}
          {section.subsections && section.subsections.length > 0 && (
            <div className="subsections">
              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="subsection">
                  {subsection.title && <h3>{subsection.title}</h3>}
                  {subsection.content && renderContent(subsection.content)}
                  {subsection.image && renderMedia(subsection.image)}
                  {subsection.video && renderMedia(subsection.video)}
                  {subsection.gif && renderMedia(subsection.gif)}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProjectSections;

