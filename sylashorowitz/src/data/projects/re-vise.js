export const reVise = {
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
};

export default reVise;

