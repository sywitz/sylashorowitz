/**
 * Header - Navigation header component
 * 
 * Displays name on left, email and LinkedIn on right.
 * Navigation links for Bio, Engineering, Art, and Papers sections below.
 * Highlights the active link based on current route.
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

function Header() {
  const location = useLocation();
  
  // Check if a path is active (handles /bio and / as equivalent)
  const isActive = (path) => {
    const currentPath = location.pathname;
    // Both /bio and / should match the bio link
    if (path === '/bio') {
      return currentPath === '/bio' || currentPath === '/';
    }
    return currentPath === path;
  };

  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <Link to="/" className="header-name">
            Sylas Horowitz
          </Link>
          <nav>
            <ul>
              <li>
                <Link 
                  to="/bio" 
                  className={isActive('/bio') ? 'active' : ''}
                >
                  Bio
                </Link>
              </li>
              <li>
                <Link 
                  to="/engineering" 
                  className={isActive('/engineering') ? 'active' : ''}
                >
                  Engineering
                </Link>
              </li>
              <li>
                <Link 
                  to="/art" 
                  className={isActive('/art') ? 'active' : ''}
                >
                  Art
                </Link>
              </li>
              <li>
                <Link 
                  to="/papers" 
                  className={isActive('/papers') ? 'active' : ''}
                >
                  Papers
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <a href="mailto:sylashorowitz@gmail.com" className="header-email">
            sylashorowitz@gmail.com
          </a>
          <a 
            href="https://www.linkedin.com/in/sylas-horowitz-3750a5173/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-linkedin"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <FaLinkedin size={24} color="#237a5a" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
