/**
 * HeaderSkyline - Skyline background image component
 * 
 * Displays the landscape skyline image at the top of the header.
 */

import React from 'react';
import landscapeTestImage from '../../assets/images/backgrounds/landscape_test.png';

function HeaderSkyline() {
  return (
    <div 
      className="header-skyline"
      style={{ backgroundImage: `url(${landscapeTestImage})` }}
    />
  );
}

export default HeaderSkyline;

