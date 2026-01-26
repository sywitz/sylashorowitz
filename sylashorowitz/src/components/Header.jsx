/**
 * Header - Navigation header component
 * 
 * Displays name on left, email and LinkedIn on right.
 * Navigation links for Bio, Engineering, Art, and Papers sections below.
 * Highlights the active link based on current route.
 * 
 * Composed of smaller sub-components for better encapsulation.
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { useActivePath } from '../hooks/useActivePath';
import NavLinks from './header/NavLinks';
import SocialLinks from './header/SocialLinks';
import HeaderSkyline from './header/HeaderSkyline';
import MobileMenu from './header/MobileMenu';
// Profile picture is now in public folder, accessed via public path
const faviconImage = '/Profile_pic.png';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = useActivePath(location.pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <HeaderSkyline />
      <div className="header-content">
        <div className="header-left">
          <Link to="/" className="header-name">
            <img 
              src={faviconImage} 
              alt="Home" 
              className="header-favicon"
            />
            Sylas Horowitz
          </Link>
        </div>
        <nav className="header-center">
          <ul>
            <NavLinks isActive={isActive} />
          </ul>
        </nav>
        <div className="header-right">
          <SocialLinks />
          <button 
            className="header-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX size={24} key="close" /> : <HiMenu size={24} key="menu" />}
          </button>
        </div>
      </div>
      <MobileMenu 
        isMenuOpen={isMenuOpen}
        isActive={isActive}
        onClose={closeMenu}
      />
    </header>
  );
}

export default Header;
