// Simple project data - just add new projects here!
export const projectData = {
  'pultrusion-machine': {
    id: 'pultrusion-machine',
    title: 'PULTRUSION MACHINE',
    subtitle: 'Technical University of Denmark, 2023',
    featured: false,
    heroImage: null,
    description: `Waste from decommissioned wind turbine blades is a major issue, especially in Denmark, where wind energy composes almost 50% of the energy mix. I spent five months at the Technical University of Denmark (DTU) Wind and Energy Systems lab with Professor Ali Sarhadi's additive manufacturing group investigating how robotic-arm 3D printing of fiber reinforced polymer (FRP) composites can repair existing blades and unlock new geometries that traditional resin cast molds cannot. I conducted a literature review on biomimetic blade designs that additive manufacturing could enable. This page focuses on how I approached the structural heart of the blade—the spar cap—and explored how we might design a more circular turbine blade.`,
    achievements: [],
    skills: ['SolidWorks', 'COMSOL', '3D Printing', 'Mechanical Design', 'Manufacturing', 'Research', 'Prototyping', 'CAD'],
    sections: [
      {
        title: 'The Problem',
        content: `Wind turbine blades, typically composed of resin, are very difficult to recycle. At the DTU FiberLab, they shred resin-based blades and consider using the material for future reinforcement in blades or building materials. However, the quality is often jeopardized and the blade is effectively downcycled. WindEurope estimates that 14,000 blades may be decommissioned annually in the next few years.`,
        image: null
      },
      {
        title: 'Machine Design: Modular Pultrusion Test Bed',
        content: `Pultrusion repeatedly pulls fibers through a heated die to form constant cross‑section FRP components. I focused on thermoplastic pultrusion, a newer variant that replaces thermoset resin with recyclable thermoplastics. First, the fiber and polymer are commingled together using a novel air-jet method I prototyped. The modular machine includes an optional resin bath shelf before the die, a pre-heater that tapers into a heated die and cooling die, water cooling beneath the die, an adjustable distance to the puller for air cooling, a geared DC motor-driven puller with a spring-loaded lead screw for precise clamping, and a secondary stepper-driven spool for the finished pultrusion. Each subsystem was designed for rapid iteration and instrumentation so we could measure forces, temperatures, and material properties.`,
        image: null
      },
      {
        title: 'Subsystem: Commingler',
        content: 'The commingler consists of three 3D-printed components—a dual guide, a single eyelet, and a chamber fed by three compressed air inlets. The modular parts let me quickly adjust length, diameter, and flow parameters to optimize mixing of fiber and polymer.',
        image: null
      },
      {
        title: 'Subsystem: Die',
        content: 'The die assembly included a pre-heater, a 300°C heated die with six bore holes for heat cartridges, and a cooling die with 100°C cooling pads. Using COMSOL I optimized taper angles, length, and the placement of heating and cooling elements to achieve uniform consolidation.',
        image: null
      },
      {
        title: 'Subsystem: Puller',
        content: 'Custom polyurethane-coated spools ride on bearings inside aluminum housings. A spring-loaded lead screw tunes the compression force so the pultrusion is held firmly without damage. A geared DC motor drives the puller through a belt, while a smaller stepper motor spools the final product.',
        image: null
      }
    ],
    results: null
  },
  'arctic-rov': {
    id: 'arctic-rov',
    title: 'ARCTIC ROV',
    subtitle: 'MIT Research, 2020-2022',
    featured: true,
    heroImage: null,
    description: `I designed a motorized tether management system (TMS) for an underwater ROV that will be deployed in the Arctic to map greenhouse gas emissions from permafrost. The project was supported by the MIT Department of Mechanical Engineering and Woods Hole Oceanographic Institution (WHOI). I was selected to present the work at the OCEANS 2022 MTS/IEEE-OES Student Poster Competition and co-authored the resulting publication (<a href="https://ieeexplore.ieee.org/document/9977310" target="_blank" rel="noopener noreferrer">read the paper</a>).`,
    achievements: [
      'Presented at the OCEANS 2022 MTS/IEEE-OES Student Poster Competition',
      'Published peer-reviewed paper on the tether management system',
      'Designed, fabricated, and tested a complete motorized TMS with integrated water sampling'
    ],
    skills: [
      'SolidWorks',
      'Arduino',
      'Mechatronics',
      'Systems integration',
      'Research',
      'CAD',
      'Prototyping',
      'Field testing'
    ],
    sections: [
      {
        title: 'Project Overview',
        content: `In January 2020, I built a BlueROV2 underwater drone that will work alongside an aerial drone to take simultaneous air and water samples in Arctic waters. The combined system helps researchers track methane and carbon dioxide flux as permafrost melts. Being able to send the ROV beneath the ice sheet removes the need for icebreaking and allows much finer spatial coverage.`,
        image: null
      },
      {
        title: 'The Challenge',
        content: `The ROV relies on a 150 m tether for power, communications, and the water sampling tube. Manually managing that much tether introduces snagging risk and slows deployment. My task was to design a motorized tether management system (TMS) that could automatically spool the tether, deliver water samples topside, prevent tangles, survive 5°F ambient temperatures, and remain steady on the boat.`,
        image: null
      },
      {
        title: 'Concept Development',
        content: `Early sketches focused on coupling the tether and sampling tube, protecting electronics from saltwater corrosion, and keeping the TMS compact enough to travel. I envisioned a motor-driven drum with the sampling tube routed alongside the tether so both fluids and data could move between vehicle and topside.`,
        image: null
      },
      {
        title: 'Motor Selection & Drive Train',
        content: `I calculated that a 1/2 hp DC motor geared 10:1 would meet the 1 m/s spooling requirement once drag and friction were accounted for. Mounting the motor beneath the spool saved space, so I selected a belt-drive transmission and sized the belt lengths using MATLAB with a fixed 12 in center distance.`,
        image: null
      },
      {
        title: 'Managing Water Sampling',
        content: `To keep the sampling tube from twisting inside the drum, I combined a slip ring for the electrical lines with a 90° fluid rotary union. The tubing passes through a hollow steel shaft that also carries the belt pulley, secured with collars and corrosion-resistant plastic bearings.`,
        image: null
      },
      {
        title: 'Guiding the Tether',
        content: `A detachable HDPE pulley arm hooks onto the spool handle and folds for transport. Adjustable in two degrees of freedom, it can extend roughly 30 inches upward and 11 inches outward to guide the tether smoothly over the boat rail while resisting corrosion.`,
        image: null
      },
      {
        title: 'Electronics & Control',
        content: `The motor draws up to 39 amps from a 12 V battery bank protected by a 40 A fuse. An optical isolator shields the Arduino Uno controller from voltage spikes, and an encoder tracks spool rotation. A SyRen 50 A regenerative motor driver regulates speed and direction, providing ample overhead for Arctic operations.`,
        image: null
      },
      {
        title: 'CAD & Fabrication',
        content: `I translated the concept into full CAD assemblies and fabricated the winch with off-the-shelf components shipped to my Airbnb during the pandemic. Without machine shop access, I iterated on mounting solutions, switching from acrylic to machined steel where higher strength was needed.`,
        image: null
      },
      {
        title: 'Testing',
        content: `Bench testing verified the Arduino control of the motor. Pull tests lifted 20 lb weights at roughly 27% motor capacity—comfortably within the 1 m/s requirement and leaving margin to overcome hydrodynamic drag.`,
        image: null
      },
      {
        title: 'Field Testing',
        content: `We conducted trials at Laurel Lake (Lee, MA) and Sippewissett Marsh (Falmouth, MA). Early tests surfaced issues such as sheared communication wires, water head losses, and pump clogging. Successive iterations added stronger pumps, intake filters, and better priming techniques. By the third deployment the system successfully gathered dissolved gas data, though a few blown propellers reminded us that field work always delivers new lessons.`,
        image: null
      }
    ],
    results: null
  }
};

export default projectData;
