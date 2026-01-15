/**
 * useAutoScroll - Custom hook for auto-scrolling to a target element
 * 
 * Handles smooth scrolling animation to a target position after component mounts.
 * Only triggers if the user hasn't already scrolled significantly.
 * 
 * @param {Object} options - Configuration options
 * @param {React.RefObject} options.targetRef - Ref to the element to scroll to
 * @param {React.RefObject} options.headerRef - Ref to the header element (optional, for calculating offset)
 * @param {number} options.scrollThreshold - Maximum scroll position to trigger auto-scroll (default: 100)
 * @param {number} options.delay - Delay before starting scroll in milliseconds (default: 200)
 * @param {number} options.duration - Duration of scroll animation in milliseconds (default: 1000)
 * @param {number} options.headerOffset - Multiplier for header height offset (default: 1)
 */

import { useEffect } from 'react';

export const useAutoScroll = ({
  targetRef,
  headerRef = null,
  scrollThreshold = 100,
  delay = 200,
  duration = 1000,
  headerOffset = 1
}) => {
  useEffect(() => {
    // Only trigger if we're near the top of the page (initial page load)
    const currentScroll = window.scrollY || window.pageYOffset;
    if (currentScroll > scrollThreshold) {
      // User has already scrolled, don't auto-scroll
      return;
    }

    const scrollToTarget = () => {
      if (!targetRef?.current) return;

      let targetScroll;

      if (headerRef?.current) {
        // Calculate target position relative to header
        const headerBottom = headerRef.current.getBoundingClientRect().bottom + window.scrollY;
        const headerHeight = headerRef.current.getBoundingClientRect().height;
        targetScroll = headerBottom - (headerHeight * headerOffset);
      } else {
        // Scroll to target element's top
        const targetTop = targetRef.current.getBoundingClientRect().top + window.scrollY;
        targetScroll = targetTop;
      }

      // Only scroll if we're not already at the right position
      const currentScrollPos = window.scrollY || window.pageYOffset;
      if (Math.abs(currentScrollPos - targetScroll) > 50) {
        // Smooth scroll using requestAnimationFrame for performance
        const startScroll = currentScrollPos;
        const distance = targetScroll - startScroll;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease-out function for smooth deceleration
          const easeOut = 1 - Math.pow(1 - progress, 3);

          window.scrollTo(0, startScroll + distance * easeOut);

          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(scrollToTarget, delay);

    return () => clearTimeout(timeoutId);
  }, [targetRef, headerRef, scrollThreshold, delay, duration, headerOffset]);
};

