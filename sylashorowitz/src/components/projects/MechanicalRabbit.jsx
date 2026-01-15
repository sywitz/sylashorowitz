/**
 * MechanicalRabbit - Project page for Mechanical Rabbit
 */

import React from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { projectData } from '../../data/projectData';
import { ProjectHeader, ProjectNavigation } from './components';
import './styles/MechanicalRabbit.css';

// Import images
import overviewImage from '../../assets/engineering-data/mechanical-rabbit/20200801_165003_edited.jpg';
import section1Image from '../../assets/engineering-data/mechanical-rabbit/motion_study1.png';
import section2Video from '../../assets/engineering-data/mechanical-rabbit/184 - linkage_vid.mp4';
import section3Video from '../../assets/engineering-data/mechanical-rabbit/185 - 20200820_125819~2.mp4';
import section4Image from '../../assets/engineering-data/mechanical-rabbit/20210728_152900.jpg';

function MechanicalRabbit() {
  const project = projectData['mechanical-rabbit'];
  useScrollToTop();

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-template mechanical-rabbit">
      <ProjectHeader project={project} />
      
      {/* Project Overview */}
      <div className="project-overview mechanical-rabbit-overview">
        <h2>Project Overview</h2>
        <div className="mechanical-rabbit-overview-content">
          <div className="mechanical-rabbit-overview-text">
            <p>While quarantining in summer 2020, I wanted to build something, but did not have access to a shop or much equipment. I decided to start my own project incorporating mechatronics and art. I was inspired by wind-up toys, and the unique ways in which they can move. I decided to design and build a small, motorized rabbit using kinematic synthesis tools to design a linkage system that mimics the motion of a rabbits hop! I started with this sketch of each main position of a rabbit throughout its stride.</p>
          </div>
          <div className="mechanical-rabbit-overview-image">
            <img src={overviewImage} alt="Rabbit stride positions sketch" />
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

      {/* Section 1: Analyzing the Coupling Curve */}
      <div className="mechanical-rabbit-section mechanical-rabbit-section-1">
        <h2>Analyzing the Coupling Curve</h2>
        <div className="mechanical-rabbit-section-1-content">
          <div className="mechanical-rabbit-section-1-text">
            <p>Pictured is an analysis I did on the coupling curve (path of the linkage, or foot in this case) using a clip of a rabbit hopping. I imported the clip as separate frames into GIMP and traced the foot path and position with the spline tool.</p>
          </div>
          <div className="mechanical-rabbit-section-1-image">
            <img src={section1Image} alt="Coupling curve analysis" />
          </div>
        </div>
      </div>

      {/* Section 2: Kinematic Synthesis */}
      <div className="mechanical-rabbit-section mechanical-rabbit-section-2">
        <h2>Kinematic Synthesis</h2>
        <div className="mechanical-rabbit-section-2-content">
          <div className="mechanical-rabbit-section-2-text">
            <p>I based my four-bar linkage on Chebyshev's Lambda Mechanism, which is moves in a straight line at a constant velocity for half the time, and then accelerates. I modified this mechanism in a CAD software called Linkage. By lengthening the third and fourth bar, I was able to create a linkage that followed a triangular coupling curve, more similar to a rabbit's hop. I utilized the acceleration for when the rabbit launches itself off the ground. If this force is not enough, I may consider adding a spring for extra thrust in the hop.</p>
          </div>
          <div className="mechanical-rabbit-section-2-video">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="mechanical-rabbit-video"
            >
              <source src={section2Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Section 3: Prototyping */}
      <div className="mechanical-rabbit-section mechanical-rabbit-section-3">
        <h2>Prototyping</h2>
        <div className="mechanical-rabbit-section-3-content">
          <div className="mechanical-rabbit-section-3-text">
            <p>Using cardboard and dowel rods, I modeled my four-bar mechanism, which you can see to the right. I found that extra friction at the feet will be essential to making sure the rabbit gains traction in its hop. Balance is also key; I plan on gearing up a toy motor to see how the location of the center of mass affects how this prototype works.</p>
          </div>
          <div className="mechanical-rabbit-section-3-video">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="mechanical-rabbit-video"
            >
              <source src={section3Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Section 4: Wood Fabrication */}
      <div className="mechanical-rabbit-section mechanical-rabbit-section-4">
        <h2>Wood Fabrication</h2>
        <div className="mechanical-rabbit-section-4-content">
          <div className="mechanical-rabbit-section-4-image-wrapper">
            <img src={section4Image} alt="Wood fabrication" />
            <div className="mechanical-rabbit-overlay-text">
              <p>I began shaping the final model out of wood using a power tool rotary sander on bass wood. I put together a battery pack, small motor, and gearbox and am working on mounting the hardware! I have little plastic gears and pulleys to transfer power to the back leg axis. I may spring load the back legs if needed.</p>
            </div>
          </div>
        </div>
      </div>

      <ProjectNavigation />
    </div>
  );
}

export default MechanicalRabbit;
