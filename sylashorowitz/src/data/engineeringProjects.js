/**
 * Engineering Portfolio Projects Data
 * Simple array format for displaying projects in the grid view
 */

import pultrusionThumbnail from '../assets/engineering-data/pultrusion-machine/Screenshot 2023-11-27 220417_edited.jpg';
import arcticRovThumbnail from '../assets/engineering-data/arctic-rov/IMG_20210803_184515_edited_edited_edited.jpg';
import guatemalaCookstoveThumbnail from '../assets/engineering-data/guatemala-cookstove/Cookstove 8_edited.jpg';
import reViseThumbnail from '../assets/engineering-data/re-vise/final_photo_white_edited_edited cropped.jpg';
import yoYoThumbnail from '../assets/engineering-data/yo-yo-manufacturing/received_586638632542024_edited_edited_edited_edited_edited_edited_edited_edited.jpg';
import marinaSolarThumbnail from '../assets/engineering-data/marina-solar-panel/Solar Module-Static 500 cut 1-Image-3.jpg';
import renaissanceCastleThumbnail from '../assets/engineering-data/renaissance-castle/20210903_152228_edited_edited_edited_edited.jpg';
import mechanicalRabbitThumbnail from '../assets/engineering-data/mechanical-rabbit/20200801_165003_edited.jpg';
import two007RobotThumbnail from '../assets/engineering-data/2007-robot/Picture1.png';
import solarPanelDeploymentThumbnail from '../assets/engineering-data/solar-panel-deployment/Picture1_cropped.jpg';
import liberiaWasteBinsThumbnail from '../assets/engineering-data/liberia-recycled-waste-bins/steel_frame_bin_render_edited.jpg';
import vehicleToGridThumbnail from '../assets/engineering-data/vehicle-to-grid/20210723_161913_edited.jpg';
import highwaySolarThumbnail from '../assets/engineering-data/highway-solar-canopy/Solar Highway 4_edited.jpg';

