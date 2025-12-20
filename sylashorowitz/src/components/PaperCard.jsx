/**
 * PaperCard - Individual paper card component
 * Displays paper title, subtitle, description with expand/collapse functionality
 */

import React from 'react';
import { formatPaperNumber } from '../utils/textUtils';
import { useExpandableText } from '../hooks/useExpandableText';
import ExternalLinkIcon from './papers/ExternalLinkIcon';

function PaperCard({ 
  title, 
  subtitle, 
  link, 
  linkText = 'Read Paper', 
  description = [], 
  index 
}) {
  const { displayText, shouldTruncate, isExpanded, toggle } = useExpandableText(description);

  return (
    <article 
      className="paper-card" 
      data-paper-index={index}  // Used by useScrollTracking to identify active paper
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
            onClick={toggle}
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
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </article>
  );
}

export default PaperCard;
