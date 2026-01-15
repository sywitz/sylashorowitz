/**
 * useBodyClass - Custom hook for managing body element classes
 * 
 * Adds a class to the body element when component mounts and removes it on unmount.
 * Useful for page-specific styling (e.g., 'art-page', 'bio-page').
 * 
 * @param {string} className - Class name to add/remove from body
 */

import { useEffect } from 'react';

export const useBodyClass = (className) => {
  useEffect(() => {
    if (!className) return;
    
    document.body.classList.add(className);
    
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
};

