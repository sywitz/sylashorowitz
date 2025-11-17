/*
*
*Welcome.js is a separate component that displays the welcome section on the bio page.
*It should be positioned further down the page, separate from the main bio content.
*
*/

import React from 'react';

function Welcome() {
  return (
    <section className="welcome-section">
      <h1>Welcome!</h1>
      <div className="welcome-achievements">
        <p>I designed, built, and deployed an ROV that can be controlled under-ice and collects continuous geochemical data and water samples. I also built a cookstove in Guatemala, a pultrusion machine for sustainable wind turbine blade manufacturing, and the pneumatic design of a vise that can clamp onto anything!</p>
        <p>I now manage multi-million dollar cutting-edge R&D projects in marine renewable energy.</p>
      </div>
      <p className="welcome-cta">Please feel free to check out my portfolio above!</p>
    </section>
  );
}

export default Welcome;

