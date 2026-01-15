/**
 * NavLinks - Reusable navigation links component
 * 
 * Renders navigation links for both desktop and mobile views.
 * Can be used in header center nav or mobile menu.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { path: '/bio', label: 'Biography' },
  { path: '/engineering', label: 'Engineering Portfolio' },
  { path: '/art', label: 'Art Portfolio' },
  { path: '/papers', label: 'Writing' }
];

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

