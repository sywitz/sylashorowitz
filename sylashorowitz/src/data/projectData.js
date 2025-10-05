// Simple project data - just add new projects here!
export const projectData = {
  'pultrusion-machine': {
    id: 'pultrusion-machine',
    title: 'PULTRUSION MACHINE',
    subtitle: 'Technical University of Denmark, 2023',
    featured: false,
    heroImage: '/assets/images/projects/pultrusion-machine/hero.svg',
    description: 'Waste from decommissioned wind turbine blades is a major issue, especially in Denmark, where wind energy composes almost 50% of the energy mix. I spent 5 months at the Technical University of Denmark (DTU) Wind and Energy Systems lab, with Professor Ali Sarhadi\'s additive manufacturing lab investigating new ways of manufacturing blades through robotic arm 3D printing fiber reinforced polymer (FRP) composites.',
    achievements: [
      'Conducted literature review on Biomimetic blade designs for 3D printing',
      'Designed and built modular thermoplastic pultrusion test bed',
      'Developed novel commingling method for fiber and polymer combination',
      'Optimized die design using COMSOL simulation'
    ],
    skills: ['SolidWorks', 'COMSOL', '3D Printing', 'Mechanical Design', 'Manufacturing', 'Research', 'Prototyping', 'CAD'],
    sections: [
      {
        title: 'The Problem',
        content: 'Wind turbine blades, typically composed of resin, are very difficult to recycle. At the DTU FiberLab, they shred resin-based blades and consider using the material for future reinforcement in blades or building materials. However, the quality has been jeopardized and the blade is downcycled. 14,000 wind turbine blades may be decommissioned annually in the next few years.',
        image: '/assets/images/projects/pultrusion-machine/problem.svg'
      },
      {
        title: 'Machine Design: Modular Pultrusion Test Bed',
        content: 'Pultrusion is a repeatable manufacturing process for constant cross-section FRP components. It involves the pulling of the fibers through a hot die, which forms the FRP into shape. Thermoplastic pultrusion, which uses thermoplastics as the matrix polymer through which the fibers are pulled, is a relatively newer form of pultrusion, compared to thermoset pultrusion, which uses resin.',
        image: '/assets/images/projects/pultrusion-machine/machine-design.svg'
      }
    ],
    results: 'The Pultrusion Machine project successfully developed a modular thermoplastic pultrusion test bed for manufacturing sustainable wind turbine blade components.'
  },
  'arctic-rov': {
    id: 'arctic-rov',
    title: 'ARCTIC ROV',
    subtitle: 'MIT Research, 2020-2022',
    featured: true,
    heroImage: '/assets/images/projects/arctic-rov/hero.svg',
    description: 'I designed a motorized tether management system for an underwater ROV that will be deployed in the Arctic to map greenhouse gas (GHG) emissions from permafrost. This project was completed under the MIT Department of Mechanical Engineering and Woods Hole Oceanographic Institution (WHOI).',
    achievements: [
      'Selected to present at the OCEANS 2022 MTS/IEEE-OES Student Poster Competition',
      'Published research paper',
      'Designed and built complete tether management system'
    ],
    skills: ['SolidWorks', 'Arduino', 'Mechatronics', 'Systems Integration', 'Research', 'CAD', 'Prototyping', 'Field Testing'],
    sections: [
      {
        title: 'Project Overview',
        content: 'In January 2020, I built the BlueROV2 underwater drone. This drone will be used in conjunction with a flying drone to measure carbon dioxide and methane concentrations in the air and water in a specific area in the Arctic. The drones will be deployed from a boat in the Spring as the permafrost melts to help us understand the role the Arctic plays as a GHG source or sink throughout the year using predictive algorithms that are currently being developed to analyze the data.',
        image: '/assets/images/projects/arctic-rov/blue-rov.svg'
      },
      {
        title: 'The Challenge',
        content: 'Notice that yellow tether connected to the ROV? This 150 meter cable communicates with the computer. That\'s a large length of tether to reel out/in, and can risk snagging or entanglement! My next job was to design a tether management system (TMS), a kind of winch, for the drone.',
        image: '/assets/images/projects/arctic-rov/tether-challenge.svg'
      }
    ],
    results: 'The Arctic ROV project successfully developed a motorized tether management system capable of operating in extreme Arctic conditions.'
  }
};

export default projectData;
