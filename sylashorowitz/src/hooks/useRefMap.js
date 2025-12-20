/**
 * useRefMap - Hook for managing a map of refs by index/key
 * 
 * Provides a pattern for storing multiple refs in a single ref object,
 * commonly used when rendering lists of components that need individual refs.
 * 
 * @returns {Object} Object containing refs object and createRef function
 */

import { useRef } from 'react';

/**
 * Custom hook for managing a map of refs
 * @returns {Object} Object with refs (ref object) and createRef (function to create ref callbacks)
 */
export const useRefMap = () => {
  const refs = useRef({});

  /**
   * Create a ref callback function for a specific key/index
   * 
   * Usage:
   *   const { refs, createRef } = useRefMap();
   *   <Component ref={createRef(0)} />  // Stores ref at refs.current[0]
   *   <Component ref={createRef(1)} />  // Stores ref at refs.current[1]
   * 
   * @param {string|number} key - Key/index to store the ref under
   * @returns {Function} Ref callback function
   */
  const createRef = (key) => (element) => {
    if (element) {
      refs.current[key] = element;
    } else {
      // Clean up when element is unmounted
      delete refs.current[key];
    }
  };

  return {
    refs,
    createRef
  };
};

