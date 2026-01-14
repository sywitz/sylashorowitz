/**
 * EngineeringPortfolio - Displays a grid of engineering project cards
 * 
 * Renders projects from the engineeringProjects data file in a grid layout.
 * Each project is displayed as a ProjectCard component.
 */

import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { engineeringProjects } from '../data/engineeringProjects';
import '../styles/EngineeringPortfolio.css';

function EngineeringPortfolio() {
  const projectsGridRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Auto-scroll: slowly scroll past the title to the first row of cards
    // Only trigger if we're near the top of the page (initial page load)
    const currentScroll = window.scrollY || window.pageYOffset;
    if (currentScroll > 100) {
      // User has already scrolled, don't auto-scroll
      return;
    }

    const scrollToProjects = () => {
      if (!projectsGridRef.current || !headerRef.current) return;

      const headerBottom = headerRef.current.getBoundingClientRect().bottom + window.scrollY;
      
      // Calculate target position: just past header, showing first row of cards
      // Reduced scroll distance - only scroll about 60% of the header height
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      const targetScroll = headerBottom - (headerHeight * 1); // Show more of header, scroll less
      
      // Only scroll if we're not already at the right position
      const currentScrollPos = window.scrollY || window.pageYOffset;
      if (Math.abs(currentScrollPos - targetScroll) > 50) {
        // Smooth scroll using requestAnimationFrame for performance
        const startScroll = currentScrollPos;
        const distance = targetScroll - startScroll;
        const duration = 1000; // 1000ms for smooth, non-laggy scroll
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Ease-out function for smooth deceleration
          const easeOut = 1 - Math.pow(1 - progress, 3);
          
          window.scrollTo(0, startScroll + distance * easeOut);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      }
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(scrollToProjects, 200);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div id="engineering" className="engineering-portfolio">
      <div ref={headerRef} className="portfolio-header">
        <h1>Engineering Portfolio</h1>
      </div>
      
      <div ref={projectsGridRef} className="projects-grid">
        {engineeringProjects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default EngineeringPortfolio;