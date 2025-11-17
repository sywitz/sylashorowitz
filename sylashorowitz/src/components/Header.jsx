/* 

Header.js is a functional component that renders the header of the website. 
It contains a nav element with an unordered list of links to the different sections of the website. 
The links are anchor tags that point to the different sections of the website. 

The links are: Bio, Engineering Portfolio, Art Portfolio, and Papers.

*/

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/bio' || path === '/') {
      return location.pathname === '/bio' || location.pathname === '/';
    }
    return location.pathname === path;
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
