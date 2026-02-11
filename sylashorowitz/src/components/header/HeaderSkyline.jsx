/**
 * HeaderSkyline - Skyline background image component
 * 
 * Displays the landscape skyline image at the top of the header.
 */

import React from 'react';
import landscapeV1Image from '../../assets/images/backgrounds/landscape_v1.png';

function HeaderSkyline() {
  return (
    <div 
      className="header-skyline"
      style={{ backgroundImage: `url(${landscapeV1Image})` }}
    />
  );
}

export default HeaderSkyline;

