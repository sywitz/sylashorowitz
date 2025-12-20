/**
 * Papers - Main component for displaying academic papers
 * 
 * Layout: Sidebar (intro + TOC) | Main content (paper cards)
 * Tracks active paper as user scrolls and handles navigation clicks
 */

import React, { useRef } from 'react';
import { papers } from '../data/papersData';
import { useScrollTracking } from '../hooks/useScrollTracking';
import { scrollToPaper } from '../utils/scrollUtils';
import PapersIntro from './papers/PapersIntro';
import PapersTOC from './papers/PapersTOC';
import PapersContent from './papers/PapersContent';
import { PAPER_SELECTOR } from './papers/constants';
import '../styles/Papers.css';

function Papers() {
  // Track which paper is currently active based on scroll position
  const [activePaperIndex, setActivePaperIndex] = useScrollTracking(PAPER_SELECTOR);
  
  // Ref to intro section for sidebar auto-scroll
  const introRef = useRef(null);

  // Handle TOC click: update active index and scroll to paper
  const handlePaperClick = (index) => {
    setActivePaperIndex(index);
    scrollToPaper(index);
  };

  return (
    <section id="papers">
      <div className="papers-container">
        <aside className="papers-sidebar">
          <PapersIntro ref={introRef} />
          <PapersTOC 
            papers={papers}
            activeIndex={activePaperIndex}
            onPaperClick={handlePaperClick}
            introRef={introRef}
          />
        </aside>

        <PapersContent papers={papers} />
      </div>
    </section>
  );
}

export default Papers;
