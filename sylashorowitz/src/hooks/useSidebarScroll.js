/**
 * useSidebarScroll - Auto-scrolls sidebar to keep active TOC item visible
 * 
 * Behavior:
 * - For top papers (first 3): scrolls to show intro section if not visible
 * - For other papers: centers the active TOC link in the sidebar viewport
 */

import { useEffect } from 'react';
import { isElementVisibleInContainer, calculateCenteredScrollPosition } from '../utils/scrollUtils';
import { SCROLL_TRACKING_CONFIG } from '../config/scrollTrackingConfig';

export const useSidebarScroll = ({ activeIndex, tocContainerRef, introRef, linkRefs }) => {
  const { TOP_PAPERS_THRESHOLD, SELECTOR: SIDEBAR_SELECTOR } = SCROLL_TRACKING_CONFIG.SIDEBAR;
  
  useEffect(() => {
    const tocContainer = tocContainerRef?.current;
    if (!tocContainer) return;

    const sidebar = tocContainer.closest(SIDEBAR_SELECTOR);
    if (!sidebar) return;

    const sidebarRect = sidebar.getBoundingClientRect();
    const activeLink = linkRefs.current[activeIndex];
    const introElement = introRef?.current;

    // Priority 1: For top papers, ensure intro section is visible
    const isNearTop = activeIndex <= TOP_PAPERS_THRESHOLD;
    
    if (isNearTop && introElement) {
      const introRect = introElement.getBoundingClientRect();
      const isIntroVisible = isElementVisibleInContainer(introRect, sidebarRect);
      
      if (!isIntroVisible) {
        sidebar.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }

    // Priority 2: Scroll active TOC link into view if needed
    if (!activeLink) return;

    const linkRect = activeLink.getBoundingClientRect();
    const isAboveViewport = linkRect.top < sidebarRect.top;
    const isBelowViewport = linkRect.bottom > sidebarRect.bottom;

    if (!isAboveViewport && !isBelowViewport) return; // Already visible

    // Calculate scroll position to center the link vertically in sidebar
    const targetScrollTop = calculateCenteredScrollPosition(
      activeLink,
      tocContainer,
      sidebar
    );

    sidebar.scrollTo({
      top: Math.max(0, targetScrollTop), // Prevent negative scroll
      behavior: 'smooth'
    });
  }, [activeIndex, tocContainerRef, introRef, linkRefs]);
};

