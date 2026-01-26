import overviewImage from '../../assets/engineering-data/tidal-pump/Concept Rendering (4).png';
import thumbnailImage from '../../assets/engineering-data/tidal-pump/Concept Rendering (6).png';
import initialDesignImage from '../../assets/engineering-data/tidal-pump/IMG_0804.PNG';
import testImage1 from '../../assets/engineering-data/tidal-pump/IMG_0806.PNG';
import testImage2 from '../../assets/engineering-data/tidal-pump/IMG_0807.PNG';
import modifiedDesignSketch from '../../assets/engineering-data/tidal-pump/IMG_0803.PNG';
import prototypePartsImage from '../../assets/engineering-data/tidal-pump/PXL_20240101_190757734.jpg';
import prototypeVideo from '../../assets/engineering-data/tidal-pump/PXL_20240109_025503898.TS.mp4';
import fullSystemRendering from '../../assets/engineering-data/tidal-pump/Concept Rendering (6).png';
import transparentRendering from '../../assets/engineering-data/tidal-pump/Concept Rendering.png';
import valveCloseupRendering from '../../assets/engineering-data/tidal-pump/Concept Rendering (3).png';
import hammerheadFloatRendering from '../../assets/engineering-data/tidal-pump/Concept Rendering (4).png';
import flowRatePlot from '../../assets/engineering-data/tidal-pump/Tide_Height_vs_Flow_Rate_LA.png';
import powerPlot from '../../assets/engineering-data/tidal-pump/Tidal_Height_vs_Power_LA.png';

