export const marinaSolarSupports = {
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
};

export default marinaSolarSupports;

