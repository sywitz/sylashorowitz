/**
 * ProjectSections - Project stages/steps with flexible media support
 * Supports images, gifs, videos, and subsections
 */

import React from 'react';
import { renderContent } from '../utils/renderContent';
import ImageCarousel from './ImageCarousel';

function ProjectSections({ sections }) {
  const renderMedia = (media) => {
    if (!media) return null;

    // Handle media as object with type property
    if (typeof media === 'object' && media.type) {
      if (media.type === 'video') {
        const isBackground = media.background || false;
        return (
          <div className={isBackground ? "section-background-video" : "section-media"}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              {...(isBackground ? {} : { controls: true })}
            >
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
          <img src={src} alt={media.alt || ''} loading="lazy" />
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
        <img src={mediaStr} alt="" loading="lazy" />
      </div>
    );
  };

  return (
    <div className="project-sections">
      {sections.map((section, index) => (
        <div key={index} className={`section ${section.layout ? `section-${section.layout}` : ''} ${section.layout === 'background-video' ? 'section-background-video' : ''} ${section.customClass || ''}`}>
          {section.title && <h2>{section.title}</h2>}
          
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
          ) : section.layout === 'text-with-side-images-left' && section.sideImages ? (
            <>
              <div className="text-with-side-images-container">
                {section.content ? (
                  <div className="text-with-side-images-pair text-with-side-images-left">
                    {section.sideImages && section.sideImages.length > 0 && (
                      <div className="side-images-stacked">
                        {section.customClass === 'lake-whitehall-section' && section.sideImages.length === 4 ? (
                          <>
                            {/* First and last images side by side (shrunk) */}
                            <div className="lake-whitehall-top-images">
                              {[section.sideImages[0], section.sideImages[3]].map((img, imgIndex) => {
                                const imgSrc = typeof img === 'string' ? img : (img.default || img);
                                const isVideo = typeof imgSrc === 'string' 
                                  ? (imgSrc.endsWith('.mp4') || imgSrc.endsWith('.webm') || imgSrc.endsWith('.mov') || imgSrc.endsWith('.avi'))
                                  : false;
                                
                                return (
                                  <div key={imgIndex === 0 ? 0 : 3} className="side-image-wrapper">
                                    {isVideo ? (
                                      <video controls className="side-video">
                                        <source src={imgSrc} type="video/mp4" />
                                      </video>
                                    ) : (
                                      <img src={imgSrc} alt={`${section.title} - Image ${imgIndex === 0 ? 1 : 4}`} />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                            {/* Second and third images in a row below */}
                            <div className="lake-whitehall-bottom-images">
                              {section.sideImages.slice(1, 3).map((img, imgIndex) => {
                                const imgSrc = typeof img === 'string' ? img : (img.default || img);
                                const isVideo = typeof imgSrc === 'string' 
                                  ? (imgSrc.endsWith('.mp4') || imgSrc.endsWith('.webm') || imgSrc.endsWith('.mov') || imgSrc.endsWith('.avi'))
                                  : false;
                                
                                return (
                                  <div key={imgIndex + 1} className="side-image-wrapper">
                                    {isVideo ? (
                                      <video controls className="side-video">
                                        <source src={imgSrc} type="video/mp4" />
                                      </video>
                                    ) : (
                                      <img src={imgSrc} alt={`${section.title} - Image ${imgIndex + 2}`} />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        ) : (
                          /* Default rendering for other sections */
                          section.sideImages.map((img, imgIndex) => {
                            const imgSrc = typeof img === 'string' ? img : (img.default || img);
                            const isVideo = typeof imgSrc === 'string' 
                              ? (imgSrc.endsWith('.mp4') || imgSrc.endsWith('.webm') || imgSrc.endsWith('.mov') || imgSrc.endsWith('.avi'))
                              : false;
                            
                            return (
                              <div key={imgIndex} className="side-image-wrapper">
                                {isVideo ? (
                                  <video controls className="side-video">
                                    <source src={imgSrc} type="video/mp4" />
                                  </video>
                                ) : (
                                  <img src={imgSrc} alt={`${section.title} - Image ${imgIndex + 1}`} />
                                )}
                              </div>
                            );
                          })
                        )}
                      </div>
                    )}
                    <div className="text-with-side-images-content-box">
                      {renderContent(section.content)}
                    </div>
                  </div>
                ) : null}
              </div>
              {/* Support PDF embedding for text-with-side-images-left layout */}
              {section.pdf && (
                <div className="section-pdf">
                  <iframe 
                    src={section.pdf} 
                    type="application/pdf"
                    title="PDF Document"
                    className="pdf-embed"
                  />
                </div>
              )}
            </>
          ) : section.layout === 'side-by-side-images' && section.sideBySideImages ? (
            <div className="side-by-side-images-container">
              {renderContent(section.content)}
              <div className="side-by-side-images-grid">
                {section.sideBySideImages.map((item, index) => (
                  <div key={index} className="side-by-side-image-item">
                    <img src={item.image} alt={item.caption || ''} loading="lazy" />
                    {item.caption && (
                      <div className="side-by-side-caption" dangerouslySetInnerHTML={{ __html: item.caption }} />
                    )}
                  </div>
                ))}
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
                    {section.sideImages && section.sideImages.length > 0 && (
                      <div className="side-images-stacked">
                        {section.sideImages.map((img, imgIndex) => {
                          // Handle video files - check if it's an imported video module or string path
                          const imgSrc = typeof img === 'string' ? img : (img.default || img);
                          const isVideo = typeof imgSrc === 'string' 
                            ? (imgSrc.endsWith('.mp4') || imgSrc.endsWith('.webm') || imgSrc.endsWith('.mov') || imgSrc.endsWith('.avi'))
                            : false;
                          
                          return (
                            <div key={imgIndex} className="side-image-wrapper">
                              {isVideo ? (
                                <video controls className="side-video">
                                  <source src={imgSrc} type="video/mp4" />
                                </video>
                              ) : (
                                <img src={imgSrc} alt={`${section.title} - Image ${imgIndex + 1}`} loading="lazy" />
                              )}
                            </div>
                          );
                        })}
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
          ) : section.layout === 'background-video' && section.backgroundVideo ? (
            <div className="background-video-section">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="background-video"
              >
                <source src={section.backgroundVideo} type="video/mp4" />
              </video>
              <div className="background-video-content">
                {renderContent(section.content)}
              </div>
            </div>
          ) : section.layout === 'large-image' && section.image ? (
            <div className="large-image-section">
              {renderContent(section.content)}
              <div className="large-image-container">
                <img src={section.image} alt="" loading="lazy" />
              </div>
            </div>
          ) : section.layout === 'large-image-with-text' && section.image ? (
            <div className="large-image-with-text-container">
              <div className="large-image-wrapper">
                <img src={section.image} alt="" loading="lazy" />
              </div>
              <div className="large-image-text-overlay">
                {renderContent(section.content)}
              </div>
            </div>
          ) : section.layout === 'image-carousel' && section.carouselImages ? (
            <>
              {renderContent(section.content)}
              <ImageCarousel images={section.carouselImages} />
            </>
          ) : section.layout === 'code-block' && section.code ? (
            <div className="code-block-section">
              {renderContent(section.content)}
              <pre className="code-block">
                <code>{section.code}</code>
              </pre>
            </div>
          ) : (
            <>
              {renderContent(section.content)}
              {/* Support image, video, or gif - can be string path or object */}
              {section.image && renderMedia(section.image)}
              {section.video && renderMedia(section.video)}
              {section.gif && renderMedia(section.gif)}
              {/* Support multiple images */}
              {section.images && section.images.length > 0 && (
                <div className="section-images">
                  {section.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="section-image-item">
                      {typeof img === 'string' ? (
                        <img src={img} alt="" loading="lazy" />
                      ) : (
                        <>
                          <img src={img.src} alt={img.alt || ''} loading="lazy" />
                          {img.caption && (
                            <div className="image-caption" dangerouslySetInnerHTML={{ __html: img.caption }} />
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {/* Support PDF embedding */}
              {section.pdf && (
                <div className="section-pdf">
                  <iframe 
                    src={section.pdf} 
                    type="application/pdf"
                    title="PDF Document"
                    className="pdf-embed"
                  />
                </div>
              )}
            </>
          )}
          
          {/* Image gallery: three images in a row with captions */}
          {section.imageGallery && section.imageGallery.length > 0 && (
            <div className="image-gallery">
              {section.imageGallery.map((item, galleryIndex) => (
                <div key={galleryIndex} className="gallery-item">
                  <div className="gallery-image">
                    <img src={item.image} alt={item.caption || ''} loading="lazy" />
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

