/**
 * Bio - Biography section component
 * 
 * Displays personal biography and background information with a modern landing page design.
 * Includes images and links to external resources and internal portfolio pages.
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
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

  // Memoize keyword regex patterns to avoid recreating them on every render
  const keywordPatterns = useMemo(() => {
    return keywords.map(keyword => ({
      keyword,
      regex: new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
    }));
  }, []);

  // Memoize highlightKeywords function
  const highlightKeywords = useCallback((text) => {
    if (!text) return '';
    let highlightedText = text;
    keywordPatterns.forEach(({ regex }) => {
      highlightedText = highlightedText.replace(regex, '<span class="bio-keyword">$1</span>');
    });
    return highlightedText;
  }, [keywordPatterns]);

  // Optimized typing animation - uses requestAnimationFrame for better performance
  useEffect(() => {
    if (currentSentenceIndex >= sentences.length) return;

    const currentSentence = sentences[currentSentenceIndex];
    let animationFrameId;
    let timeoutId;
    let rafId;
    
    // Detect mobile device more accurately
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    const animate = () => {
      if (currentCharIndex < currentSentence.length) {
        // Use functional updates to avoid dependency on displayedTexts
        setDisplayedTexts(prev => {
          const newTexts = [...prev];
          newTexts[currentSentenceIndex] = currentSentence.substring(0, currentCharIndex + 1);
          return newTexts;
        });
        setCurrentCharIndex(prev => prev + 1);
      } else {
        // Move to next sentence after a brief pause
        timeoutId = setTimeout(() => {
          setCurrentSentenceIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 300);
      }
    };

    // On mobile, use much slower animation or skip animation entirely for better performance
    if (isMobile) {
      // Use a much slower interval on mobile to reduce CPU usage
      // Or skip animation and show all text immediately for very small screens
      if (window.innerWidth <= 480) {
        // On very small screens, skip animation entirely for better performance
        setDisplayedTexts(sentences);
        setCurrentSentenceIndex(sentences.length);
        return;
      }
      // On larger mobile devices, use slower animation
      timeoutId = setTimeout(animate, 80); // Much slower on mobile (was 30ms)
    } else {
      // Desktop: use requestAnimationFrame for smooth animation
      rafId = requestAnimationFrame(() => {
        timeoutId = setTimeout(() => {
          animationFrameId = requestAnimationFrame(animate);
        }, 15);
      });
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (rafId) cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentSentenceIndex, currentCharIndex, sentences]);

  // Memoize highlighted texts to avoid recomputing on every render
  const highlightedTexts = useMemo(() => {
    return displayedTexts.map(text => highlightKeywords(text));
  }, [displayedTexts, highlightKeywords]);

  // Scroll to top when component mounts (when navigating to bio page)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div id="bio" className="bio-landing">
      <section className="bio-hero">
        <div className="bio-hero-content">
          {/* Collage Images - Behind Text - Only first image loads eagerly, others lazy load */}
          <div className="bio-collage-image bio-collage-image-1">
            <img src={bioImage1} alt="Sylas Horowitz" loading="eager" fetchpriority="high" />
          </div>
          <div className="bio-collage-image bio-collage-image-2">
            <img src={bioImage2} alt="Engineering work" loading="lazy" />
          </div>
          <div className="bio-collage-image bio-collage-image-3">
            <img src={bioImage3} alt="Sylas Horowitz" loading="lazy" />
          </div>
          <div className="bio-collage-image bio-collage-image-4">
            <img src={bioImage4} alt="Sylas Horowitz" loading="lazy" />
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
                {sentences.map((sentence, index) => {
                  const showCursor = index === currentSentenceIndex && currentCharIndex < sentence.length;
                  return (
                    <div key={index} className="bio-description-line">
                      <span className="bio-bullet">&gt;</span>
                      <span 
                        className="bio-text-content"
                        dangerouslySetInnerHTML={{ 
                          __html: highlightedTexts[index] + (showCursor ? '<span class="bio-cursor">|</span>' : '')
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bio;
