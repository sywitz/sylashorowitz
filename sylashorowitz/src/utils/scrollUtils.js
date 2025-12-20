/**
 * Scroll utility functions
 * Pure functions for scroll-related calculations and operations
 */

import { PAPER_SELECTOR, SCROLL_BEHAVIOR } from '../components/papers/constants';

/**
 * Scroll to a specific paper element
 * Uses default selector and scroll behavior from constants
 * @param {number} index - Paper index to scroll to
 */
export const scrollToPaper = (index) => {
  const paperElement = document.querySelector(`${PAPER_SELECTOR}[data-paper-index="${index}"]`);
  if (paperElement) {
    paperElement.scrollIntoView(SCROLL_BEHAVIOR);
  }
};

/**
 * Check if an element is visible within a container's viewport
 * @param {DOMRect} elementRect - Element's bounding rectangle
 * @param {DOMRect} containerRect - Container's bounding rectangle
 * @returns {boolean} True if element is fully visible in container
 */
export const isElementVisibleInContainer = (elementRect, containerRect) => {
  return (
    elementRect.top >= containerRect.top &&
    elementRect.bottom <= containerRect.bottom
  );
};

/**
 * Calculate scroll position to center an element vertically in a container
 * 
 * Formula: absolute position - (container height / 2) + (element height / 2)
 * 
 * @param {HTMLElement} element - Element to center
 * @param {HTMLElement} container - Container element
 * @param {HTMLElement} parentContainer - Parent container that contains both element and container
 * @returns {number} Target scroll top position
 */
export const calculateCenteredScrollPosition = (element, container, parentContainer) => {
  const elementOffsetFromContainer = element.offsetTop;
  const containerOffsetFromParent = container.offsetTop;
  const elementAbsolutePosition = containerOffsetFromParent + elementOffsetFromContainer;
  
  const containerHeight = parentContainer.clientHeight;
  const elementHeight = element.offsetHeight;
  
  return elementAbsolutePosition - (containerHeight / 2) + (elementHeight / 2);
};

