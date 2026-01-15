/**
 * SocialLinks - Social media and contact links component
 * 
 * Displays email and LinkedIn links in the header.
 */

import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function SocialLinks() {
  return (
    <>
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
    </>
  );
}

export default SocialLinks;

