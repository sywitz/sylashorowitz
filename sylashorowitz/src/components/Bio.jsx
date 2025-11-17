/*

Bio.js is a functional component that returns a div with an id of "bio" and some text. 

This component will be used to display a short bio of the author on the website.

*/

import React from 'react';

function Bio() {
  return (
    <div id="bio">
      <h1>Welcome!</h1>
      <p>I am a mechanical engineer and designer...</p>
      {/* Add more personal content here */}
    </div>
  );
}

export default Bio;
