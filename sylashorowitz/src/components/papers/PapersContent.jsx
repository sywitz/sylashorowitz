/**
 * PapersContent - Main content area displaying paper cards
 * 
 * Renders all papers as scrollable cards. Each card has a data-paper-index
 * attribute that is used by useScrollTracking to determine the active paper.
 */

import React from 'react';
import PaperCard from '../PaperCard';

function PapersContent({ papers }) {
  return (
    <div className="papers-content">
      {papers.map((paper, index) => (
        <PaperCard 
          key={index} 
          {...paper} 
          index={index}
        />
      ))}
    </div>
  );
}

export default PapersContent;

