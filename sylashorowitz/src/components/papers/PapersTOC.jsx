/**
 * PapersTOC - Table of Contents component
 * 
 * Displays clickable list of papers with active state highlighting.
 * Auto-scrolls sidebar to keep the active item visible as user scrolls.
 */

import React, { useRef } from 'react';
import { useSidebarScroll } from '../../hooks/useSidebarScroll';
import { useRefMap } from '../../hooks/useRefMap';
import TOCLink from './TOCLink';

function PapersTOC({ papers, activeIndex, onPaperClick, introRef }) {
  // Manage refs for each TOC link
  const { refs: linkRefs, createRef: createLinkRef } = useRefMap();
  const tocContainerRef = useRef(null);

  // Auto-scroll sidebar when active paper changes
  useSidebarScroll({
    activeIndex,
    tocContainerRef,
    introRef,
    linkRefs
  });

  return (
    <nav className="papers-toc" ref={tocContainerRef}>
      <h2>Contents</h2>
      <ol className="toc-list">
        {papers.map((paper, index) => (
          <TOCLink
            key={index}
            ref={createLinkRef(index)}
            index={index}
            title={paper.title}
            isActive={activeIndex === index}
            onClick={onPaperClick}
          />
        ))}
      </ol>
    </nav>
  );
}

export default PapersTOC;

