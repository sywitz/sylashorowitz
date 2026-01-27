/**
 * Engineering Portfolio Projects Data
 * Simple array format for displaying projects in the grid view
 */

import pultrusionThumbnail from '../assets/engineering-data/pultrusion-machine/Screenshot 2023-11-27 220417_edited.jpg';
import arcticRovThumbnail from '../assets/engineering-data/arctic-rov/Untitled Project 3.jpg';
import guatemalaCookstoveThumbnail from '../assets/engineering-data/guatemala-cookstove/IMG_1117 (1)_edited.jpg';
import reViseThumbnail from '../assets/engineering-data/re-vise/final_photo_white_edited_edited cropped.jpg';
import yoYoThumbnail from '../assets/engineering-data/yo-yo-manufacturing/received_586638632542024_edited_edited_edited_edited_edited_edited_edited_edited.jpg';
import marinaSolarThumbnail from '../assets/engineering-data/marina-solar-panel/docks.PNG';
import renaissanceCastleThumbnail from '../assets/engineering-data/renaissance-castle/20210903_152228_edited_edited_edited_edited.jpg';
import mechanicalRabbitThumbnail from '../assets/engineering-data/mechanical-rabbit/motion_study1.png';
import two007RobotThumbnail from '../assets/engineering-data/2007-robot/Picture1.png';
import solarPanelDeploymentThumbnail from '../assets/engineering-data/solar-panel-deployment/Picture1_cropped.jpg';
import liberiaWasteBinsThumbnail from '../assets/engineering-data/liberia-recycled-waste-bins/steel_frame_bin_render_edited.jpg';
import vehicleToGridThumbnail from '../assets/engineering-data/vehicle-to-grid/20210723_161913_edited.jpg';
import highwaySolarThumbnail from '../assets/engineering-data/highway-solar-canopy/Solar Highway 4_edited.jpg';
import acousticLevitationThumbnail from '../assets/engineering-data/holosonic/F70JMFTKQSKAC41.jpg';
import acousticLevitationOverview from '../assets/engineering-data/holosonic/20240906_144027.jpg';
import tidalPumpThumbnail from '../assets/engineering-data/tidal-pump/Concept Rendering (6).png';
import tidalPumpOverview from '../assets/engineering-data/tidal-pump/Concept Rendering (4).png';
import fabricationThumbnail from '../assets/engineering-data/fabrication/IMG_20251224_202427_587.jpg';
import littoralPowerSystemsThumbnail from '../assets/engineering-data/lps/PXL_20240201_212729411.jpg';

