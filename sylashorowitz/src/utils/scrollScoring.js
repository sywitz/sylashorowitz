/**
 * Scroll scoring utilities
 * Pure functions for calculating element scores based on visibility and position
 */

import { calculateVisibilityRatio, isElementVisible, getCSSVariable } from './domUtils';
import { SCROLL_TRACKING_CONFIG } from '../config/scrollTrackingConfig';

/**
 * Calculate score for an element based on visibility and position
 * 
 * Scoring formula:
 *   score = (visibility * weight) - (distance * penalty) + (above_bonus if applicable)
 * 
 * Higher score = more likely to be the active paper
 * 
 * @param {DOMRect} rect - Element's bounding rectangle
 * @param {number} targetOffset - Ideal position (pixels from top)
 * @param {number} viewportHeight - Viewport height
 * @returns {number} Score for this element
 */
export const calculateElementScore = (rect, targetOffset, viewportHeight) => {
  const visibilityRatio = calculateVisibilityRatio(rect, viewportHeight);
  const distanceFromTarget = Math.abs(rect.top - targetOffset);
  const isAboveTarget = rect.top <= targetOffset;

  return (
    visibilityRatio * SCROLL_TRACKING_CONFIG.SCORING.VISIBILITY_WEIGHT -
    distanceFromTarget * SCROLL_TRACKING_CONFIG.SCORING.DISTANCE_PENALTY +
    (isAboveTarget ? SCROLL_TRACKING_CONFIG.SCORING.ABOVE_TARGET_BONUS : 0)
  );
};

/**
 * Find the most visible/active element from a selector
 * 
 * The "target offset" is the ideal position for a paper to be considered active:
 * just below the header (headerHeight + spacing). Papers closest to this position
 * with highest visibility win.
 * 
 * @param {string} selector - CSS selector for elements to track (e.g., '[data-paper-index]')
 * @param {Object} config - Configuration object with CSS vars and fallbacks
 * @returns {number} Index of the most active element
 */
export const findActiveElement = (selector, config) => {
  // Get header height and spacing from CSS variables (with fallbacks)
  const headerHeight = getCSSVariable(
    config.CSS_VARS.HEADER_HEIGHT,
    config.FALLBACKS.HEADER_HEIGHT
  );
  const spacing = getCSSVariable(
    config.CSS_VARS.SPACING,
    config.FALLBACKS.SPACING
  );
  
  // Ideal position: just below header with some spacing
  const targetOffset = headerHeight + spacing;

  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return 0;

  const viewportHeight = window.innerHeight;
  let activeIndex = 0;
  let bestScore = -Infinity;

  // Score each element and find the one with highest score
  elements.forEach((element, index) => {
    const rect = element.getBoundingClientRect();

    // Skip elements that aren't visible at all
    if (!isElementVisible(rect, viewportHeight)) return;

    const score = calculateElementScore(rect, targetOffset, viewportHeight);

    if (score > bestScore) {
      bestScore = score;
      activeIndex = index;
    }
  });

  return activeIndex;
};

