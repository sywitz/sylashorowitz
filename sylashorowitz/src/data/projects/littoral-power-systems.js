// Import images
import overviewImage from '../../assets/engineering-data/lps/PXL_20240201_212729411.jpg';
import neuralWecImage from '../../assets/engineering-data/lps/Screenshot 2026-01-26 184459.png';
import assemblyImage1 from '../../assets/engineering-data/lps/PXL_20230908_162013022.png';
import assemblyImage2 from '../../assets/engineering-data/lps/IMG_8840_redact.png';
import assemblyImage3 from '../../assets/engineering-data/lps/PXL_20231019_150549293.jpg';
import assemblyImage4 from '../../assets/engineering-data/lps/PXL_20240503_183739659.jpg';
import assemblyImage5 from '../../assets/engineering-data/lps/PXL_20240207_180422372.jpg';
import assemblyImage6 from '../../assets/engineering-data/lps/1714699012389.jpg';
import tankTestingImage1 from '../../assets/engineering-data/lps/1718816642927.jpg';
import hydrokineticSimImage from '../../assets/engineering-data/lps/Screenshot 2024-01-04 112346_redacted.png';
import sonarImage from '../../assets/engineering-data/lps/1749735655052.jpg';
import fieldworkImage1 from '../../assets/engineering-data/lps/PXL_20231102_173230963.jpg';
import fieldworkImage2 from '../../assets/engineering-data/lps/IMG_20240724_142151.jpg';
import fieldworkImage3 from '../../assets/engineering-data/lps/PXL_20231026_152213257.jpg';

