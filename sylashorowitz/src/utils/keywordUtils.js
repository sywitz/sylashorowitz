/**
 * Keyword utility functions
 * Reusable functions for keyword highlighting and text processing
 */

/**
 * Highlights keywords in text by wrapping them in HTML spans
 * @param {string} text - Text to highlight keywords in
 * @param {string[]} keywords - Array of keywords to highlight
 * @param {string} className - CSS class name for highlighted keywords (default: 'bio-keyword')
 * @returns {string} HTML string with highlighted keywords
 */
export const highlightKeywords = (text, keywords, className = 'bio-keyword') => {
  if (!text || !keywords || keywords.length === 0) return text;

  let highlightedText = text;
  
  // Create regex patterns for each keyword, escaping special regex characters
  keywords.forEach(keyword => {
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedKeyword})`, 'gi');
    highlightedText = highlightedText.replace(regex, `<span class="${className}">$1</span>`);
  });

  return highlightedText;
};

/**
 * Creates memoized keyword regex patterns for efficient highlighting
 * @param {string[]} keywords - Array of keywords
 * @returns {Array} Array of objects with keyword and regex pattern
 */
export const createKeywordPatterns = (keywords) => {
  return keywords.map(keyword => ({
    keyword,
    regex: new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  }));
};

