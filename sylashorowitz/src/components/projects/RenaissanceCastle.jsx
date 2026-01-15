/**
 * RenaissanceCastle - Project page for Wooden Renaissance Castle
 */

import React from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { projectData } from '../../data/projectData';
import { ProjectHeader, ProjectNavigation } from './components';
import ImageCarousel from './components/ImageCarousel';
import './styles/RenaissanceCastle.css';

// Import images
import overviewImage from '../../assets/engineering-data/renaissance-castle/Cumulative Design 2_edited.jpg';
import section1Image from '../../assets/engineering-data/renaissance-castle/20200116_220130.jpg';
import section2Image1 from '../../assets/engineering-data/renaissance-castle/Annotation 2020-09-07 211417.png';
import section2Image2 from '../../assets/engineering-data/renaissance-castle/Cumulative Design 2_edited2.jpg';
import section3Image1 from '../../assets/engineering-data/renaissance-castle/Annotation 2020-09-07 211057.png';
import section3Image2 from '../../assets/engineering-data/renaissance-castle/Annotation 2020-09-07 211248.png';
import section3Image3 from '../../assets/engineering-data/renaissance-castle/Annotation 2020-09-07 211326.png';
import section4Image1 from '../../assets/engineering-data/renaissance-castle/20210824_172652.jpg';
import section4Image2 from '../../assets/engineering-data/renaissance-castle/20210824_172643.jpg';
import section4Image3 from '../../assets/engineering-data/renaissance-castle/20210824_172654.jpg';
import section4Image4 from '../../assets/engineering-data/renaissance-castle/20210825_185929.jpg';
import section4Image5 from '../../assets/engineering-data/renaissance-castle/20210828_180650.jpg';
import section4Image6 from '../../assets/engineering-data/renaissance-castle/20210903_152357.jpg';
import section4Image7 from '../../assets/engineering-data/renaissance-castle/20210903_152228_edited_edited_edited_edited.jpg';
import section4Image8 from '../../assets/engineering-data/renaissance-castle/20210831_222000.jpg';
import section4Video from '../../assets/engineering-data/renaissance-castle/76 - 20210831_224753.mp4';
import structuralAnalysisPdf from '../../assets/engineering-data/renaissance-castle/NBT2020 Integrity analysis.pdf';

function RenaissanceCastle() {
  const project = projectData['renaissance-castle'];
  useScrollToTop();

  if (!project) {
    return <div>Project not found</div>;
  }

  const section3Images = [section3Image1, section3Image2, section3Image3];
  const section4Images = [
    section4Image1,
    section4Image2,
    section4Image3,
    section4Image4,
    section4Image5,
    section4Image6,
    section4Image7,
    section4Image8
  ];

  return (
    <div className="project-template renaissance-castle">
      <ProjectHeader project={project} />
      
      {/* Project Overview */}
      <div className="project-overview renaissance-overview">
        <h2>Project Overview</h2>
        <div className="renaissance-overview-content">
          <div className="renaissance-overview-text">
            <p>I led a team of six students in the design and construction of a two-story wooden castle. The purpose of this student group is to create a large structure, ride, or attraction to entertain incoming freshmen. I re-established this student group for the first time in a few years, so we had all new members! We were able to get approved by our campus' Environmental Health and Safety Office (EHS), an engineering consultant at BMC Engineering, and the Town of Cambridge.</p>
          </div>
          <div className="renaissance-overview-image">
            <img src={overviewImage} alt="Renaissance Castle Design" />
          </div>
        </div>
        <div className="skills-used">
          <h3>Skills & Technologies:</h3>
          <div className="skills-list">
            {project.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Section 1 - No title */}
      <div className="renaissance-section renaissance-section-1">
        <div className="renaissance-section-1-content">
          <div className="renaissance-section-1-text">
            <p>I began by holding a brainstorming session with my team to decide what kind of "Big Thing" we would build. In previous years, there has been giant slides, giant see-saws, and ziplines. We thought of ideas from a 20 foot freefall to a tower-of-terror to a rock-climbing wall. The goal was to make the "Big Thing" as engaging and interactive as possible, while also being safe, easily operable, within budget, and easy for volunteers to build, since we typically rely on trained student builders. It should also be structured like an orientation event, where many students can enjoy it for a short period of time each. We finally settled on a renaissance themed castle, where we can hold multiple events like candle-making, corn hole, paint jousting, and a theatrical skit.</p>
            <p>We opted for the architecture of two hexagonal towers connected by a middle section. The inside could be used for crafts events, and people can climb up the towers and onto the top of the middle section for a "jousting with paint" game. The top bridge would also be used for skits. We also added a drawbridge in the center, which also serves to close off the structure at night according to safety standards. We sketched this out on a whiteboard.</p>
          </div>
          <div className="renaissance-section-1-image">
            <img src={section1Image} alt="Whiteboard sketch of castle design" />
          </div>
        </div>
      </div>

      {/* Section 2 - No title */}
      <div className="renaissance-section renaissance-section-2">
        <div className="renaissance-section-2-content">
          <div className="renaissance-section-2-images">
            <div className="renaissance-section-2-image-wrapper">
              <img src={section2Image1} alt="CAD design annotation" />
            </div>
            <div className="renaissance-section-2-image-wrapper">
              <img src={section2Image2} alt="Cumulative design" />
            </div>
          </div>
          <div className="renaissance-section-2-text">
            <p>I used Autodesk Fusion 360 to collaborate with my team on the CAD. I worked on the design of the towers. One challenge I faced was the floor blocking in a hexagonal shape. I designed the pattern shown such that the joists had a separation less than or equal to 1 foot, according to OSHA standards. When designing the strange geometry of the walls, I had to think about how it would be constructed quickly and simply, since construction would only be two weeks and done by students. The 15 foot walls are modular such that each can be built separately, lifted, and fastened. The two-by-fours act as posts extending 1 foot into the ground each. The ties across the ceiling reinforce the walls. This CAD was very iterative and required lots of collaboration, as I delegated the work on the middle section, guardrails, and drawbridge design to other members. You can see our structural analysis calculations by clicking on the button below.</p>
            <a 
              href={structuralAnalysisPdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="renaissance-pdf-button"
            >
              See Structural Integrity Analysis
            </a>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="renaissance-section renaissance-section-3">
        <div className="renaissance-section-3-content">
          <p>I produced the following dimensioned engineering drawings in Autodesk Fusion 360. These plans have been approved by MIT EHS and a structural engineer. Construction will happen sometime after COVID!</p>
          <ImageCarousel 
            images={section3Images} 
            autoFlip={true}
            autoFlipInterval={5000}
          />
        </div>
      </div>

      {/* Section 4 - The Build */}
      <div className="renaissance-section renaissance-section-4">
        <h2>The Build</h2>
        <div className="renaissance-section-4-content">
          <p>From construction, to the events, to teardown! I mentored around 15 volunteers using various power tools (saws and drills). As you can see, we didn't get to build the second tower on the left side. There we many logistical issues such as storms and errors in our lumber order - we had to make that sacrifice to finish in time. It was a great learning experience!</p>
          <ImageCarousel 
            images={section4Images} 
            autoFlip={true}
            autoFlipInterval={5000}
          />
          <div className="renaissance-section-4-video">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="renaissance-video"
            >
              <source src={section4Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <ProjectNavigation />
    </div>
  );
}

export default RenaissanceCastle;
