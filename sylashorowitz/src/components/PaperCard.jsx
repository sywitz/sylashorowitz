/**
 * PaperCard - Individual paper card component
 * Displays paper title, subtitle, description with expand/collapse functionality
 * Supports multiple links per paper
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
  links = [], // Array of { url, text } objects for multiple links
  description = [], 
  index 
}) {
  const { displayText, shouldTruncate, isExpanded, toggle } = useExpandableText(description);

  // Support both old single link format and new multiple links format
  const allLinks = links.length > 0 
    ? links 
    : (link ? [{ url: link, text: linkText }] : []);

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
        
        {allLinks.map((linkItem, linkIndex) => (
          <a
            key={linkIndex}
            className="btn-paper-link"
            href={linkItem.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkItem.text}
            <ExternalLinkIcon />
          </a>
        ))}
      </div>
    </article>
  );
}

export default PaperCard;
