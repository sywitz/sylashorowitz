/*

Bio.js is a functional component that returns a div with an id of "bio" and some text. 

This component will be used to display a short bio of the author on the website.

*/

import React from 'react';
import { Link } from 'react-router-dom';

function Bio() {
  return (
    <div id="bio">
      <section className="bio-main">
        <h2>A little about me and projects I've been working on...</h2>
        <div className="bio-content">
          <p>My engineering journey started with my love for drawing. There's something radically human about conceptualizing an idea and bringing it into reality. You can check out my artistic meanderings in my <Link to="/art" className="bio-link">art portfolio!</Link> Seeking out creativity and community led me to join my beloved high school robotics team. No matter how wonky our robots were, I felt so fulfilled collaborating and problem solving. I then had the privilege of nurturing this love when I was granted the opportunity to attend MIT.</p>
          
          <p>At MIT, I became involved in a community of students passionate about sustainability. I co-led the annual campus reuse program <span className="bio-link">Trash2Treasure</span>. I later interned at the <span className="bio-link">MIT ESI Rapid Response Group</span>, in which I led a variety of projects interacting with political and community partners to address environmental issues such as organizing <span className="bio-link">this panel for congressional staffers</span>. I published articles on <span className="bio-link">recycling practices at MIT</span>, <span className="bio-link">sustainability at career fairs</span>, and in the <span className="bio-link">built environment!</span> I also helped to kick off the <span className="bio-link">Student Sustainability Coalition (SSC)</span> in 2020, which influenced <span className="bio-link">MIT's 2021 Climate Action Plan</span>.</p>
          
          <p>Since, I have designed/built/tested a water-collection ROV (left), worked at an awesome solar development company, interned at the US Environmental Protection Agency researching nationwide and tribal environmental justice issues, taught about energy in South Africa, and designed machines for more sustainable wind turbine blade manufacturing at the Technical University of Denmark. You can check out my projects in my <Link to="/engineering" className="bio-link">portfolio!</Link></p>
        </div>
      </section>
    </div>
  );
}

export default Bio;
