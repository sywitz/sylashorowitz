/**
 * BioImageCollage - Component for displaying a collage of bio images
 * 
 * Renders multiple images positioned absolutely behind text content.
 * Supports lazy loading for all images except the first one.
 */

import React from 'react';

function BioImageCollage({ images }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      {images.map((image, index) => {
        const isFirstImage = index === 0;
        return (
          <div 
            key={index} 
            className={`bio-collage-image bio-collage-image-${index + 1}`}
          >
            <img 
              src={image.src} 
              alt={image.alt || `Bio image ${index + 1}`}
              loading={isFirstImage ? 'eager' : 'lazy'}
              fetchpriority={isFirstImage ? 'high' : undefined}
            />
          </div>
        );
      })}
    </>
  );
}

export default BioImageCollage;

