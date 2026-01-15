/**
 * useActivePath - Custom hook for checking if a route path is active
 * 
 * Handles the logic for determining if a navigation link should be marked as active.
 * Special handling for /bio and / routes which should both match the bio link.
 * 
 * @param {string} pathname - Current pathname from useLocation
 * @returns {Function} Function that takes a path and returns boolean if active
 */

import { useMemo } from 'react';

export const useActivePath = (pathname) => {
  const isActive = useMemo(() => {
    return (path) => {
      // Both /bio and / should match the bio link
      if (path === '/bio') {
        return pathname === '/bio' || pathname === '/';
      }
      return pathname === path;
    };
  }, [pathname]);

  return isActive;
};

