/**
 * Text utility functions
 * Reusable functions for text manipulation and formatting
 */

/**
 * Configuration for text truncation
 */
export const TEXT_CONFIG = {
  TRUNCATE_LIMIT: 280, // Character limit for truncation (~2-3 lines)
  ELLIPSIS: '...'
};

/**
 * Join array of strings into a single text
 * @param {string[]} paragraphs - Array of paragraph strings
 * @returns {string} Joined text
 */
export const joinParagraphs = (paragraphs) => {
  return Array.isArray(paragraphs) ? paragraphs.join(' ') : '';
};

/**
 * Truncate text to a specified character limit
 * @param {string} text - Text to truncate
 * @param {number} limit - Character limit
 * @param {string} ellipsis - Ellipsis string to append
 * @returns {string} Truncated text with ellipsis if needed
 */
export const truncateText = (text, limit = TEXT_CONFIG.TRUNCATE_LIMIT, ellipsis = TEXT_CONFIG.ELLIPSIS) => {
  if (!text || text.length <= limit) return text;
  return text.slice(0, limit) + ellipsis;
};

/**
 * Format paper number with zero padding
 * @param {number} index - Zero-based index
 * @returns {string} Formatted number (e.g., "01", "02")
 */
export const formatPaperNumber = (index) => {
  return String(index + 1).padStart(2, '0');
};

