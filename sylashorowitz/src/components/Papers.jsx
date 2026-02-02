/**
 * Papers - Main component for displaying academic papers
 * 
 * Layout: Header | Sidebar (TOC) | Main content (paper cards)
 * Tracks active paper as user scrolls and handles navigation clicks
 */

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
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
        <p>
          {PAPERS_INTRO_TEXT}{' '}
          <Link 
            to="/ideas"
            className="ideas-link"
            style={{ 
              color: 'var(--color-accent)', 
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              transition: 'border-color var(--transition-base)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.borderBottomColor = 'var(--color-accent)'}
            onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}
          >
            (informal ideas)
          </Link>
        </p>
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
