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
  },
  're-vise': {
    id: 're-vise',
    title: 'RE-VISE',
    subtitle: 'Senior Capstone, MIT 2.009, 2021',
    featured: false,
    heroImage: null,
    description: `ReVise is an integrated vise that uses granular jamming bladders and a self-regulating pneumatic system to cradle irregular workpieces without marring their surfaces. As a member of the 20-person MIT 2.009 Pink team, I led the pneumatics architecture while contributing across CAD, fabrication, UX, and user testing.`,
    achievements: [
      'Led design of a self-regulating pneumatic system and granular jamming bladders for the vise',
      'Coordinated CAD for welded structure, bladder mounts, and modular assemblies across four design iterations',
      'Ran user research, UI/UX design, and testing with makers to define product requirements'
    ],
    skills: [
      'Pneumatic design',
      'Granular jamming',
      'CAD',
      'Sheet metal fabrication',
      'User-centered design',
      'Prototyping',
      'Systems integration',
      'UI/UX research'
    ],
    sections: [
      {
        title: 'Reimagining Workholding',
        content: `Our brief was to help artists and makers safely hold irregular workpieces. Partnering with the MIT forge and foundry, we studied how existing vises bruise delicate surfaces and require endless custom jigs. That research sharpened our goal: offer a single tool that molds to each part and releases without damage.`,
        image: null
      },
      {
        title: 'User-Centered Discovery',
        content: `Between shop visits, guided feedback sessions, and interviews with jewelers, blacksmiths, machinists, and makerspace staff, we mapped the functional specs ReVise needed: conformal gripping, quick setup, heat tolerance, and a familiar user experience. Those insights anchored every iteration that followed.`,
        image: null
      },
      {
        title: 'First Prototype: Modular Pneumatics',
        content: `I led the initial pneumatic prototype featuring TPU bladders packed with rubber granules and driven by a vacuum pump. The bladders would shift nearly a centimeter when depressurized, so I machined a spring-loaded mount that allowed controlled deformation. At this stage the control box lived separately from a retrofitted off-the-shelf vise.`,
        image: null
      },
      {
        title: 'Early Control Box Architecture',
        content: `Working with a six-person subteam, I designed a sheet-metal control box that explored multiple pressure regulators, dials, and ports to support simultaneous vises. We experimented with an accumulator to pre-generate vacuum, but the volume penalty outweighed the marginal speed gains.`,
        image: null
      },
      {
        title: 'Closed-Loop Pneumatic System',
        content: `The next iteration introduced a vacuum switch, relay-controlled pump, and operator switchable solenoid valve. Gauges mounted near the bladders simplified troubleshooting, a downstream check valve prevented backflow, and a muffler cut acoustic noise. We selected steel tubing for ruggedness while keeping adapters for quick push-to-connect fittings.`,
        image: null
      },
      {
        title: 'Iterating on the Bladder',
        content: `TPU bladders struggled with leaks and heat exposure, so we tested alternative elastomers that balanced melting point, thermal insulation, elasticity, and strain. Dragon Skin 10 silicone paired with playground rubber granules hit the sweet spot, reducing leaks and improving force distribution.`,
        image: null
      },
      {
        title: 'Mounting Hardware Overhaul',
        content: `Persistent leaks traced back to bladder mounting hardware. I re-evaluated our assemblies and moved from a racetrack frame to a washer-inspired clamp that sealed reliably while keeping the module compact and serviceable.`,
        image: null
      },
      {
        title: 'Second Prototype & Modular Form',
        content: `With the washer assembly validated, we refined the modular control box so shop owners could mate ReVise with existing vises. Surveys confirmed most users only needed a single special vise, letting us drop the bulky accumulator, simplify maintenance access, and compare lever versus wheel actuation for clamping.`,
        image: null
      },
      {
        title: 'Toward an Integrated System',
        content: `User walk-throughs highlighted trip hazards and leak risks from dangling hoses, plus reluctance to sacrifice shop air for a low-volume system. We responded by fully integrating the control box and vacuum pump into the vise housing while preserving conventional height and ergonomics.`,
        image: null
      },
      {
        title: 'Final Prototype Build',
        content: `I coordinated waterjet, bending, welding, and finishing of the housing; routed and flared the pneumatic lines; and verified airtightness with repeated vacuum chamber testing. The final reveal celebrated our pink team identity, complete with a half-meter lead screw and tuned suspension in the jaws.`,
        image: null
      },
      {
        title: 'Documentation',
        content: `Official documentation of the project is archived through MIT 2.009. The pink theme threading through every prototype is a nod to our team name.`,
        image: null
      }
    ],
    results: null
  },
  'marina-solar-supports': {
    id: 'marina-solar-supports',
    title: 'MARINA SOLAR PANEL SUPPORT',
    subtitle: 'E2SOL Internship, 2021',
    featured: false,
    heroImage: null,
    description: `Optimized a corrugated support structure so floating marina solar modules can withstand up to 1,000 lbf loads without excessive deflection and while remaining cost-effective for low-volume fabrication.`,
    achievements: [
      'Modeled multiple structural concepts and selected a corrugated sheet design to minimize cost',
      'Ran SolidWorks simulations proving sub-0.1 mm deflection under 1,000 lbf loading with AISI 1020 steel',
      'Coordinated with more than 20 fabrication vendors to assess tooling and material trade-offs for prototypes'
    ],
    skills: [
      'Structural analysis',
      'SolidWorks Simulation',
      'Sheet metal design',
      'Design for manufacturing',
      'Vendor sourcing',
      'Product development'
    ],
    sections: [
      {
        title: 'Project Overview',
        content: `Floating marina docks can host everything from pedestrians to golf carts, demanding rugged solar infrastructure. Partnering with PowerDocks, I set out to stiffen the underside of a 435 W SunPower module without interfering with backside terminals or optional inverters while preserving the clean aesthetic expected of marina installations.`
      },
      {
        title: 'Design Requirements',
        content: `The aluminum-framed panel needed reinforcement even when it could only be fastened along the frame edges. Load targets reached 1,000 lbf in worst-case conditions. My early concept exploration included laser-cut truss inserts, welded tube frames, and corrugated sheets. Considering manufacturing and material costs, corrugated steel emerged as the most scalable concept.`
      },
      {
        title: 'Initial Corrugated Steel Concept',
        content: `The first iteration used custom waterjet cutouts that cleared electronics and provided slots to interface with the module frame. SolidWorks Simulation predicted roughly 0.05 mm max deflection under 500 lbf with AISI 1020 cold-rolled steel, rising to about 0.1 mm at 1,000 lbf when the panel was fixed at all edges. Stress concentrated near the electronics cutouts, signaling the need to rethink wire routing.`
      },
      {
        title: 'Refining Cable Management',
        content: `For iteration two I flipped the corrugation direction so cables could be channeled through the valleys rather than cutting large apertures. I swapped the press-fit slit concept for simple fastener holes in the side flanges to relax tolerances. Simulations with the updated geometry held deflection near 0.15 mm under 1,000 lbf, validating performance while easing assembly.`
      },
      {
        title: 'Optimizing Geometry and Materials',
        content: `I iterated through roughly 15 corrugation profiles, tuning angle, trough width, and peak width. A 70° angle with 2 in troughs and 1.8 in peaks dropped deflection to about 0.046 mm using 0.1345 in AISI 1020 steel. Because custom stamping tooling proved expensive at prototype volumes, I sourced ABS thermoforming and FRP molding vendors that could deliver similar stiffness, with ABS simulations still holding deflection to around 0.7 mm at 1,000 lbf.`
      }
    ],
    results: null
  },
  'renaissance-castle': {
    id: 'renaissance-castle',
    title: 'WOODEN RENAISSANCE CASTLE',
    subtitle: 'Next Big Thing Student Group, 2020',
    featured: false,
    heroImage: null,
    description: `Revived MIT’s Next Big Thing student group and led six core teammates plus volunteers to design, permit, and construct a two-story wooden renaissance castle experience for incoming students.`,
    achievements: [
      'Re-established the Next Big Thing student organization and recruited a new project team',
      'Secured approvals from MIT EHS, an external engineering consultant, and the City of Cambridge',
      'Directed design-build efforts, mentoring 15 volunteers through power tool training and on-site construction'
    ],
    skills: [
      'Project leadership',
      'Autodesk Fusion 360',
      'Structural design',
      'Construction management',
      'Team coordination',
      'Event design'
    ],
    sections: [
      {
        title: 'Rebooting the Next Big Thing',
        content: `After several dormant years, I relaunched the Next Big Thing student group to create a headlining attraction for incoming freshmen. With an all-new roster, we set ambitious goals for safety, engagement, budget discipline, and volunteer-friendly construction.`
      },
      {
        title: 'Concept Development',
        content: `We brainstormed ideas that ranged from freefalls to ziplines before converging on a renaissance castle that could host interactive stations like candle making, paint jousting, corn hole, and theatrical skits. The concept needed to serve hundreds of students in short visits and transform Orientation into an immersive experience.`
      },
      {
        title: 'Architecture & Layout',
        content: `Our final layout featured two hexagonal towers connected by an elevated bridge and working drawbridge. The interior supported craft activities while the rooftop platform staged jousting games. Modular wall panels and the drawbridge allowed the structure to seal safely after hours.`
      },
      {
        title: 'Collaborative CAD & Engineering',
        content: `I led the Autodesk Fusion 360 model focusing on tower geometry, floor blocking, and modular wall construction. Floor joists stayed within OSHA’s 12 in spacing requirement, while ceiling ties reinforced the 15 ft walls. I delegated bridge, guardrail, and drawbridge subassemblies and coordinated frequent design reviews to keep the team aligned.`
      },
      {
        title: 'Documentation & Approvals',
        content: `We produced a full set of dimensioned engineering drawings and structural calculations for review. MIT EHS, BMC Engineering, and Cambridge authorities approved the plans, with additional documentation prepared for a future “structural integrity analysis” download once the build resumed post-COVID.`
      },
      {
        title: 'Construction & Mentorship',
        content: `During the build phase I coached about 15 volunteers on saws, drills, and safe work practices. Weather delays and lumber issues forced us to prioritize completing one tower, but the experience reinforced rapid decision making and collaborative problem solving under tight deadlines.`
      }
    ],
    results: null
  },
  'liberia-recycled-waste-bins': {
    id: 'liberia-recycled-waste-bins',
    title: 'LIBERIA: RECYCLED WASTE BINS',
    subtitle: 'Class Project, 2021',
    featured: false,
    heroImage: null,
    description: `Co-created waste collection concepts with the Environmental Rescue Initiative (ERI) in Liberia, converting heat-fused plastic water sachets into durable bins while documenting build guides the partner can deploy locally.`,
    achievements: [
      'Partnered with ERI to define community-centered design criteria for waste bins',
      'Produced project summary plus detailed steel-frame and wire-frame build guides for local fabricators',
      'Applied user-centered research to align aesthetics, durability, and educational impact with community needs'
    ],
    skills: [
      'User-centered design',
      'International development',
      'SolidWorks',
      'Education',
      'Community partnerships',
      'Design documentation'
    ],
    sections: [
      {
        title: 'Project Overview',
        content: `Liberian communities are inundated with discarded plastic water sachets. Working with ERI, our team sought to create recognizable value from that waste stream by designing waste bins that could be built locally and withstand daily use.`
      },
      {
        title: 'Project Summary',
        content: `In a four-person team I contributed to a comprehensive project summary covering problem framing, stakeholder insights, and implementation planning. We emphasized low-cost fabrication, ease of maintenance, and educational storytelling to encourage adoption.`
      },
      {
        title: 'Steel Frame Bin',
        content: `Independently, I developed a steel frame bin concept sized for a standard collection point. The design uses welded steel members to provide stiffness while leaving room for the heat-fused sachet panels. Detailed drawings explain assembly, fasteners, and ways ERI can source components.`
      },
      {
        title: 'Wire Frame Bin',
        content: `A complementary wire frame version reduces material mass and simplifies tooling requirements. I documented the bend patterns, panel attachment points, and finishing options so ERI can choose the right balance of cost, durability, and manufacturability.`
      }
    ],
    results: null
  },
  'mechanical-rabbit': {
    id: 'mechanical-rabbit',
    title: 'MECHANICAL RABBIT',
    subtitle: 'Independent Project, 2020',
    featured: false,
    heroImage: null,
    description: `A quarantine side project blending kinematics, prototyping, and art: designing a wind-up inspired, motor-driven rabbit that reproduces the arc of a real hop using synthesized linkages.`,
    achievements: [
      'Mapped rabbit gait trajectories to inform linkage synthesis',
      'Adapted Chebyshev’s Lambda mechanism in Linkage software to mimic hop dynamics',
      'Hand-built prototypes from cardboard, dowels, and carved basswood while integrating motorized actuation'
    ],
    skills: [
      'Kinematic synthesis',
      'Linkage design',
      'Mechatronics',
      'Rapid prototyping',
      'Hand fabrication',
      'Creative exploration'
    ],
    sections: [
      {
        title: 'Inspiration & Goal',
        content: `Without access to a shop during quarantine, I set out to create a compact kinetic sculpture inspired by wind-up toys. Sketching the major positions of a rabbit’s stride helped define the motion envelope the mechanism needed to achieve.`
      },
      {
        title: 'Analyzing the Coupling Curve',
        content: `Using frame-by-frame analysis in GIMP, I traced the foot path of a hopping rabbit to derive the coupling curve that the linkage would follow. Understanding this trajectory guided bar lengths and pivot placement.`
      },
      {
        title: 'Kinematic Synthesis',
        content: `Starting from Chebyshev’s Lambda mechanism within the Linkage app, I iteratively tuned bar lengths to generate a triangular coupling curve with an accelerating launch phase. That motion captures the moment a rabbit pushes off the ground.`
      },
      {
        title: 'Prototyping & Testing',
        content: `Cardboard and dowel prototypes validated the linkage behavior while revealing the importance of foot friction and balance. I experimented with gear ratios and center-of-mass placement to maintain stability through each hop cycle.`
      },
      {
        title: 'Shaping the Final Model',
        content: `Carving basswood body panels and integrating a toy motor, gearbox, and battery pack brought the character to life. I continue to refine leg actuation and explore spring-assisted thrust for more expressive motion.`
      }
    ],
    results: null
  },
  'solar-panel-deployment-system': {
    id: 'solar-panel-deployment-system',
    title: 'SOLAR PANEL DEPLOYMENT SYSTEM',
    subtitle: 'MIT Research, 2019',
    featured: false,
    heroImage: null,
    description: `Developed a flexible solar panel deployment concept for e-rickshaws supporting street vendors in Bihar, India, enabling on-the-go power with lightweight, adaptable hardware.`,
    achievements: [
      'Designed lightweight panel mounting concept tailored to e-rickshaw geometry',
      'Explored deployable hinge mechanisms for rapid setup and stowage',
      'Collaborated with research mentors to scope pilot testing in Bihar'
    ],
    skills: [
      'Product design',
      'Human-centered research',
      'Energy systems',
      'Prototype fabrication',
      'Field deployment planning'
    ],
    sections: [
      {
        title: 'Opportunity',
        content: `Street vendors in Bihar rely on e-rickshaws with limited access to reliable electricity. A rooftop solar array could power lighting, point-of-sale devices, or fans, provided the system is light, durable, and quick to deploy.`
      },
      {
        title: 'Prototype Approach',
        content: `I created a modular frame and hinge system that folds alongside the vehicle when driving, then opens to maximize surface area when parked. Early prototypes emphasized low-profile mounting, intuitive operation, and compatibility with available panels.`
      },
      {
        title: 'Next Steps',
        content: `Future iterations focus on optimizing material selection for weight, weather resistance, and manufacturability while validating vendor usability through on-site trials.`
      }
    ],
    results: null
  }
};

export default projectData;
