/**
 * Custom hook for tracking scroll position and determining active element
 * Optimized with requestAnimationFrame throttling
 */

import { useState, useEffect } from 'react';
import { getCSSVariable, calculateVisibilityRatio, isElementVisible } from '../utils/domUtils';

/**
 * Configuration constants for scroll tracking
 */
const SCROLL_CONFIG = {
  CSS_VARS: {
    HEADER_HEIGHT: '--header-height',
    SPACING: '--spacing-3xl'
  },
  FALLBACKS: {
    HEADER_HEIGHT: 80,
    SPACING: 30
  },
  INIT_DELAY: 150, // ms delay before initial calculation
  SCORING: {
    VISIBILITY_WEIGHT: 100,
    DISTANCE_PENALTY: 0.1,
    ABOVE_TARGET_BONUS: 10
  }
};

/**
 * Calculate score for an element based on visibility and position
 * Higher score = more likely to be active
 */
const calculateElementScore = (rect, targetOffset, viewportHeight) => {
  const visibilityRatio = calculateVisibilityRatio(rect, viewportHeight);
  const distanceFromTarget = Math.abs(rect.top - targetOffset);
  const isAboveTarget = rect.top <= targetOffset;

  return (
    visibilityRatio * SCROLL_CONFIG.SCORING.VISIBILITY_WEIGHT -
    distanceFromTarget * SCROLL_CONFIG.SCORING.DISTANCE_PENALTY +
    (isAboveTarget ? SCROLL_CONFIG.SCORING.ABOVE_TARGET_BONUS : 0)
  );
};

/**
 * Find the most visible/active element from a selector
 * @param {string} selector - CSS selector for elements to track
 * @returns {number} Index of the most active element
 */
const findActiveElement = (selector) => {
  const headerHeight = getCSSVariable(
    SCROLL_CONFIG.CSS_VARS.HEADER_HEIGHT,
    SCROLL_CONFIG.FALLBACKS.HEADER_HEIGHT
  );
  const spacing = getCSSVariable(
    SCROLL_CONFIG.CSS_VARS.SPACING,
    SCROLL_CONFIG.FALLBACKS.SPACING
  );
  const targetOffset = headerHeight + spacing;

  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return 0;

  const viewportHeight = window.innerHeight;
  let activeIndex = 0;
  let bestScore = -Infinity;

  elements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();

    if (!isElementVisible(rect, viewportHeight)) return;

    const score = calculateElementScore(rect, targetOffset, viewportHeight);

    if (score > bestScore) {
      bestScore = score;
      activeIndex = index;
    }
  });

  return activeIndex;
};

/**
 * Custom hook for tracking scroll position and updating active index
 * @param {string} selector - CSS selector for elements to track
 * @returns {[number, (index: number) => void]} Active index and manual setter
 */
export const useScrollTracking = (selector) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateActiveIndex = () => {
      const newIndex = findActiveElement(selector);
      setActiveIndex((prevIndex) => {
        // Only update if changed to avoid unnecessary re-renders
        return newIndex !== prevIndex ? newIndex : prevIndex;
      });
    };

    // Initial update after DOM is ready
    const initialTimeout = setTimeout(updateActiveIndex, SCROLL_CONFIG.INIT_DELAY);

    // Throttled scroll handler using requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveIndex();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(initialTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selector]);

  return [activeIndex, setActiveIndex];
};

