/*
EngineeringPortfolio.js is a functional component that renders a modular grid of ProjectCard components.
It displays engineering projects in a beautiful, organized layout with images, titles, institutions, years, descriptions, and skills.
*/

import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/EngineeringPortfolio.css';

// Comprehensive projects data based on the portfolio image
const projects = [
  {
    id: 'pultrusion-machine',
    title: 'PULTRUSION MACHINE',
    institution: 'Technical University of Denmark',
    year: '2023',
    description: 'Designed and built a thermoplastic pultrusion machine for testing sustainable and recyclable materials for wind turbine blade spar caps. The machine features novel die design, advanced puller mechanisms, and innovative fiber commingling systems.',
    skills: ['Mechatronics', 'Machine Design', 'CAD/CAM', 'SolidWorks', 'DFM'],
    image: '/assets/images/project-thumbnails/pultrusion-machine.svg',
    link: '/projects/pultrusion-machine',
    featured: false
  },
  {
    id: 'arctic-rov',
    title: 'ARCTIC ROV',
    institution: 'MIT Research',
    year: '2020-2022',
    description: 'Developed a motorized tether management system for an underwater Remotely Operated Vehicle (ROV) designed for Arctic deployment to map greenhouse gas emissions from permafrost. The system enables precise positioning and data collection in extreme conditions.',
    skills: ['SolidWorks', 'Arduino', 'Mechatronics', 'Systems Integration', 'Research'],
    image: '/assets/images/project-thumbnails/arctic-rov.svg',
    link: '/projects/arctic-rov',
    featured: true
  },
  {
    id: 'guatemala-cookstove',
    title: 'Guatemala Cookstove',
    institution: 'Thesis',
    year: '2021-2022',
    description: 'Co-designed, prototyped, and tested a concrete "plancha" style cookstove with the community in Santa Catarina, Guatemala. The project focused on sustainable cooking solutions and community engagement through user-centered design.',
    skills: ['User-Centered Design', 'Co-Creation', 'International Development', 'Prototyping', 'Concrete', 'Burn Testing'],
    image: '/assets/images/project-thumbnails/guatemala-cookstove.svg',
    link: '/projects/guatemala-cookstove',
    featured: false
  },
  {
    id: 're-vise',
    title: 'RE-VISE',
    institution: 'Capstone',
    year: '2021',
    description: 'Created an integrated vise product using granular jamming technology to tightly grasp irregularly-shaped objects (like foundry models) without damage. Developed as part of a Product Design capstone with a team of 20 students.',
    skills: ['P&ID', 'Product Design Process', 'CAD', 'Prototyping'],
    image: '/assets/images/project-thumbnails/re-vise.svg',
    link: '/projects/re-vise',
    featured: false
  },
  {
    id: 'yo-yo-manufacturing',
    title: 'YO-YO MANUFACTURING',
    institution: 'Class Project',
    year: '2021',
    description: 'Designed and manufactured 50 Teenage Mutant Ninja Turtle-themed yo-yos for a Design & Manufacturing II class. Worked with a team of 7 students to create a complete manufacturing process from design to production.',
    skills: ['CAD/CAM', 'DFM', 'Autodesk Fusion 360', 'CNC Milling', 'Injection Molding', 'Thermoforming'],
    image: '/assets/images/project-thumbnails/yo-yo-manufacturing.svg',
    link: '/projects/yo-yo-manufacturing',
    featured: false
  }
];

function EngineeringPortfolio() {
  return (
    <div id="engineering" className="engineering-portfolio">
      <div className="portfolio-header">
        <h1>Engineering Portfolio</h1>
        <p>Innovative engineering solutions across mechatronics, sustainable design, and manufacturing</p>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default EngineeringPortfolio;