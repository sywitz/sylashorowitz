/**
 * TOCLink - Table of Contents link component
 * 
 * Individual clickable link in the TOC. Uses forwardRef to expose DOM element
 * for scroll calculations in useSidebarScroll hook.
 */

import React, { forwardRef } from 'react';
import { formatPaperNumber } from '../../utils/textUtils';

const TOCLink = forwardRef(({ index, title, isActive, onClick }, ref) => {
  return (
    <li ref={ref}>
      <button 
        onClick={() => onClick(index)}
        className={`toc-link ${isActive ? 'active' : ''}`}
        aria-current={isActive ? 'true' : 'false'}
      >
        <span className="toc-number">{formatPaperNumber(index)}</span>
        <span className="toc-title">{title}</span>
      </button>
    </li>
  );
});

TOCLink.displayName = 'TOCLink';

export default TOCLink;

