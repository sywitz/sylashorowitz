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
        const hasControls = media.controls !== false && !isBackground;
        return (
          <div className={isBackground ? "section-background-video" : "section-media"}>
            <video 
              autoPlay={media.autoPlay !== false}
              loop={media.loop !== false}
              muted={media.muted !== false}
              playsInline
              {...(hasControls ? { controls: true } : {})}
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
          {section.title && section.layout !== 'background-video' && <h2>{section.title}</h2>}
          
          {/* Render subsections first if they exist and layout content also exists */}
          {section.subsections && section.subsections.length > 0 && section.layout && (
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
                            // Handle image objects with caption or plain image paths
                            const imageObj = typeof img === 'object' && img.image ? img : { image: img, caption: null };
                            const imgSrc = typeof imageObj.image === 'string' ? imageObj.image : (imageObj.image.default || imageObj.image);
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
                                  <img src={imgSrc} alt={imageObj.caption || `${section.title} - Image ${imgIndex + 1}`} />
                                )}
                                {imageObj.caption && (
                                  <div className="image-caption" dangerouslySetInnerHTML={{ __html: imageObj.caption }} />
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
            <div className={`side-by-side-images-container ${section.customClass || ''}`}>
              {renderContent(section.content)}
              <div className="side-by-side-images-grid">
                {section.sideBySideImages.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="side-by-side-image-item">
                      {item.video ? (
                        <video
                          autoPlay={item.autoPlay !== false}
                          loop={item.loop !== false}
                          muted={item.muted !== false}
                          controls={item.controls !== false}
                          playsInline
                          className="side-by-side-video"
                        >
                          <source src={item.video} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={item.image} alt={item.caption || ''} loading="lazy" />
                      )}
                      {item.caption && (
                        <div className="side-by-side-caption" dangerouslySetInnerHTML={{ __html: item.caption }} />
                      )}
                    </div>
                    {index === 0 && section.sideBySideImages.length === 2 && section.showArrow !== false && (
                      <div className="side-by-side-arrow-wrapper">
                        <div className="side-by-side-arrow">→</div>
                      </div>
                    )}
                  </React.Fragment>
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
                          // Handle video objects with properties
                          if (typeof img === 'object' && img.type === 'video') {
                            const videoSrc = img.src || img.default || img;
                            return (
                              <div key={imgIndex} className="side-image-wrapper">
                                <video 
                                  className="side-video"
                                  autoPlay={img.loop === true || img.autoPlay === true}
                                  loop={img.loop === true}
                                  muted={img.muted !== false}
                                  controls={img.controls !== false}
                                  playsInline
                                >
                                  <source src={videoSrc} type="video/mp4" />
                                </video>
                                {img.caption && (
                                  <div className="image-caption" dangerouslySetInnerHTML={{ __html: img.caption }} />
                                )}
                              </div>
                            );
                          }
                          
                          // Handle image objects with caption
                          if (typeof img === 'object' && img.src) {
                            return (
                              <div key={imgIndex} className="side-image-wrapper">
                                <img src={img.src} alt={img.caption || `${section.title} - Image ${imgIndex + 1}`} loading="lazy" />
                                {img.caption && (
                                  <div className="image-caption" dangerouslySetInnerHTML={{ __html: img.caption }} />
                                )}
                              </div>
                            );
                          }
                          
                          // Handle video files - check if it's an imported video module or string path
                          const imgSrc = typeof img === 'string' ? img : (img.default || img);
                          const isVideo = typeof imgSrc === 'string' 
                            ? (imgSrc.endsWith('.mp4') || imgSrc.endsWith('.webm') || imgSrc.endsWith('.mov') || imgSrc.endsWith('.avi') || imgSrc.endsWith('.TS'))
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
                {section.title && (!section.content || section.content.trim() === '') ? (
                  <h2>{section.title}</h2>
                ) : (
                  <>
                    {section.title && <h2>{section.title}</h2>}
                    {renderContent(section.content)}
                  </>
                )}
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
          ) : section.layout === 'fabrication-desk-grid' && section.deskGridImages ? (
            <div className="fabrication-desk-container">
              {renderContent(section.content)}
              <div className="fabrication-desk-grid">
                {section.deskGridImages.map((item, index) => (
                  <div key={index} className="fabrication-desk-grid-item">
                    <img src={item.image} alt={item.caption || ''} loading="lazy" />
                    {item.caption && (
                      <div className="image-caption" dangerouslySetInnerHTML={{ __html: item.caption }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="fabrication-desk-bottom-images">
                {section.deskFinalImage && (
                  <div className="fabrication-desk-final">
                    <img src={section.deskFinalImage.image} alt={section.deskFinalImage.caption || ''} loading="lazy" />
                    {section.deskFinalImage.caption && (
                      <div className="image-caption" dangerouslySetInnerHTML={{ __html: section.deskFinalImage.caption }} />
                    )}
                  </div>
                )}
                {section.deskSideImage && (
                  <div className="fabrication-desk-side-image">
                    <img src={section.deskSideImage.image} alt={section.deskSideImage.caption || ''} loading="lazy" />
                    {section.deskSideImage.caption && (
                      <div className="image-caption" dangerouslySetInnerHTML={{ __html: section.deskSideImage.caption }} />
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : section.layout === 'code-block' && section.code ? (
            <div className="code-block-section">
              {renderContent(section.content)}
              <pre className="code-block">
                <code>{section.code}</code>
              </pre>
            </div>
          ) : section.layout === 'revise-section-1' ? (
            <div className="revise-section-1-container">
              {section.backgroundImage && (
                <div className="revise-section-1-bg-grid" style={{ backgroundImage: `url(${typeof section.backgroundImage === 'string' ? section.backgroundImage : section.backgroundImage.default || section.backgroundImage})` }}></div>
              )}
              <div className="revise-section-1-content">
                {renderContent(section.content)}
                {section.image && (
                  <div className="revise-section-1-image">
                    <img src={typeof section.image === 'string' ? section.image : section.image.default || section.image} alt="" loading="lazy" />
                  </div>
                )}
              </div>
            </div>
          ) : section.layout === 'revise-section-2' ? (
            <div className="revise-section-2-container">
              <div className="revise-section-2-top">
                <div className="revise-section-2-content-text">
                  {renderContent(section.content)}
                </div>
                <div className="revise-section-2-video">
                  {section.video && (
                    <div className="section-media">
                      <video autoPlay loop muted playsInline>
                        <source src={typeof section.video === 'string' ? section.video : section.video.default || section.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              </div>
              <div className="revise-section-2-bottom">
                <div className="revise-section-2-image">
                  {section.image && (
                    <img src={typeof section.image === 'string' ? section.image : section.image.default || section.image} alt="" loading="lazy" />
                  )}
                </div>
                <div className="revise-section-2-additional-text">
                  {section.additionalContent && renderContent(section.additionalContent)}
                </div>
              </div>
            </div>
          ) : section.layout === 'revise-section-3' ? (
            <div className="revise-section-3-container">
              <div className="revise-section-3-image">
                {section.image && <img src={typeof section.image === 'string' ? section.image : section.image.default || section.image} alt="" loading="lazy" />}
              </div>
              <div className="revise-section-3-content">
                {renderContent(section.content)}
              </div>
            </div>
          ) : section.layout === 'revise-section-4' ? (
            <div className="revise-section-4-container">
              {section.topImage && (
                <div className="revise-section-4-top-image">
                  <img src={typeof section.topImage === 'string' ? section.topImage : section.topImage.default || section.topImage} alt="" loading="lazy" />
                </div>
              )}
              <div className="revise-section-4-content-wrapper">
                <div className="revise-section-4-content">
                  {renderContent(section.content)}
                </div>
                {section.sideImage && (
                  <div className="revise-section-4-side-image">
                    <img src={typeof section.sideImage === 'string' ? section.sideImage : section.sideImage.default || section.sideImage} alt="" loading="lazy" />
                  </div>
                )}
              </div>
              {section.additionalContent && (
                <div className="revise-section-4-additional">
                  {renderContent(section.additionalContent)}
                </div>
              )}
              {section.sideImages && section.sideImages.length > 0 && (
                <div className="revise-section-4-side-images">
                  {section.sideImages.map((img, idx) => (
                    <div key={idx} className="revise-section-4-side-image-item">
                      <img src={typeof img === 'string' ? img : img.default || img} alt="" loading="lazy" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : section.layout === 'revise-section-5' ? (
            <div className="revise-section-5-container">
              <div className="revise-section-5-main">
                {section.leftImage && (
                  <div className="revise-section-5-left-image">
                    <img src={typeof section.leftImage === 'string' ? section.leftImage : section.leftImage.default || section.leftImage} alt="" loading="lazy" />
                  </div>
                )}
                <div className="revise-section-5-content">
                  {renderContent(section.content)}
                </div>
              </div>
              {section.bottomImage && (
                <div className="revise-section-5-bottom-image-wrapper">
                  <div className="revise-section-5-bottom-image">
                    <img src={typeof section.bottomImage === 'string' ? section.bottomImage : section.bottomImage.default || section.bottomImage} alt="" loading="lazy" />
                    {section.gifOverlay && (
                      <div className="revise-section-5-gif-overlay">
                        <img src={typeof section.gifOverlay === 'string' ? section.gifOverlay : section.gifOverlay.default || section.gifOverlay} alt="" />
                      </div>
                    )}
                  </div>
                </div>
              )}
              {section.additionalContent && (
                <div className="revise-section-5-additional">
                  <div className="revise-section-5-additional-content">
                    {renderContent(section.additionalContent)}
                  </div>
                  {section.rightImage && (
                    <div className="revise-section-5-right-image">
                      <img src={typeof section.rightImage === 'string' ? section.rightImage : section.rightImage.default || section.rightImage} alt="" loading="lazy" />
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : section.layout === 'revise-section-6' ? (
            <div className="revise-section-6-container">
              <div className="revise-section-6-content">
                {renderContent(section.content)}
              </div>
              <div className="revise-section-6-right">
                {section.largeRightImage && (
                  <div className="revise-section-6-large-image">
                    <img src={typeof section.largeRightImage === 'string' ? section.largeRightImage : section.largeRightImage.default || section.largeRightImage} alt="" loading="lazy" />
                  </div>
                )}
                {section.smallImage && (
                  <div className="revise-section-6-small-image">
                    <img src={typeof section.smallImage === 'string' ? section.smallImage : section.smallImage.default || section.smallImage} alt="" loading="lazy" />
                  </div>
                )}
              </div>
            </div>
          ) : section.layout === 'marina-section-1' && section.backgroundImage ? (
            <div className="marina-section-1-container">
              <div 
                className="marina-section-1-background" 
                style={{ backgroundImage: `url(${typeof section.backgroundImage === 'string' ? section.backgroundImage : section.backgroundImage.default || section.backgroundImage})` }}
              ></div>
              <div className="marina-section-1-overlay">
                {renderContent(section.content)}
              </div>
            </div>
          ) : section.layout === 'marina-image-grid' && section.imageGallery ? (
            <div className="marina-image-grid-container">
              <div className="marina-image-grid">
                {section.imageGallery.map((item, galleryIndex) => (
                  <div key={galleryIndex} className="marina-grid-item">
                    <div className="marina-grid-image">
                      <img src={item.image} alt={item.caption || ''} loading="lazy" />
                    </div>
                    {item.caption && (
                      <div 
                        className="marina-grid-caption" 
                        dangerouslySetInnerHTML={{ __html: item.caption }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : section.layout === 'tidal-renderings-grid' && section.imageGallery ? (
            <>
              {renderContent(section.content)}
              <div className="tidal-renderings-grid-container">
                <div className="tidal-renderings-grid">
                  {section.imageGallery.map((item, galleryIndex) => (
                    <div key={galleryIndex} className="tidal-renderings-item">
                      <div className="tidal-renderings-image">
                        <img src={item.image} alt={item.caption || ''} loading="lazy" />
                      </div>
                      {item.caption && (
                        <div 
                          className="tidal-renderings-caption" 
                          dangerouslySetInnerHTML={{ __html: item.caption }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
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
          {/* Skip if already handled by custom layout (e.g., marina-image-grid, tidal-renderings-grid) */}
          {section.imageGallery && section.imageGallery.length > 0 && section.layout !== 'marina-image-grid' && section.layout !== 'tidal-renderings-grid' && (
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
          
          {/* Support subsections - only render if not already rendered above (when layout exists) */}
          {section.subsections && section.subsections.length > 0 && !section.layout && (
            <div className="subsections">
              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className={`subsection ${subsection.customClass || ''}`}>
                  {subsection.title && <h3>{subsection.title}</h3>}
                  {subsection.content && renderContent(subsection.content)}
                  {/* Support layouts in subsections */}
                  {subsection.layout === 'steelyard-videos' && subsection.firstVideo ? (
                    <div className="steelyard-videos-container">
                      <div className="steelyard-videos-first-row">
                        <div className="side-by-side-image-item">
                          <video
                            autoPlay={subsection.firstVideo.autoPlay !== false}
                            loop={subsection.firstVideo.loop !== false}
                            muted={subsection.firstVideo.muted !== false}
                            controls={subsection.firstVideo.controls !== false}
                            playsInline
                            className="side-by-side-video"
                          >
                            <source src={subsection.firstVideo.video} type="video/mp4" />
                          </video>
                          {subsection.firstVideo.caption && (
                            <div className="side-by-side-caption" dangerouslySetInnerHTML={{ __html: subsection.firstVideo.caption }} />
                          )}
                        </div>
                      </div>
                      {subsection.secondRow && subsection.secondRow.length > 0 && (
                        <div className="side-by-side-images-grid">
                          {subsection.secondRow.map((item, index) => (
                            <div key={index} className="side-by-side-image-item">
                              {item.video ? (
                                <video
                                  autoPlay={item.autoPlay !== false}
                                  loop={item.loop !== false}
                                  muted={item.muted !== false}
                                  controls={item.controls !== false}
                                  playsInline
                                  className="side-by-side-video"
                                >
                                  <source src={item.video} type="video/mp4" />
                                </video>
                              ) : (
                                <img src={item.image} alt={item.caption || ''} loading="lazy" />
                              )}
                              {item.caption && (
                                <div className="side-by-side-caption" dangerouslySetInnerHTML={{ __html: item.caption }} />
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : subsection.layout === 'side-by-side-images' && subsection.sideBySideImages ? (
                    <div className={`side-by-side-images-container ${subsection.customClass || ''}`}>
                      <div className="side-by-side-images-grid">
                        {subsection.sideBySideImages.map((item, index) => (
                          <React.Fragment key={index}>
                            <div className="side-by-side-image-item">
                              {item.video ? (
                                <video
                                  autoPlay={item.autoPlay !== false}
                                  loop={item.loop !== false}
                                  muted={item.muted !== false}
                                  controls={item.controls !== false}
                                  playsInline
                                  className="side-by-side-video"
                                >
                                  <source src={item.video} type="video/mp4" />
                                </video>
                              ) : (
                                <img src={item.image} alt={item.caption || ''} loading="lazy" />
                              )}
                              {item.caption && (
                                <div className="side-by-side-caption" dangerouslySetInnerHTML={{ __html: item.caption }} />
                              )}
                            </div>
                            {index === 0 && subsection.sideBySideImages.length === 2 && subsection.showArrow !== false && (
                              <div className="side-by-side-arrow">→</div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      {subsection.image && renderMedia(subsection.image)}
                      {subsection.video && renderMedia(subsection.video)}
                      {subsection.gif && renderMedia(subsection.gif)}
                    </>
                  )}
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

