/**
 * Papers - Main component for displaying academic papers
 * Compositional design with separated concerns
 */

import React, { useCallback, useRef } from 'react';
import { papers } from '../data/papersData';
import { useScrollTracking } from '../hooks/useScrollTracking';
import PapersIntro from './papers/PapersIntro';
import PapersTOC from './papers/PapersTOC';
import PapersContent from './papers/PapersContent';
import '../styles/Papers.css';

// Constants
const PAPER_SELECTOR = '[data-paper-index]';
const SCROLL_BEHAVIOR = {
  behavior: 'smooth',
  block: 'start'
};

function Papers() {
  const [activePaperIndex, setActivePaperIndex] = useScrollTracking(PAPER_SELECTOR);
  const introRef = useRef(null);

  // Scroll to paper and update active index
  const handlePaperClick = useCallback((index) => {
    setActivePaperIndex(index);
    
    const element = document.querySelector(`${PAPER_SELECTOR}[data-paper-index="${index}"]`);
    if (element) {
      element.scrollIntoView(SCROLL_BEHAVIOR);
    }
  }, [setActivePaperIndex]);

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
