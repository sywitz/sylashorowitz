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
          <p>My engineering journey started with my love for drawing. There's something radically human about conceptualizing an idea and bringing it into reality. You can check out my artistic meanderings in my <a href="https://sylashorowitz.wixsite.com/sylashorowitz/art-and-design" target="_blank" rel="noopener noreferrer" className="bio-link">art portfolio!</a> Seeking out creativity and community led me to join my beloved high school robotics team. No matter how wonky our robots were, I felt so fulfilled collaborating and problem solving. I then had the privilege of nurturing this love when I was granted the opportunity to attend MIT.</p>
          
          <p>At MIT, I became involved in a community of students passionate about sustainability. I co-led the annual campus reuse program <a href="https://www.facebook.com/MIT.Trash2Treasure" target="_blank" rel="noopener noreferrer" className="bio-link">Trash2Treasure</a>. I later interned at the <a href="https://environmentalsolutions.mit.edu/rapid-response-group/" target="_blank" rel="noopener noreferrer" className="bio-link">MIT ESI Rapid Response Group</a>, in which I led a variety of projects interacting with political and community partners to address environmental issues such as organizing <a href="https://climate.mit.edu/videos/mit-esi-rapid-response-group-hosts-panel-congressional-staffers-key-climate-priorities" target="_blank" rel="noopener noreferrer" className="bio-link">this panel for congressional staffers</a>. I published articles on <a href="https://www.thetech.com/2020/07/02/esi-rrg-improving-recycling" target="_blank" rel="noopener noreferrer" className="bio-link">recycling practices at MIT</a>, <a href="https://www.thetech.com/2020/09/24/fall-career-fair-sustainability" target="_blank" rel="noopener noreferrer" className="bio-link">sustainability at career fairs</a>, and in the <a href="https://www.naiop.org/Research-and-Publications/Magazine/2021/Winter-2021-2022/Development-Ownership/The-Challenges-of-Building-for-Sustainability" target="_blank" rel="noopener noreferrer" className="bio-link">built environment!</a> I also helped to kick off the <a href="https://ssc.mit.edu/" target="_blank" rel="noopener noreferrer" className="bio-link">Student Sustainability Coalition (SSC)</a> in 2020, which influenced <a href="https://climate.mit.edu/posts/re-thinking-mits-climate-action-plan-2021" target="_blank" rel="noopener noreferrer" className="bio-link">MIT's 2021 Climate Action Plan</a>.</p>
          
          <p>Since, I have designed/built/tested a water-collection ROV (left), worked at an awesome solar development company, interned at the US Environmental Protection Agency researching nationwide and tribal environmental justice issues, taught about energy in South Africa, and designed machines for more sustainable wind turbine blade manufacturing at the Technical University of Denmark. You can check out my projects in my <Link to="/engineering" className="bio-link">portfolio!</Link></p>
        </div>
      </section>
    </div>
  );
}

export default Bio;
