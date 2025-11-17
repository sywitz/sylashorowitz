/* 

Header.js is a functional component that renders the header of the website. 
It contains a nav element with an unordered list of links to the different sections of the website. 
The links are anchor tags that point to the different sections of the website. 

The links are: Bio, Engineering Portfolio, Art Portfolio, and Papers.

*/

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/engineering">Engineering</Link></li>
          <li><Link to="/art">Art</Link></li>
          <li><Link to="/papers">Papers</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
