/**
 * Footer - Footer component
 * 
 * Displays name and current year at the bottom of the page.
 */

import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer">
      <p>Sylas Horowitz © {currentYear}</p>
    </footer>
  );
}

export default Footer;

