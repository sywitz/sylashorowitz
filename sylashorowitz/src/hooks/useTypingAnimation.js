/**
 * useTypingAnimation - Custom hook for typing animation effect
 * 
 * Handles the state and logic for animating text character by character,
 * moving through multiple sentences sequentially.
 * 
 * @param {string[]} sentences - Array of sentences to type out
 * @param {number} typingSpeed - Delay between characters in milliseconds (default: 15 for desktop, 30 for mobile)
 * @returns {Object} Object containing displayedTexts, currentSentenceIndex, currentCharIndex, isComplete
 */

import { useState, useEffect } from 'react';

export const useTypingAnimation = (sentences, typingSpeed = null) => {
  const [displayedTexts, setDisplayedTexts] = useState(Array(sentences.length).fill(''));
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentSentenceIndex >= sentences.length) return;

    const currentSentence = sentences[currentSentenceIndex];
    let animationFrameId;
    let timeoutId;
    
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

    // Use requestAnimationFrame on desktop, setTimeout on mobile for better battery life
    const isMobile = window.innerWidth <= 768;
    const speed = typingSpeed || (isMobile ? 30 : 15);
    
    if (isMobile) {
      timeoutId = setTimeout(animate, speed);
    } else {
      timeoutId = setTimeout(() => {
        animationFrameId = requestAnimationFrame(animate);
      }, speed);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentSentenceIndex, currentCharIndex, sentences, typingSpeed]);

  const isComplete = currentSentenceIndex >= sentences.length;

  return {
    displayedTexts,
    currentSentenceIndex,
    currentCharIndex,
    isComplete
  };
};

