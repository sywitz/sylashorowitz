/**
 * useScrollTracking - Tracks scroll position to determine active paper
 * 
 * Uses a scoring system to find the most "active" paper based on:
 * - How much of the paper is visible in viewport
 * - Distance from ideal position (just below header)
 * - Preference for papers above the target (already scrolled past)
 * 
 * Optimized with requestAnimationFrame throttling for performance
 */

import { useState, useEffect } from 'react';
import { findActiveElement } from '../utils/scrollScoring';
import { SCROLL_TRACKING_CONFIG } from '../config/scrollTrackingConfig';

/**
 * Custom hook for tracking scroll position and updating active index
 * @param {string} selector - CSS selector for elements to track
 * @returns {[number, (index: number) => void]} Active index and manual setter
 */
export const useScrollTracking = (selector) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Detect mobile device for performance optimization
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    const updateActiveIndex = () => {
      const newIndex = findActiveElement(selector, SCROLL_TRACKING_CONFIG);
      setActiveIndex((prevIndex) => {
        // Only update if changed to avoid unnecessary re-renders
        return newIndex !== prevIndex ? newIndex : prevIndex;
      });
    };

    // Initial update after DOM is ready
    const initialTimeout = setTimeout(updateActiveIndex, SCROLL_TRACKING_CONFIG.INIT_DELAY);

    // Throttled scroll handler using requestAnimationFrame with additional throttling on mobile
    let ticking = false;
    let lastUpdateTime = 0;
    const MOBILE_THROTTLE_MS = 100; // Throttle to max once per 100ms on mobile
    
    const handleScroll = () => {
      if (!ticking) {
        const now = Date.now();
        // On mobile, add additional throttling beyond requestAnimationFrame
        if (isMobile && (now - lastUpdateTime) < MOBILE_THROTTLE_MS) {
          return;
        }
        
        window.requestAnimationFrame(() => {
          updateActiveIndex();
          lastUpdateTime = Date.now();
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