export const littoralPowerSystems = {
  id: 'littoral-power-systems',
  title: 'LITTORAL POWER SYSTEMS',
  subtitle: 'Mechanical Engineer / Project Manager, 2023-2024',
  featured: false,
  heroImage: null,
  overviewImage: overviewImage,
  description: `I served as R&D Project Manager and Mechanical Engineer for a $4M+ DOE-funded wave energy program, coordinating technical work across multiple institutions including GE Research. My role focused on technical project execution: defining scope, managing schedules, tracking risks, handling procurement and budgeting, and coordinating between controls, mechanical, electrical, and data science teams. I led systems integration for tank-scale wave energy converter prototypes, including assembly, crane operation, motor driver and DAQ integration, and marine-grade wiring harness assembly. I also managed hydrokinetic turbine design projects, performing CAD redesigns, structural calculations, and MATLAB/Simulink dynamics modeling for turbines in freezing riverine and marine environments.`,
  achievements: [
    'Managed $4M+ DOE-funded wave energy R&D program coordinating across 4 partner institutions',
    'Led systems integration for tank-scale WEC prototype including assembly, crane operation, and marine-grade wiring',
    'Built Excel- and Python-based automations for budgets, schedules, test matrices, and reporting',
    'Applied AI-assisted workflows to synthesize meeting notes, action items, and cross-team documentation',
    'Led structured risk reviews and FMEA covering mechanical, electrical, and deployment-stage failure modes',
    'Presented progress to industry partners at PacWave workshop at 2024 Ocean Renewable Energy Conference',
    'Managed full CAD redesigns and CFD studies for hydrokinetic turbines in freezing environments',
    'Performed MATLAB/Simulink dynamics modeling for failure mode evaluation and design optimization'
  ],
  skills: [
    'Project Management',
    'Systems Integration',
    'Mechanical Engineering',
    'Python',
    'MATLAB',
    'Simulink',
    'CAD',
    'FEA',
    'Structural Analysis',
    'Marine Engineering',
    'Risk Management',
    'FMEA',
    'DAQ',
    'Controls Engineering',
    'Technical Writing'
  ],
  sections: [
    {
      title: 'Wave Energy Converter R&D',
      content: `At Littoral Power Systems, I served as R&D Project Manager and Mechanical Engineer for a $4M+ DOE-funded wave energy program, coordinating work across GE Research, Kelson Marine Co., Marquette University, and University of Maine. This is a description of the grant pulled from the Littoral Power Systems website containing the official grant award:<br><br>"NeuralWEC: combining machine learning and model predictive control with a lightweight high‐TPL multi‐axis point absorber, toward a cost‐disruptive wave energy capture system<br> The overall objective is to demonstrate that the NeuralWEC supervisory control system results in at least a significant improvement in efficiency as compared to a traditional device governed by passive damping controls, and to demonstrate these improvements in (i) complex sea states where the wave shapes and forces on the device are not known beforehand, and (ii) long‐period waves, where most conventional point absorber WECs have extreme difficulty producing energy efficiently, first at laboratory scale and finally in the open sea at PacWave off the coast of Newport, OR."`,
      layout: 'text-with-side-images',
      image: neuralWecImage,
      contentBoxes: [
        {
          content: `My role focused on technical project execution: scope definition, schedule control, risk tracking, procurement, budgeting, and coordination between controls, mechanical, electrical, and data science teams across institutions. I wrote technical reports and deliverables for DOE and partners, and maintained alignment between academic research goals and hardware execution constraints. To reduce coordination overhead, I built Excel- and Python-based automations for budgets, schedules, test matrices, and reporting, and applied AI-assisted workflows to synthesize meeting notes, action items, and cross-team documentation. These tools improved traceability and reduced friction across a distributed team.`
        },
        {
          content: `My focus was also on general systems integration. I was responsible for assembly of the tank-scale WEC prototype, crane operation, genset mounting design and integration, motor driver and DAQ integration, and marine-grade wiring harness and cable assembly. This work supported multiple closed-loop, ML-controlled wave tank tests.`
        }
      ],
      imageGallery: [
        {
          image: assemblyImage1,
          caption: ''
        },
        {
          image: assemblyImage2,
          caption: ''
        },
        {
          image: assemblyImage3,
          caption: ''
        },
        {
          image: assemblyImage4,
          caption: ''
        },
        {
          image: assemblyImage5,
          caption: ''
        },
        {
          image: assemblyImage6,
          caption: 'Image sourced from Littoral Power Systems\' LinkedIn'
        }
      ],
      subsections: [
        {
          content: `In parallel, I supported path-to-deployment planning, coordinating with PacWave, University of Oregon, and research vessel contractors on permitting, marine sensor integration, and deployment. I worked with vendors, metal fabricators, and our partner naval architects on DFM for an open-ocean prototype, and led structured, team risk reviews and FMEA covering mechanical, electrical, and deployment-stage failure modes. I presented our progress to industry partners at the PacWave workshop at the <a href="https://pacificoceanenergy.org/orec-2024/" target="_blank" rel="noopener noreferrer">2024 Ocean Renewable Energy Conference</a>.`
        },
        {
          image: tankTestingImage1,
          content: '<div class="image-caption">Tank testing image sourced from Littoral Power Systems\' LinkedIn</div>'
        }
      ]
    },
    {
      title: 'Hydrokinetic Energy Converter',
      content: `I led engineering work on hydrokinetic and tidal turbines designed for freezing riverine and marine environments. This included managing small engineering teams through full CAD redesigns, coordinating buoyancy and stability analysis, overseeing computational fluid dynamics (CFD) studies, and conducting structural calculations and FEA using Python- and Excel-based tools. I performed MATLAB/Simulink dynamics modeling to evaluate failure modes such as debris impact and transient loading, and translated analysis results into design changes and risk mitigations.`,
      layout: 'text-with-side-images',
      sideImages: [hydrokineticSimImage],
      sideImageCaption: 'Image depicting simulations with redactions for proprietary purposes.',
      contentBoxes: [
        {
          content: `As projects progressed toward deployment, I supported scale-up and field implementation planning, including CapEx/OpEx modeling, early LCOE estimates, and coordination with installation, commissioning, and decommissioning contractors. I worked closely with manufacturers on DFM, and led FMEA exercises with GE Vernova and NREL engineers, producing formal technical reports for internal and external review.`
        }
      ]
    },
    {
      title: 'Data Science & Marine Sensing',
      content: `I supported multibeam sonar testing and data analysis for marine renewable energy applications, contributing to early development of computer vision and machine learning approaches for underwater sensing. Sensor integration and data analysis was a key component of my role.`,
      layout: 'text-with-side-images',
      image: sonarImage
    },
    {
      title: 'Project Engineering and Fieldwork',
      content: `My work included field inspections at hydropower sites and manufacturing facilities, supporting quality control, deployment planning, and customer engagement with dam operators and research partners such as the U.S. Geological Survey (fish passage projects). I coordinated with customers for small-hydropower turbine installations and upgrades using our specialized, modular hydropower equipment. I worked alongside civil and electrical engineers, developing PLC system architecture & driving plant controls strategy based on customer needs for hydropower dams while working alongside controls experts. I drafted and reviewed P&amp;ID and single-line diagrams alongside project engineers for commercial projects.<br><br>I supervised and mentored engineering interns, coordinated with local robotics programs to support STEM education for high school students, and partnered with a local additive manufacturing facility for rapid prototyping. Through these collaborations, I contributed to airfoil design and fabrication for hydropower-related projects while supporting hands-on learning and workforce development.`,
      layout: 'side-by-side-images',
      showArrow: false,
      sideBySideImages: [
        {
          image: fieldworkImage1,
          caption: ''
        },
        {
          image: fieldworkImage2,
          caption: ''
        },
        {
          image: fieldworkImage3,
          caption: ''
        }
      ]
    }
  ],
  results: null
};

export default littoralPowerSystems;

