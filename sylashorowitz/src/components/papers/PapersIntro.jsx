/**
 * PapersIntro - Introduction section for Papers page
 * Displays title and description
 */

import React, { forwardRef } from 'react';
import { PAPERS_INTRO_TEXT } from '../../data/papersData';

const PapersIntro = forwardRef((props, ref) => {
  return (
    <div className="papers-intro" ref={ref}>
      <h1>Papers</h1>
      <p>{PAPERS_INTRO_TEXT}</p>
    </div>
  );
});

PapersIntro.displayName = 'PapersIntro';

export default PapersIntro;

