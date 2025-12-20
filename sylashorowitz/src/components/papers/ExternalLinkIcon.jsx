/**
 * ExternalLinkIcon - SVG icon for external links
 * Reusable icon component
 */

import React from 'react';

const ExternalLinkIcon = ({ width = 14, height = 14, ...props }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17L17 7M17 7H7M17 7V17"/>
    </svg>
  );
};

export default ExternalLinkIcon;

