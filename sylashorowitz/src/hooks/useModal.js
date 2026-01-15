/**
 * useModal - Custom hook for managing modal state and interactions
 * 
 * Handles opening/closing modals, keyboard events (Escape key),
 * backdrop clicks, and body scroll locking.
 * 
 * @returns {Object} Object containing isOpen, open, close, and modal props
 */

import { useState, useEffect, useCallback } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const open = useCallback((item) => {
    setSelectedItem(item);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  }, []);

  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  }, [close]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, close]);

  return {
    isOpen,
    selectedItem,
    open,
    close,
    handleBackdropClick
  };
};

