/**
 * PapersIntro - Introduction section for Papers page
 * 
 * Uses forwardRef to expose DOM element for sidebar auto-scroll functionality.
 * When user scrolls to top papers, sidebar scrolls to show this intro section.
 */

import React, { forwardRef } from 'react';
import { PAPERS_INTRO_TEXT } from '../../data/papersData';

const PapersIntro = forwardRef((_, ref) => {
  return (
    <div className="papers-intro" ref={ref}>
      <h1>Papers</h1>
      <p>{PAPERS_INTRO_TEXT}</p>
    </div>
  );
});

PapersIntro.displayName = 'PapersIntro';

export default PapersIntro;