export const engineeringProjects = [
  {
    id: 'pultrusion-machine',
    title: 'PULTRUSION MACHINE',
    institution: 'Technical University of Denmark',
    year: '2023',
    description: 'Thermoplastic pultrusion machine for testing the manufacturing of more sustainable and recyclable materials for wind turbine blade spar caps. Designed novel die, puller, and thermoplastic fiber commingling mechanisms.',
    skills: ['Mechatronics', 'Machine design', 'CAD/CAM', 'SolidWorks', 'DFM', 'COMSOL Thermal FEA', 'Prototyping'],
    image: pultrusionThumbnail,
    link: '/projects/pultrusion-machine',
    featured: false
  },
  {
    id: 'arctic-rov',
    title: 'ARCTIC ROV',
    institution: 'MIT Research',
    year: '2020-2022',
    description: 'Motorized tether management system for an underwater ROV that will be deployed in the Arctic to map greenhouse gas emissions from permafrost.',
    skills: ['SolidWorks', 'Arduino', 'Mechatronics', 'Systems integration', 'Research'],
    image: arcticRovThumbnail,
    link: '/projects/arctic-rov',
    featured: true
  },
  {
    id: 'guatemala-cookstove',
    title: 'Guatemala Cookstove',
    institution: 'Thesis',
    year: '2021-2022',
    description: 'Co-designed, prototyped, and tested a concrete "plancha" style cookstove with the community in Santa Catarina, Guatemala.',
    skills: ['User-centered design', 'Co-creation', 'International development', 'Prototyping', 'Concrete', 'Burn testing'],
    image: guatemalaCookstoveThumbnail,
    link: 'https://a2bae79c-b1be-42fc-a60c-1835db62a790.filesusr.com/ugd/1e4865_3621cba3ab754f02a4f699e63ee61ea4.pdf',
    featured: false
  },
  {
    id: 're-vise',
    title: 'RE-VISE',
    institution: 'Capstone',
    year: '2021',
    description: 'Integrated vise product that uses granular jamming to tightly grasp irregularly-shaped objects without damaging them. Built with a team of 20 students in MIT\'s 2.009 Product Design course.',
    skills: ['P&ID', 'Product design process', 'CAD', 'Prototyping'],
    image: reViseThumbnail,
    link: '/projects/re-vise',
    featured: false
  },
  {
    id: 'yo-yo-manufacturing',
    title: 'YO-YO MANUFACTURING',
    institution: 'Class Project',
    year: '2021',
    description: 'Produced 50 Teenage Mutant Ninja Turtle themed yo-yos for MIT Design & Manufacturing II (2.008) with a team of seven students, covering the full process from design to production.',
    skills: ['CAD/CAM', 'DFM', 'Autodesk Fusion 360', 'CNC milling', 'Injection molding', 'Thermoforming'],
    image: yoYoThumbnail,
    link: null,
    featured: false
  },
  {
    id: 'marina-solar-supports',
    title: 'MARINA SOLAR PANEL SUPPORTS',
    institution: 'E2SOL Internship',
    year: '2021',
    description: 'Optimized support structure design for the underside of floating marina solar panels so they can support loads with minimal bending.',
    skills: ['SolidWorks', 'Load simulations', 'Design for manufacturing'],
    image: marinaSolarThumbnail,
    link: '/projects/marina-solar-supports',
    featured: false
  },
  {
    id: 'vehicle-to-grid-cargo-box',
    title: 'VEHICLE TO GRID CARGO BOX',
    institution: 'E2SOL Internship',
    year: '2021',
    description: 'Solar cargo box with battery storage and inverter that can be placed on top of cars for vehicle-to-grid or on-the-go charging.',
    skills: ['Prototyping', 'Energy systems', 'Product design'],
    image: vehicleToGridThumbnail,
    link: null,
    featured: false
  },
  {
    id: 'highway-solar-canopy',
    title: 'HIGHWAY SOLAR CANOPY',
    institution: 'E2SOL Internship',
    year: '2021',
    description: 'Solar canopies designed for rapid mounting on standard highway median barriers, supported with case studies for Rhode Island and Massachusetts DOT.',
    skills: ['SolidWorks', 'Urban planning', 'Public policy'],
    image: highwaySolarThumbnail,
    link: null,
    featured: false
  },
  {
    id: 'renaissance-castle',
    title: 'RENAISSANCE CASTLE',
    institution: 'Student Group',
    year: '2020-2021',
    description: 'Led a team of fifteen students in the design, permitting, and construction of a two-story wooden castle.',
    skills: ['Autodesk Fusion 360', 'Structural design', 'Carpentry', 'Team collaboration'],
    image: renaissanceCastleThumbnail,
    link: '/projects/renaissance-castle',
    featured: false
  },
  {
    id: 'liberia-recycled-waste-bins',
    title: 'LIBERIA: RECYCLED WASTE BINS',
    institution: 'Class Project',
    year: '2021',
    description: 'Waste bins made from heat-fused plastic water sachets to create value from waste in underserved Liberian communities.',
    skills: ['User-centered design', 'International development', 'SolidWorks', 'Education'],
    image: liberiaWasteBinsThumbnail,
    link: '/projects/liberia-recycled-waste-bins',
    featured: false
  },
  {
    id: 'mechanical-rabbit',
    title: 'MECHANICAL RABBIT',
    institution: 'Independent Project',
    year: '2020',
    description: 'Self-started project mimicking the motion of a rabbit\'s hop using kinematic synthesis, blending mechanical design, electronics, and art.',
    skills: ['CAD', 'Kinematic synthesis', 'Prototyping'],
    image: mechanicalRabbitThumbnail,
    link: '/projects/mechanical-rabbit',
    featured: false
  },
  {
    id: 'two007-robot',
    title: '2.007 ROBOT',
    institution: 'Class Project',
    year: '2020',
    description: 'Robot built for MIT\'s 2.007 robotics competition that splits into two parts to lift an object and pull itself up a structure.',
    skills: ['SolidWorks', 'Mechatronics', 'Mechanical design', 'Metalworking'],
    image: two007RobotThumbnail,
    link: 'https://a2bae79c-b1be-42fc-a60c-1835db62a790.filesusr.com/ugd/e700f3_675d215538fe4f76b64f5eb868588c0e.pdf',
    featured: false
  },
  {
    id: 'solar-panel-deployment-system',
    title: 'SOLAR PANEL DEPLOYMENT SYSTEM',
    institution: 'MIT Research',
    year: '2019',
    description: 'Flexible, lightweight solar panel system designed for mounting on the roofs of e-rickshaws for street vendors in Bihar, India.',
    skills: ['Product design', 'Energy analysis', 'Research'],
    image: solarPanelDeploymentThumbnail,
    link: '/projects/solar-panel-deployment-system',
    featured: false
  }
];

