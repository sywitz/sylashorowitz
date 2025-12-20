/**
 * Scroll tracking configuration
 * Centralized configuration values for scroll tracking behavior
 */

export const SCROLL_TRACKING_CONFIG = {
  CSS_VARS: {
    HEADER_HEIGHT: '--header-height',
    SPACING: '--spacing-3xl'
  },
  FALLBACKS: {
    HEADER_HEIGHT: 80,
    SPACING: 30
  },
  INIT_DELAY: 150, // ms delay before initial calculation (wait for DOM)
  SCORING: {
    VISIBILITY_WEIGHT: 100,      // How much visibility matters
    DISTANCE_PENALTY: 0.1,       // Penalty per pixel from ideal position
    ABOVE_TARGET_BONUS: 10       // Bonus for papers above target (scrolled past)
  },
  SIDEBAR: {
    TOP_PAPERS_THRESHOLD: 2,     // First 3 papers (indices 0, 1, 2)
    SELECTOR: '.papers-sidebar'
  }
};

