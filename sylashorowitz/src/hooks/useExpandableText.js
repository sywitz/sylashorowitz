/**
 * useExpandableText - Hook for managing expandable/collapsible text
 * 
 * Handles state and logic for text that can be truncated and expanded.
 * Returns display text, truncation status, and toggle function.
 */

import { useState, useMemo } from 'react';
import { joinParagraphs, truncateText, TEXT_CONFIG } from '../utils/textUtils';

/**
 * Custom hook for expandable text functionality
 * @param {string[]} description - Array of text paragraphs
 * @param {number} truncateLimit - Character limit for truncation (optional)
 * @returns {Object} Object containing displayText, shouldTruncate, isExpanded, toggle function
 */
export const useExpandableText = (description, truncateLimit = TEXT_CONFIG.TRUNCATE_LIMIT) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Process text: join paragraphs and truncate if needed
  // Memoized to avoid recalculating on every render
  const { displayText, shouldTruncate } = useMemo(() => {
    const fullText = joinParagraphs(description);
    const needsTruncation = fullText.length > truncateLimit;
    const truncated = truncateText(fullText, truncateLimit);

    return {
      displayText: !isExpanded && needsTruncation ? truncated : fullText,
      shouldTruncate: needsTruncation
    };
  }, [description, isExpanded, truncateLimit]);

  const toggle = () => setIsExpanded(!isExpanded);

  return {
    displayText,
    shouldTruncate,
    isExpanded,
    toggle
  };
};

