/**
 * NavLinks - Reusable navigation links component
 * 
 * Renders navigation links for both desktop and mobile views.
 * Can be used in header center nav or mobile menu.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../config/navigation';

function NavLinks({ isActive, onLinkClick, className = '', itemClassName = '' }) {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <li key={item.path} className={itemClassName}>
          <Link 
            to={item.path} 
            className={isActive(item.path) ? 'active' : ''}
            onClick={onLinkClick}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;

