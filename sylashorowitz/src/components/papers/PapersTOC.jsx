/**
 * PapersTOC - Table of Contents component
 * Displays list of papers with active state tracking
 * Auto-scrolls to keep active item visible
 */

import React, { useCallback, useEffect, useRef } from 'react';
import TOCLink from './TOCLink';

function PapersTOC({ papers, activeIndex, onPaperClick, introRef }) {
  const linkRefs = useRef({});
  const tocContainerRef = useRef(null);

  const handleClick = useCallback((index) => {
    onPaperClick(index);
  }, [onPaperClick]);

  // Scroll active link into view when activeIndex changes
  useEffect(() => {
    const activeLinkRef = linkRefs.current[activeIndex];
    const tocContainer = tocContainerRef.current;
    const introElement = introRef?.current;

    if (!tocContainer) return;

    // Find the scrollable sidebar parent (papers-sidebar)
    const sidebar = tocContainer.closest('.papers-sidebar');
    if (!sidebar) return;

    const sidebarRect = sidebar.getBoundingClientRect();

    // Check if we're near the top (first few papers) and intro should be visible
    const isNearTop = activeIndex <= 2; // First 3 papers (0, 1, 2)
    
    if (isNearTop && introElement) {
      const introRect = introElement.getBoundingClientRect();
      const isIntroVisible = introRect.top >= sidebarRect.top && introRect.bottom <= sidebarRect.bottom;
      
      // If intro is not fully visible, scroll to show it
      if (!isIntroVisible) {
        sidebar.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return; // Don't scroll to TOC link if we're showing intro
      }
    }

    // Scroll to active TOC link if it exists and is not visible
    if (activeLinkRef) {
      const linkElement = activeLinkRef;
      const linkRect = linkElement.getBoundingClientRect();

      // Check if link is outside visible area of sidebar
      const isAboveViewport = linkRect.top < sidebarRect.top;
      const isBelowViewport = linkRect.bottom > sidebarRect.bottom;

      if (isAboveViewport || isBelowViewport) {
        // Calculate scroll position to center the link in the sidebar
        // Get the link's position relative to the sidebar's content (not viewport)
        const linkOffsetFromTOC = linkElement.offsetTop;
        const tocOffsetFromSidebar = tocContainer.offsetTop;
        const linkAbsolutePosition = tocOffsetFromSidebar + linkOffsetFromTOC;
        
        // Center the link in the sidebar viewport
        const sidebarHeight = sidebar.clientHeight;
        const linkHeight = linkElement.offsetHeight;
        const targetScrollTop = linkAbsolutePosition - (sidebarHeight / 2) + (linkHeight / 2);

        // Scroll the sidebar (not the window)
        sidebar.scrollTo({
          top: Math.max(0, targetScrollTop),
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex, introRef]);

  // Store refs for each link
  const setLinkRef = useCallback((index) => (el) => {
    if (el) {
      linkRefs.current[index] = el;
    }
  }, []);

  return (
    <nav className="papers-toc" ref={tocContainerRef}>
      <h2>Contents</h2>
      <ol className="toc-list">
        {papers.map((paper, index) => (
          <TOCLink
            key={index}
            ref={setLinkRef(index)}
            index={index}
            title={paper.title}
            isActive={activeIndex === index}
            onClick={handleClick}
          />
        ))}
      </ol>
    </nav>
  );
}

export default PapersTOC;

