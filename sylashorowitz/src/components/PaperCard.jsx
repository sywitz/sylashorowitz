import React, { useState } from 'react';

function PaperCard({ title, subtitle, link, linkText = 'Read Paper', description = [], index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Join all paragraphs into full text
  const fullText = description.join(' ');
  
  // Character limit for truncation (approximately 2-3 lines)
  const charLimit = 280;
  const shouldTruncate = fullText.length > charLimit;
  
  // Get displayed text
  const displayText = !isExpanded && shouldTruncate 
    ? fullText.slice(0, charLimit) + '...'
    : fullText;

  return (
    <article className="paper-card" id={`paper-${index}`}>
      <div className="paper-card-number">{String(index + 1).padStart(2, '0')}</div>
      
      <div className="paper-card-content">
        <header className="paper-card-header">
          <h3>{title}</h3>
          <p className="paper-card-subtitle">{subtitle}</p>
        </header>

        <div className="paper-card-body">
          <p className="paper-card-text">{displayText}</p>
        </div>

        <div className="paper-card-actions">
          {shouldTruncate && (
            <button
              className="btn-expand"
              onClick={() => setIsExpanded(!isExpanded)}
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default PaperCard;

