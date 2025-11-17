/**
 * PaperCard - Individual paper card component
 * Displays paper title, subtitle, description with expand/collapse functionality
 */

import React, { useState, useMemo } from 'react';
import { joinParagraphs, truncateText, TEXT_CONFIG } from '../utils/textUtils';
import { formatPaperNumber } from '../utils/textUtils';

function PaperCard({ 
  title, 
  subtitle, 
  link, 
  linkText = 'Read Paper', 
  description = [], 
  index 
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Memoize text processing
  const { fullText, displayText, shouldTruncate } = useMemo(() => {
    const joinedText = joinParagraphs(description);
    const truncated = truncateText(joinedText, TEXT_CONFIG.TRUNCATE_LIMIT);
    const shouldTruncate = joinedText.length > TEXT_CONFIG.TRUNCATE_LIMIT;
    
    return {
      fullText: joinedText,
      displayText: !isExpanded && shouldTruncate ? truncated : joinedText,
      shouldTruncate
    };
  }, [description, isExpanded]);

  const handleToggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <article 
      className="paper-card" 
      data-paper-index={index}
      id={`paper-${index}`}
    >
      <div className="paper-card-number">{formatPaperNumber(index)}</div>
      
      <div className="paper-card-header">
        <h3 className="paper-card-title">{title}</h3>
        <p className="paper-card-subtitle">{subtitle}</p>
      </div>

      <div className="paper-card-body">
        <p className="paper-card-text">{displayText}</p>
      </div>

      <div className="paper-card-actions">
        {shouldTruncate && (
          <button
            className="btn-expand"
            onClick={handleToggleExpand}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
        
        {link && (
          <a
            className="btn-paper-link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkText}
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

export default PaperCard;
