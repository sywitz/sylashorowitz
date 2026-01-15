/**
 * TypingText - Component for displaying animated typing text with keyword highlighting
 * 
 * Displays multiple sentences with a typing animation effect, highlighting
 * specified keywords and showing a blinking cursor on the active line.
 */

import React, { useMemo } from 'react';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';
import { highlightKeywords } from '../../utils/keywordUtils';

function TypingText({ 
  sentences, 
  keywords = [], 
  className = '',
  showCursor = true 
}) {
  const { displayedTexts, currentSentenceIndex, currentCharIndex } = useTypingAnimation(sentences);

  // Memoize highlighted texts to avoid recomputing on every render
  const highlightedTexts = useMemo(() => {
    return displayedTexts.map(text => highlightKeywords(text, keywords));
  }, [displayedTexts, keywords]);

  return (
    <div className={`bio-description ${className}`}>
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
          const showCursorOnLine = showCursor && 
            index === currentSentenceIndex && 
            currentCharIndex < sentence.length;
          
          return (
            <div key={index} className="bio-description-line">
              <span className="bio-bullet">&gt;</span>
              <span 
                className="bio-text-content"
                dangerouslySetInnerHTML={{ 
                  __html: highlightedTexts[index] + (showCursorOnLine ? '<span class="bio-cursor">|</span>' : '')
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TypingText;

