/**
 * useScrollToTop - Custom hook for scrolling to top on mount
 * 
 * Scrolls to the top of the page when component mounts.
 * Useful for page transitions and navigation.
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.behavior - Scroll behavior: 'instant' | 'smooth' (default: 'instant')
 * @param {boolean} options.enabled - Whether to enable scroll to top (default: true)
 */

import { useEffect } from 'react';

export const useScrollToTop = ({ behavior = 'instant', enabled = true } = {}) => {
  useEffect(() => {
    if (!enabled) return;
    
    window.scrollTo({ top: 0, behavior });
  }, [behavior, enabled]);
};

