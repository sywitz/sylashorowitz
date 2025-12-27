export const arcticRov = {
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
};

export default arcticRov;