export const tidalPump = {
  id: 'tidal-pump',
  title: 'TIDAL ENERGY PUMP',
  subtitle: 'MIT Climate and Energy Prize, 2024',
  featured: false,
  heroImage: null,
  overviewImage: overviewImage,
  description: `I joined a team of five multi-disciplinary people to participate in the 2024 MIT Climate and Energy Prize. The team brought forth a general concept for a simple gravitational tidal pump. Conceptually, the pump would be composed of a piston in an anchored body. Atop the piston, a massive, buoyant float would sit at the ocean surface, less than a mile offshore. While the tide rose, water would rush into the body vessel. Then, as the tide lowered, the piston would sink and apply hydraulic pressure on the filled vessel, driving water into a tank onshore.<br><br>There were two proposed applications: 1) beachside irrigation (i.e. showers) in remote areas and 2) saltwater greenhouses alongside solar heating of pumped water. I designed the system using Python, built a scale model prototype, prepared parameterized SolidWorks model, renderings, and an LCOE calculation with comprehensive CapEx and OpEx estimates based on a BOM, per-unit material costs, and maintenance/lifetime considerations.`,
  achievements: [
    'Designed and optimized system geometry using parameterized Python models',
    'Built functional scale model prototype demonstrating core principles',
    'Created comprehensive SolidWorks renderings and parameterized CAD model',
    'Developed LCOE calculation with detailed CapEx and OpEx analysis'
  ],
  skills: [
    'Python',
    'SolidWorks',
    'Rendering',
    'Mechanical Design',
    'Hydraulic Systems',
    'Prototyping',
    'CAD',
    'Parameterized Modeling',
    'LCOE Analysis',
    'Tidal Energy',
    'Renewable Energy',
    'System Design',
    'Fluid Mechanics'
  ],
  sections: [
    {
      title: 'Design Conceptualization',
      content: `The initial design consisted of a hammerhead, water inlet, exit valve, and anchor, as shown.`,
      image: initialDesignImage,
      layout: 'diagonal-overlay'
    },
    {
      content: `The hammerhead float rises as the tide rises. Once the float reaches high tide, water rushes through the inlet into the piston body vessel. As the tide falls, the outlet valve may open and the piston would seal past the inlet and push water upstream.`,
      layout: 'side-by-side-images',
      showArrow: true,
      sideBySideImages: [
        {
          image: testImage1,
          caption: 'High Tide (water intake)'
        },
        {
          image: testImage2,
          caption: 'Low Tide (water pumping)'
        }
      ]
    },
    {
      content: `After team discussion, I modified the design with a valve inlet below piston bottom dead center position such that continuous inlet flow can occur without requiring the tide to reach a specified height. My sketch is below:`,
      image: modifiedDesignSketch,
      customClass: 'sketch-section'
    },
    {
      title: 'System Design and Optimization',
      content: `To design and optimize system geometry, I worked with my team to identify key design parameters including head, flow rate, and power requirements for pumping applications. My teammates were devising design requirements such as thermal calculations based for saltwater greenhouses that water could be pumped into and heated for a duration. Below is example code where I parameterized head material and volume, in coordination with a parameterized SolidWorks model, to iterate upon an ideal piston force:`,
      layout: 'code-block',
      code: `# Initialize parameters
rho_water = 1000  # Density of water (kg/m^3)
g = 9.81  # Acceleration due to gravity (m/s^2)
p_atm = 1E5 # Atmospheric pressure
tank_height = 3  # Tank height (m)
piston_diameter = 1  # Piston diameter (m)
head_bouyancy = 9402*g # Total possible head bouyancy (N)
valve_diameter = 0.058  # Valve diameter (m)
gasket_force = 20 # Normal force between gasket and tank walls (N)
friction_coef = 1 # Coefficient of friction between rubber and steel https://structx.com/Material_Properties_005a.html
friction_force = gasket_force*friction_coef


# Calculating piston head mass for steel-clad concrete
piston_head_volume = 2.41 # Piston and Head volume (m^3)
density_concrete = 2400 # Density of conrete (kg/m^3)
density_steel = 7850 # Density of galvanized steel (kg/m^3)
piston_head_mass =  piston_head_volume*(0.9*density_concrete + 0.1*density_steel) # Piston and Head mass (7097.45 kg)


# Force applied by the tides acting on the head, will be used for power calculations
piston_force = piston_head_mass*g - friction_force`
    },
    {
      content: `I then applied this function to a simulated tidal height, with a code snippet below:`,
      layout: 'code-block',
      code: `# Sinusoidal tide simulation and velocity function
def simulate_tide(duration, high_tide_height):
    # Time array over 24 hours
    t = np.linspace(0, duration, 1000)
   
    # Convert time to hours for plotting
    t_hours = t / 3600


    # Sinusoidal tide height
    tide_height = high_tide_height * np.sin(2 * np.pi * t / duration) + 3


    # Calculate the slope of the tide height to determine v_in and v_out
    tide_slope = np.gradient(tide_height, t)


    # v_in is the slope of tide when tide is rising (positive slope)
    # v_out is the absolute value of the slope when tide is falling (negative slope)
    v_in = np.where(tide_slope > 0, tide_slope, 0)
    v_out = np.where(tide_slope < 0, -tide_slope, 0)


    return t_hours, tide_height, v_in, v_out`
    },
    {
      content: `I took real NOAA tidal data from the Los Angeles area, which represents an ideal warm climate and widely varying tidal geographic location for our pump. Based on the rate of change of the tidal height (curve slope) and piston area, neglecting compressibility and orifice considerations leading to head loss, we can roughly calculate ideal flow rates in GPM. The gradient of the tide data and piston area can be used to determine pump power.`,
      layout: 'code-block',
      code: `# Calculate flow rate in m³/s for v_in and v_out separately and convert to GPM
tide_data_la['Flow Rate in (GPM)'] = piston_area * tide_data_la['v_in'] * 15850.3
tide_data_la['Flow Rate out (GPM)'] = piston_area * tide_data_la['v_out'] * 15850.3


# Calculate the power as the product of piston force and change in height
tide_data_la['Power (W)'] = piston_force * tide_data_la['Slope']`
    },
    {
      content: `I plotted the results of flow rate and power vs tide height for real tidal data in LA:`,
      images: [
        {
          src: flowRatePlot,
          caption: 'Tide height vs flow rate for Los Angeles tidal data'
        },
        {
          src: powerPlot,
          caption: 'Tide height vs power output for Los Angeles tidal data'
        }
      ]
    },
    {
      title: 'Prototype Development',
      content: `I also put together this simple syringe model using PVC tubing and plastic bins to demonstrate the system! The prototype in action:`,
      layout: 'side-by-side-images',
      sideBySideImages: [
        {
          image: prototypePartsImage,
          caption: 'Prototype parts'
        },
        {
          video: prototypeVideo,
          autoPlay: true,
          loop: true,
          muted: true,
          controls: false,
          caption: 'Prototype demonstration'
        }
      ]
    },
    {
      title: 'SolidWorks Renderings',
      content: `Here are my SolidWorks renderings of the pump, which I used SolidWorks Visualize for.`,
      layout: 'tidal-renderings-grid',
      imageGallery: [
        {
          image: fullSystemRendering,
          caption: 'Full system rendering showing complete pump assembly'
        },
        {
          image: transparentRendering,
          caption: 'Transparent view revealing internal piston and valve mechanisms'
        },
        {
          image: valveCloseupRendering,
          caption: 'Close-up on inlet and outlet valves showing flow paths'
        },
        {
          image: hammerheadFloatRendering,
          caption: 'Hammerhead float appearance sitting on water surface'
        }
      ]
    }
  ],
  results: null
};

export default tidalPump;

