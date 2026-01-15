/**
 * BioHero - Hero section component for the bio page
 * 
 * Composes the hero section with greeting, typing text, and image collage.
 */

import React from 'react';
import BioImageCollage from './BioImageCollage';
import TypingText from './TypingText';

function BioHero({ 
  greeting = "Hi, I'm Sylas.",
  sentences = [],
  keywords = [],
  images = []
}) {
  return (
    <section className="bio-hero">
      <div className="bio-hero-content">
        {/* Collage Images - Behind Text */}
        <BioImageCollage images={images} />

        {/* Text Content - Centered */}
        <div className="bio-hero-text">
          <h1 className="bio-greeting">{greeting}</h1>
          <TypingText 
            sentences={sentences}
            keywords={keywords}
          />
        </div>
      </div>
    </section>
  );
}

export default BioHero;

