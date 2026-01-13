/**
 * Header - Navigation header component
 * 
 * Displays name on left, email and LinkedIn on right.
 * Navigation links for Bio, Engineering, Art, and Papers sections below.
 * Highlights the active link based on current route.
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import faviconImage from '../assets/images/favicon/Profile_pic.png';
import landscapeTestImage from '../assets/images/backgrounds/landscape_test.png';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Check if a path is active (handles /bio and / as equivalent)
  const isActive = (path) => {
    const currentPath = location.pathname;
    // Both /bio and / should match the bio link
    if (path === '/bio') {
      return currentPath === '/bio' || currentPath === '/';
    }
    return currentPath === path;
  };

  const toggleMenu = () => {
    // Use functional update to avoid stale closure issues
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div 
        className="header-skyline"
        style={{ backgroundImage: `url(${landscapeTestImage})` }}
      >
      </div>
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
            <li>
              <Link 
                to="/bio" 
                className={isActive('/bio') ? 'active' : ''}
              >
                Biography
              </Link>
            </li>
            <li>
              <Link 
                to="/engineering" 
                className={isActive('/engineering') ? 'active' : ''}
              >
                Engineering Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/art" 
                className={isActive('/art') ? 'active' : ''}
              >
                Art Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/papers" 
                className={isActive('/papers') ? 'active' : ''}
              >
                Writing
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <a href="mailto:sylashorowitz@gmail.com" className="header-email">
            <span className="header-email-text">sylashorowitz@gmail.com</span>
            <FaEnvelope className="header-email-icon" size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/sylas-horowitz-3750a5173/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-linkedin"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <FaLinkedin size={24} color="#000000" />
          </a>
          <button 
            className="header-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      <nav className={`header-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link 
              to="/bio" 
              className={isActive('/bio') ? 'active' : ''}
              onClick={closeMenu}
            >
              Biography
            </Link>
          </li>
          <li>
            <Link 
              to="/engineering" 
              className={isActive('/engineering') ? 'active' : ''}
              onClick={closeMenu}
            >
              Engineering Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to="/art" 
              className={isActive('/art') ? 'active' : ''}
              onClick={closeMenu}
            >
              Art Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to="/papers" 
              className={isActive('/papers') ? 'active' : ''}
              onClick={closeMenu}
            >
              Writing
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
