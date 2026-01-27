/**
 * Bio - Biography section component
 * 
 * Displays personal biography and background information with a modern landing page design.
 * Composes smaller components to create the bio hero section with typing animation and image collage.
 */

import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import BioHero from './bio/BioHero';
import bioImage1 from '../assets/images/bio/IMG_20240822_140611.jpg';
import bioImage2 from '../assets/images/bio/PXL_20220305_223541615.jpg';
import bioImage3 from '../assets/images/bio/PXL_20231102_173228564.jpg';
import bioImage4 from '../assets/engineering-data/lps/PXL_20240201_212729411.jpg';
import '../styles/Bio.css';

function Bio() {
  const sentences = [
    "I design, build, and ship systems from concept → prototype → scale.",
    "MIT alumni experienced in user-centered design, rapid iteration, and hands-on fabrication across energy, climate, AI, and robotics.",
    "Collaborative leader who has managed multi-million dollar R&D projects, built complex systems deployed in harsh environments like the Arctic, and changed state and city policy through stakeholder communication and organizing.",
    "Designing hardware and software at any scale from ROVs to sonic levitators to wave energy converters to chemical plants."
  ];

  const keywords = [
    'MIT alumni', 'user-centered design', 'rapid iteration', 'hands-on fabrication', 'wave energy converters',
    'energy', 'climate', 'AI', 'robotics', 'multi-million dollar R&D projects',
    'harsh environments', 'stakeholder communication', 'sonic levitators', 'chemical plants', 'ROVs'
  ];

  const images = [
    { src: bioImage1, alt: 'Sylas Horowitz' },
    { src: bioImage2, alt: 'Engineering work' },
    { src: bioImage3, alt: 'Sylas Horowitz' },
    { src: bioImage4, alt: 'Sylas Horowitz' }
  ];

  // Scroll to top when component mounts (when navigating to bio page)
  useScrollToTop();

  return (
    <div id="bio" className="bio-landing">
      <BioHero
        greeting="Hi, I'm Sylas."
        sentences={sentences}
        keywords={keywords}
        images={images}
      />
    </div>
  );
}

export default Bio;