export const engineeringProjects = [
  {
    id: 'acoustic-levitation-robot',
    title: 'ACOUSTIC LEVITATION ROBOT',
    institution: 'Personal project',
    year: '2025',
    description: 'Designing a 3D acoustic levitation system for additive manufacturing and microelectronics assembly. Built a 512-transducer testing platform and developed Python simulations using iterative angular spectrum methods to control acoustic pressure fields.',
    skills: ['Python', 'FPGA', 'CUDA', 'Acoustic Field Simulation', 'Iterative Angular Spectrum Method', 'PCB Design', 'Quartus II', 'Laser Cutting', 'Reflow Soldering', 'Acoustophoresis'],
    image: acousticLevitationThumbnail,
    secondaryImage: acousticLevitationOverview,
    link: '/projects/acoustic-levitation-robot',
    featured: false
  },
  {
    id: 'tidal-pump',
    title: 'TIDAL ENERGY PUMP',
    institution: 'MIT Climate and Energy Prize',
    year: '2024',
    description: 'Designed and prototyped a gravitational tidal pump system for beachside irrigation and saltwater greenhouses. Developed parameterized Python models for system optimization, built a functional scale model prototype, and created comprehensive SolidWorks renderings with LCOE analysis.',
    skills: ['Python', 'SolidWorks', 'Rendering', 'Mechanical Design', 'Hydraulic Systems', 'Prototyping', 'CAD', 'Parameterized Modeling', 'LCOE Analysis', 'Tidal Energy', 'Renewable Energy', 'System Design', 'Fluid Mechanics'],
    image: tidalPumpThumbnail,
    link: '/projects/tidal-pump',
    featured: false
  },
  {
    id: 'fabrication',
    title: 'FABRICATION: WOODWORKING, WELDING, AND MORE',
    institution: 'Personal projects',
    year: '2023-2025',
    description: 'I designed and built my own desk completely from old scrapwood and pipes, TIG welded and riveted giant bug sculptures to set on fire, made Sokka\'s boomerang from Avatar the Last Airbender, and more!',
    skills: ['Woodworking', 'TIG Welding', 'Riveting', 'Biscuit Joining', 'Furniture Design', 'Metalworking', 'Sewing', 'Fabrication', 'Hand Tools', 'Power Tools', 'Staining', 'Finishing'],
    image: fabricationThumbnail,
    link: '/projects/fabrication',
    featured: false
  },
  {
    id: 'littoral-power-systems',
    title: 'LITTORAL POWER SYSTEMS',
    institution: 'Mechanical Engineer / Project Manager',
    year: '2023-2024',
    description: 'Managed a $4M+ DOE-funded marine renewable energy R&D partnering with GE Vernova and NREL. Led systems integration for wave energy converter testing and performed design, structural, and dynamic analysis for hydrokinetic turbines. Supported project engineering and plant control design for hydropower retrofits.',
    skills: ['Project Management', 'Systems Integration', 'Mechanical Engineering', 'Python', 'MATLAB', 'Simulink', 'CAD', 'FEA', 'Structural Analysis', 'Marine Engineering', 'Risk Management', 'FMEA', 'DAQ', 'Controls Engineering', 'Technical Writing'],
    image: littoralPowerSystemsThumbnail,
    link: '/projects/littoral-power-systems',
    featured: false
  },
  {
    id: 'pultrusion-machine',
    title: 'PULTRUSION MACHINE',
    institution: 'Technical University of Denmark',
    year: '2023',
    description: 'Thermoplastic pultrusion machine for testing the manufacturing of more sustainable and recyclable materials for wind turbine blade spar caps. Designed novel die, puller, and thermoplastic fiber commingling mechanisms.',
    skills: ['SolidWorks', 'COMSOL', '3D Printing', 'Mechanical Design', 'Manufacturing', 'Research', 'Prototyping', 'CAD', 'Mechatronics', 'Machine Design', 'CAD/CAM', 'DFM', 'Thermal FEA', 'Fiber Composites', 'Additive Manufacturing', 'Material Science'],
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
    skills: ['SolidWorks', 'Arduino', 'Mechatronics', 'Systems Integration', 'Research', 'CAD', 'Prototyping', 'Field Testing', 'Electronics', 'Motor Control', 'MATLAB', 'Belt Drive Design', 'Waterproofing', 'Marine Engineering', 'Scientific Instrumentation', 'Published Research'],
    image: arcticRovThumbnail,
    link: '/projects/arctic-rov',
    featured: false
  },
  {
    id: 'guatemala-cookstove',
    title: 'Guatemala Cookstove',
    institution: 'Thesis',
    year: '2021-2022',
    description: 'Co-designed, prototyped, and tested a concrete "plancha" style cookstove with the community in Santa Catarina, Guatemala.',
    skills: ['User-Centered Design', 'Co-Creation', 'International Development', 'Prototyping', 'Concrete', 'Burn Testing', 'Community Engagement', 'Thesis Research', 'Thermal Analysis', 'Sustainable Design'],
    image: guatemalaCookstoveThumbnail,
    link: '/projects/guatemala-cookstove',
    featured: false
  },
  {
    id: 're-vise',
    title: 'RE-VISE',
    institution: 'Capstone',
    year: '2021',
    description: 'Integrated vise product that uses granular jamming to tightly grasp irregularly-shaped objects without damaging them. Built with a team of 20 students in MIT\'s 2.009 Product Design course.',
    skills: ['Pneumatic Design', 'Granular Jamming', 'CAD', 'Sheet Metal Fabrication', 'User-Centered Design', 'Prototyping', 'Systems Integration', 'UI/UX Research', 'P&ID', 'Product Design Process', 'Team Leadership', 'Welding', 'Vacuum Systems', 'Material Selection'],
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
    skills: ['CAD/CAM', 'DFM', 'Autodesk Fusion 360', 'CNC Milling', 'Injection Molding', 'Thermoforming', 'Manufacturing Process', 'Production Planning', 'Quality Control', 'Team Collaboration'],
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
    skills: ['Structural Analysis', 'SolidWorks Simulation', 'Sheet Metal Design', 'Design for Manufacturing', 'Vendor Sourcing', 'Product Development', 'Load Simulations', 'FEA', 'Material Optimization', 'Cost Analysis', 'Corrugated Steel Design'],
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
    skills: ['Prototyping', 'Energy Systems', 'Product Design', 'Battery Systems', 'Inverter Design', 'Solar Integration', 'Vehicle Integration', 'Electrical Engineering'],
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
    skills: ['SolidWorks', 'Urban Planning', 'Public Policy', 'Infrastructure Design', 'Case Study Analysis', 'DOT Standards', 'Structural Engineering', 'Renewable Energy'],
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
    skills: ['Project Leadership', 'Autodesk Fusion 360', 'Structural Design', 'Construction Management', 'Team Coordination', 'Event Design', 'Carpentry', 'Team Collaboration', 'Permitting', 'Engineering Drawings', 'Safety Compliance', 'Volunteer Management'],
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
    skills: ['User-Centered Design', 'International Development', 'SolidWorks', 'Education', 'Community Partnerships', 'Design Documentation', 'Welding', 'Steel Frame Design', 'Wire Frame Design', 'Sustainability', 'Social Impact'],
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
    skills: ['Kinematic Synthesis', 'Linkage Design', 'Mechatronics', 'Rapid Prototyping', 'Hand Fabrication', 'Creative Exploration', 'CAD', 'Prototyping', 'Motion Analysis', 'Mechanism Design', 'Electronics Integration'],
    image: mechanicalRabbitThumbnail,
    link: '/projects/mechanical-rabbit',
    featured: false
  },
  {
    id: 'climbing-robot',
    title: 'CLIMBING ROBOT',
    institution: 'Class Project',
    year: '2020',
    description: 'Robot built for MIT\'s 2.007 robotics competition that splits into two parts to lift an object and pull itself up a structure.',
    skills: ['SolidWorks', 'Mechatronics', 'Mechanical Design', 'Metalworking', 'Robotics', 'Competition Design', 'Actuator Design', 'Control Systems'],
    image: two007RobotThumbnail,
    link: '/projects/climbing-robot',
    featured: false
  },
  {
    id: 'solar-panel-deployment-system',
    title: 'SOLAR PANEL DEPLOYMENT SYSTEM',
    institution: 'MIT Research',
    year: '2019',
    description: 'Flexible, lightweight solar panel system designed for mounting on the roofs of e-rickshaws for street vendors in Bihar, India.',
    skills: ['Product Design', 'Human-Centered Research', 'Energy Systems', 'Prototype Fabrication', 'Field Deployment Planning', 'Energy Analysis', 'Research', 'Hinge Mechanisms', 'Lightweight Design', 'Renewable Energy'],
    image: solarPanelDeploymentThumbnail,
    link: '/projects/solar-panel-deployment-system',
    featured: false
  }
];

