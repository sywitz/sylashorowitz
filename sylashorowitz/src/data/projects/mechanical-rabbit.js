export const mechanicalRabbit = {
  id: 'mechanical-rabbit',
  title: 'MECHANICAL RABBIT',
  subtitle: 'Independent Project, 2020',
  featured: false,
  heroImage: null,
  description: `A quarantine side project blending kinematics, prototyping, and art: designing a wind-up inspired, motor-driven rabbit that reproduces the arc of a real hop using synthesized linkages.`,
  achievements: [
    'Mapped rabbit gait trajectories to inform linkage synthesis',
    'Adapted Chebyshev\'s Lambda mechanism in Linkage software to mimic hop dynamics',
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
      content: `Without access to a shop during quarantine, I set out to create a compact kinetic sculpture inspired by wind-up toys. Sketching the major positions of a rabbit's stride helped define the motion envelope the mechanism needed to achieve.`
    },
    {
      title: 'Analyzing the Coupling Curve',
      content: `Using frame-by-frame analysis in GIMP, I traced the foot path of a hopping rabbit to derive the coupling curve that the linkage would follow. Understanding this trajectory guided bar lengths and pivot placement.`
    },
    {
      title: 'Kinematic Synthesis',
      content: `Starting from Chebyshev's Lambda mechanism within the Linkage app, I iteratively tuned bar lengths to generate a triangular coupling curve with an accelerating launch phase. That motion captures the moment a rabbit pushes off the ground.`
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
};

export default mechanicalRabbit;
