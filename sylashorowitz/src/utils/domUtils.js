/**
 * DOM utility functions
 * Reusable functions for DOM manipulation and CSS variable access
 */

/**
 * Get a CSS variable value as a number (in pixels)
 * @param {string} varName - CSS variable name (e.g., '--header-height')
 * @param {number} fallback - Fallback value if variable is not found
 * @returns {number} Numeric value in pixels
 */
export const getCSSVariable = (varName, fallback = 0) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  
  if (!value) return fallback;
  
  // Remove 'px' suffix and parse
  const numericValue = parseInt(value.replace('px', ''), 10);
  return isNaN(numericValue) ? fallback : numericValue;
};

/**
 * Calculate visibility ratio of an element within viewport
 * 
 * Returns a value between 0 and 1 representing how much of the element
 * is currently visible. For example:
 * - 1.0 = fully visible
 * - 0.5 = half visible
 * - 0.0 = not visible
 * 
 * @param {DOMRect} rect - Element's bounding rectangle (from getBoundingClientRect)
 * @param {number} viewportHeight - Viewport height
 * @returns {number} Visibility ratio (0-1)
 */
export const calculateVisibilityRatio = (rect, viewportHeight) => {
  // Calculate the visible portion of the element
  // visibleTop: how much is cut off at the top (0 if none)
  const visibleTop = Math.max(0, -rect.top);
  // visibleBottom: how much is visible before viewport ends
  const visibleBottom = Math.min(rect.height, viewportHeight - rect.top);
  // visibleHeight: total visible height
  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
  
  // Return ratio: visible / total
  return rect.height > 0 ? visibleHeight / rect.height : 0;
};

/**
 * Check if element is at least partially visible in viewport
 * @param {DOMRect} rect - Element's bounding rectangle
 * @param {number} viewportHeight - Viewport height
 * @returns {boolean}
 */
export const isElementVisible = (rect, viewportHeight) => {
  return rect.bottom > 0 && rect.top < viewportHeight;
};

