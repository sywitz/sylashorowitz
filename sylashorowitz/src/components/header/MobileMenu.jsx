/**
 * MobileMenu - Mobile navigation menu component
 * 
 * Displays navigation links in a dropdown menu for mobile devices.
 * Only renders when isMenuOpen is true.
 */

import React from 'react';
import NavLinks from './NavLinks';

function MobileMenu({ isMenuOpen, isActive, onClose }) {
  if (!isMenuOpen) {
    return null;
  }

  return (
    <nav className="header-mobile-menu open">
      <ul>
        <NavLinks 
          isActive={isActive}
          onLinkClick={onClose}
        />
      </ul>
    </nav>
  );
}

export default MobileMenu;

