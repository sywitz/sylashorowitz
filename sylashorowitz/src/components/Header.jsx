/**
 * Header - Navigation header component
 * 
 * Displays navigation links for Bio, Engineering, Art, and Papers sections.
 * Highlights the active link based on current route.
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    </header>
  );
}

export default Header;
