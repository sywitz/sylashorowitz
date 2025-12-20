/**
 * Welcome - Welcome section component
 * 
 * Displays welcome message and key achievements on the bio page.
 * Positioned at the top of the bio/home page.
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

