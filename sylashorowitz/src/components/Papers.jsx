/**
 * Papers - Main component for displaying academic papers
 * 
 * Layout: Header | Sidebar (TOC) | Main content (paper cards)
 * Tracks active paper as user scrolls and handles navigation clicks
 */

import React, { useRef } from 'react';
import { papers, PAPERS_INTRO_TEXT } from '../data/papersData';
import { useScrollTracking } from '../hooks/useScrollTracking';
import { scrollToPaper } from '../utils/scrollUtils';
import PapersTOC from './papers/PapersTOC';
import PapersContent from './papers/PapersContent';
import { PAPER_SELECTOR } from './papers/constants';
import '../styles/Papers.css';

function Papers() {
  // Track which paper is currently active based on scroll position
  const [activePaperIndex, setActivePaperIndex] = useScrollTracking(PAPER_SELECTOR);
  
  // Ref for TOC container (no longer need intro ref)
  const tocRef = useRef(null);

  // Handle TOC click: update active index and scroll to paper
  const handlePaperClick = (index) => {
    setActivePaperIndex(index);
    scrollToPaper(index);
  };

  return (
    <section id="papers">
      <div className="papers-header">
        <h1>WRITING</h1>
        <p>{PAPERS_INTRO_TEXT}</p>
      </div>
      
      <div className="papers-container">
        <aside className="papers-sidebar">
          <PapersTOC 
            ref={tocRef}
            papers={papers}
            activeIndex={activePaperIndex}
            onPaperClick={handlePaperClick}
          />
        </aside>

        <PapersContent papers={papers} />
      </div>
    </section>
  );
}

export default Papers;
