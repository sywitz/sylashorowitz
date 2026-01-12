/**
 * Bio - Biography section component
 * 
 * Displays personal biography and background information with a modern landing page design.
 * Includes images and links to external resources and internal portfolio pages.
 */

import React, { useState, useEffect } from 'react';
import bioImage1 from '../assets/images/bio/IMG_20240822_140611.jpg';
import bioImage2 from '../assets/images/bio/PXL_20220305_223541615.jpg';
import bioImage3 from '../assets/images/bio/PXL_20231102_173228564.jpg';
import bioImage4 from '../assets/images/bio/PXL_20240201_212729411.jpg';
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

  const [displayedTexts, setDisplayedTexts] = useState(Array(sentences.length).fill(''));
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentSentenceIndex >= sentences.length) return;

    const currentSentence = sentences[currentSentenceIndex];
    const timer = setTimeout(() => {
      if (currentCharIndex < currentSentence.length) {
        setDisplayedTexts(prev => {
          const newTexts = [...prev];
          newTexts[currentSentenceIndex] = currentSentence.substring(0, currentCharIndex + 1);
          return newTexts;
        });
        setCurrentCharIndex(prev => prev + 1);
      } else {
        // Move to next sentence after a brief pause
        setTimeout(() => {
          setCurrentSentenceIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 300);
      }
    }, 15); // Typing speed (faster)

    return () => clearTimeout(timer);
  }, [currentSentenceIndex, currentCharIndex, sentences]);

  const highlightKeywords = (text) => {
    let highlightedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<span class="bio-keyword">$1</span>');
    });
    return highlightedText;
  };

  return (
    <div id="bio" className="bio-landing">
      <section className="bio-hero">
        <div className="bio-hero-content">
          {/* Collage Images - Behind Text */}
          <div className="bio-collage-image bio-collage-image-1">
            <img src={bioImage1} alt="Sylas Horowitz" />
          </div>
          <div className="bio-collage-image bio-collage-image-2">
            <img src={bioImage2} alt="Engineering work" />
          </div>
          <div className="bio-collage-image bio-collage-image-3">
            <img src={bioImage3} alt="Sylas Horowitz" />
          </div>
          <div className="bio-collage-image bio-collage-image-4">
            <img src={bioImage4} alt="Sylas Horowitz" />
          </div>

          {/* Text Content - Centered */}
          <div className="bio-hero-text">
            <h1 className="bio-greeting">Hi, I'm Sylas.</h1>
            <div className="bio-description">
              {/* Invisible placeholder to reserve space */}
              <div className="bio-description-placeholder" aria-hidden="true">
                {sentences.map((sentence, index) => (
                  <div key={index} className="bio-description-line">
                    <span className="bio-bullet">&gt;</span>
                    <span className="bio-text-content">{sentence}</span>
                  </div>
                ))}
              </div>
              {/* Visible animated text */}
              <div className="bio-description-animated">
                {sentences.map((sentence, index) => (
                  <div key={index} className="bio-description-line">
                    <span className="bio-bullet">&gt;</span>
                    <span 
                      className="bio-text-content"
                      dangerouslySetInnerHTML={{ 
                        __html: highlightKeywords(displayedTexts[index]) + (index === currentSentenceIndex && currentCharIndex < sentence.length ? '<span class="bio-cursor">|</span>' : '')
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bio;
