/**
 * ImageCarousel - Interactive image carousel component
 */

import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

function ImageCarousel({ images, autoFlip = false, autoFlipInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-flip functionality
  useEffect(() => {
    if (!autoFlip || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoFlipInterval);

    return () => clearInterval(interval);
  }, [autoFlip, autoFlipInterval, images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <button 
          className="carousel-button carousel-button-prev" 
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ‹
        </button>
        
        <div className="carousel-slide">
          <img 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1} of ${images.length}`}
            className="carousel-image"
          />
        </div>
        
        <button 
          className="carousel-button carousel-button-next" 
          onClick={goToNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
      
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default ImageCarousel;

