/**
 * PapersContent - Main content area displaying paper cards
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

