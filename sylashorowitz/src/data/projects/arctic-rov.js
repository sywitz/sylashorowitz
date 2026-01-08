import overviewImage from '../../assets/engineering-data/arctic-rov/Untitled Project 3.jpg';
import img20200130 from '../../assets/engineering-data/arctic-rov/IMG_20200130_110338.jpg';
import backgroundVideo from '../../assets/engineering-data/arctic-rov/205 - VID_20200130_120259~2.mp4';
import drawingBoardImage from '../../assets/engineering-data/arctic-rov/d68f744e-3cd0-452e-a45c-cd80fcf7f132.jpg';
import annotation20200824 from '../../assets/engineering-data/arctic-rov/Annotation 2020-08-24 142214.png';
import annotation20200907_193059 from '../../assets/engineering-data/arctic-rov/Annotation 2020-09-07 193059.png';
import screenshot20260107_144452 from '../../assets/engineering-data/arctic-rov/Screenshot 2026-01-07 144452.png';
import pulleyImage from '../../assets/engineering-data/arctic-rov/Pulley_edited.jpg';
import schematicImage from '../../assets/engineering-data/arctic-rov/uropschematic.jpg';
import tms2Image from '../../assets/engineering-data/arctic-rov/TMS2.PNG';
import screenshot20260107_144509 from '../../assets/engineering-data/arctic-rov/Screenshot 2026-01-07 144509.png';
import carouselImg1 from '../../assets/engineering-data/arctic-rov/20200929_144211_same.jpg';
import carouselImg2 from '../../assets/engineering-data/arctic-rov/20201207_153158.jpg';
import carouselImg3 from '../../assets/engineering-data/arctic-rov/20201207_220850.jpg';
import carouselImg4 from '../../assets/engineering-data/arctic-rov/20201211_131353.jpg';
import carouselImg5 from '../../assets/engineering-data/arctic-rov/20210420_201352.jpg';
import carouselImg6 from '../../assets/engineering-data/arctic-rov/20201208_143526.jpg';
import carouselImg7 from '../../assets/engineering-data/arctic-rov/20210412_150628.jpg';
import testArduinoVideo from '../../assets/engineering-data/arctic-rov/164 - 20201208_143532 (1).mp4';
import brokenMountImg from '../../assets/engineering-data/arctic-rov/20210414_174451.jpg';
import steelReplacementImg from '../../assets/engineering-data/arctic-rov/20210420_190426_cropped.jpg';
import testMotorVideo from '../../assets/engineering-data/arctic-rov/74 - 20210507_145039.mp4';
import testPumpVideo from '../../assets/engineering-data/arctic-rov/95 - 20210419_161530.mp4';
import coupleTubingVideo from '../../assets/engineering-data/arctic-rov/90 - 20210514_201204.mp4';
import fieldTestingVideo from '../../assets/engineering-data/arctic-rov/88 - 20210515_165017.mp4';
import dgeuSetupImg from '../../assets/engineering-data/arctic-rov/Screenshot 2026-01-07 144528.png';
import test1Img from '../../assets/engineering-data/arctic-rov/IMG_20210515_150302.jpg';
import test2Img from '../../assets/engineering-data/arctic-rov/IMG_20210803_180223.jpg';
import test3Img from '../../assets/engineering-data/arctic-rov/20211011_171602.jpg';
import test4Img1 from '../../assets/engineering-data/arctic-rov/PXL_20220305_223541615.jpg';
import test4Img2 from '../../assets/engineering-data/arctic-rov/Screenshot 2026-01-07 144547.png';
import test4Img3 from '../../assets/engineering-data/arctic-rov/Screenshot 2026-01-07 162440.png';
import test4Img4 from '../../assets/engineering-data/arctic-rov/IMG_1361 (1).jpg';
import posterImg from '../../assets/engineering-data/arctic-rov/PXL_20221019_140245481.jpg';
import posterPdf from '../../assets/engineering-data/arctic-rov/poster.pdf';

export const arcticRov = {
  id: 'arctic-rov',
  title: 'ARCTIC ROV',
  subtitle: 'MIT Research, 2020-2022',
  featured: true,
  heroImage: null,
  overviewImage: overviewImage,
  description: `I designed a motorized tether management system for an underwater ROV that was deployed in the Arctic by WHOI scientists to map greenhouse gas (GHG) emissions from permafrost. This project was completed under the MIT Department of Mechanical Engineering and Woods Hole Oceanographic Institution (WHOI). The system was tested at over 5 field sites. I was the sole undergraduate student selected to present at the OCEANS 2022 MTS/IEEE-OES Student Poster Competition. The paper is published <a href="https://ieeexplore.ieee.org/document/9977310" target="_blank" rel="noopener noreferrer">here</a>.`,
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
      layout: 'transition',
      content: `Scroll down to see my design process!`,
      image: null
    },
    {
      layout: 'text-with-side-images',
      content: `In January 2020, I built the BlueROV2 underwater drone. This drone will be used in conjunction with a flying drone to measure carbon dioxide and methane concentrations in the air and water in a specific area in the Arctic. The drones will be deployed from a boat in the Spring as the permafrost melts to help us understand the role the Arctic plays as a GHG source or sink throughout the year using predictive algorithms that are currently being developed to analyze the data. My underwater drone will be able to go under the sheet of ice to collect water samples at specific positions and depths, preventing the need for icebreaking.`,
      sideImages: [img20200130]
    },
    {
      layout: 'background-video',
      content: `Notice that yellow tether connected to the ROV? This 150 meter cable communicates with the computer. That's a large length of tether to reel out/in, and can risk snagging or entanglement! My next job was to design a tether management system (TMS), a kind of winch, for the drone.`,
      backgroundVideo: backgroundVideo
    },
    {
      layout: 'text-with-side-images',
      content: `To the Drawing Board

I made a few concept sketches keeping the following design goals in mind:

1. Automatically spool tether
2. Get water from robot to topside
3. Prevent tangling of tether while swimming, deployed, and spooled
4. Be waterproof
5. Withstand temperatures as low as 5°F
6. Be able to remain steady on the boat

My sketch features a motor coupled to the drum of the spool. The tubing to gather water samples is coupled to the tether, which splits to transport the electrical communications and water to the topside.`,
      sideImages: [drawingBoardImage]
    },
    {
      layout: 'text-before-image',
      content: `I calculated that I would need a DC motor rated at 1/2 hp to drive the spool. I measure the friction on the spooling system that the BlueROV came with and estimated the drag. In order to move at about 1 m/s, I calculated that the 1800 rpm motor would have to be geared at a 10:1 ratio.`,
      image: annotation20200824
    },
    {
      layout: 'code-block',
      content: `Coupling the motor to the spool was a big question. To make the product more compact and transportable, the motor would be better placed beneath the spool as opposed to directly onto the drive. I decided to go with a belt drive instead of a chain and sprocket to minimize the need to maintenance and concerns about corrosion from saltwater. I calculated the required belt length for a center distance of 12" using MATLAB. I kept this constraint of 12" constant in my CAD.`,
      code: `% Belt Length Calculation for TMS Drive System
% Center distance between pulleys: 12 inches
centerDistance = 12; % inches

% Pulley diameters (example values - adjust based on design)
d1 = 2.5; % Driver pulley diameter (inches)
d2 = 2.5; % Driven pulley diameter (inches)

% Calculate belt length using standard formula
% L = 2*C + (pi/2)*(D1 + D2) + ((D2 - D1)^2)/(4*C)
beltLength = 2*centerDistance + (pi/2)*(d1 + d2) + ((d2 - d1)^2)/(4*centerDistance);

fprintf('Required belt length: %.2f inches\n', beltLength);
fprintf('Center distance constraint: %.0f inches\n', centerDistance);`
    },
    {
      layout: 'text-with-side-images',
      content: `One challenge was directing water out of the drum of the TMS while preventing the tube from twisting. The cable side uses a slip ring to transmit electrical communications. I decided to implement a 90 degree fluid rotary union. On the right of this image is where the hand crank of the provided spool would otherwise be. I figured I would customize it by drilling a hole where the crank was and feeding the tube transporting the water through this. The tubing material is an inert polymer that will not interfere with the water sample. This was challenging to design because this is also where the pulley for the belt shaft would be mounted. I used a hollow steel shaft and ran the tube through it, fastening it with collars at either end. To prevent bending, the shaft is simply supported with a corrosion-resistant plastic ball bearing.`,
      sideImages: [
        annotation20200907_193059,
        screenshot20260107_144452
      ]
    },
    {
      layout: 'text-with-side-images',
      content: `I wanted to create a guiderail for the tether to follow as it was being unspooled, and to go over the edge of the boat. This detachable pulley arm can be hooked onto the handle of the provided spool and folded for ease of transportation as pictured. This arm is adjustable in 2 degrees of freedom, and can go about 30 inches up and 11 inches out. I chose HDPE as a material due to its lightweightedness, strength to support the robot, and corrosion resistance.`,
      sideImages: [pulleyImage]
    },
    {
      layout: 'text-with-side-images',
      content: `The electronics schematic is pictured to the right. The motor draws a maximum of 39 amps at 12 V from a battery with a 110 Ah capacity, which should be more than enough to last for how long the winch will be running. Due to the high current, a 40 A fuse can break the circuit. An optical isolator protects the microcontroller (I will be using an Arduino Uno) from possible voltage spikes from the motor. An encoder placed on the motor will track how much tether is spooled. I used a SyRen 50A regenerative motor driver that can control speed and direction. The SyRen controller is easy to engage with an Arduino and can handle bulky motors. People often use this driver for combat robots!`,
      sideImages: [schematicImage]
    },
    {
      content: `Here are my final CAD drawings!`,
      layout: 'large-image',
      image: tms2Image
    },
    {
      content: `Below is a rendering showing all components, including the motor, spool, belt drive, and lead acid battery.`,
      images: [
        screenshot20260107_144509
      ]
    },
    {
      title: 'Fabrication',
      content: ``,
      image: null
    },
    {
      content: `Building the prototype required some trial and error. When coupling the spool to the motor, I had to come up with an inventive way to secure the shaft collar. You will see the plastic piece that I drilled through, which I settled on after trying out too brittle materials like acrylic. Aligning the spool to the bearing required making use of the 80/20 extrusion which provided a margin-of-error since screws could slide along the members.`,
      layout: 'image-carousel',
      carouselImages: [
        carouselImg1,
        carouselImg2,
        carouselImg3,
        carouselImg4,
        carouselImg5,
        carouselImg6,
        carouselImg7
      ]
    },
    {
      layout: 'background-video',
      content: `Then, I tested out controlling the motor with the Arduino!`,
      backgroundVideo: testArduinoVideo
    },
    {
      content: `Here's a fun unexpected (or maybe quite expected) occurance!`,
      layout: 'side-by-side-images',
      sideBySideImages: [
        {
          image: brokenMountImg,
          caption: `Here's a fun unexpected (or maybe quite expected) occurance! During motor testing, the plastic mount for the shaft collar ripped itself apart!`
        },
        {
          image: steelReplacementImg,
          caption: `I replaced it with a piece of steel sheet metal. Remember: this was built in my Airbnb with McMaster parts being shipped to me. Without any machine shop, the metal plate worked surprisingly well!`
        }
      ]
    },
    {
      title: 'Testing',
      content: ``,
      image: null
    },
    {
      layout: 'text-with-side-images',
      content: `Since the robot is about 25 lbs outside of water, I wanted to test if my 1 m/s lifting spec outside of water worked with the selected motor and gearbox. I attached 20 lbs of weight to the end of the tether and tubing. At 27% of full motor capacity, the TMS was able to lift 20 lbs at a comfortable speed without any damage! [Of course, this was after a few mishaps and adjustments with the shaft collar and motor driver technical difficulties, but I won't go into all of that that.] This felt sufficient for field operations! There also seems to be more than enough additional motor capacity to overcome potential drag and currents in rough waters that would require reeling in the robot as well.`,
      sideImages: [testMotorVideo]
    },
    {
      layout: 'text-with-side-images',
      content: `I put together a 12V, 3A, 80 PSI pump in a waterproof box with an external circuit breaker switch and AC/DC power supply. The pumping system seemed to work, but testing on the 150m tubing length is yet to come!`,
      sideImages: [testPumpVideo]
    },
    {
      layout: 'background-video',
      content: `Then it was time to couple the tubing to the tether for field work! I used pieces spiral wrap and the whole process took almost 2 hours.`,
      backgroundVideo: coupleTubingVideo
    },
    {
      layout: 'background-video',
      content: `Field Testing`,
      backgroundVideo: fieldTestingVideo
    },
    {
      content: `The system was integrated with a DGEU (Dissolved Gas Extraction Unit) and GGA (Greenhouse Gas Analyzer) developed by my group with Dr. Michel at Woods Hole Oceanographic Institution (WHOI). I instructed the WHOI scientists how to use my tether management system (calling it Integrated Tether Management and Sampling System ITMSS) with the ROV (which we decided to refer to it as a Size Weight and Power Constrained Underwater Vehicle SWAP-UV, which was a major motivation for the project).`,
      images: [dgeuSetupImg]
    },
    {
      title: 'First Test: Laurel Lake, Lee, MA',
      layout: 'text-with-side-images-left',
      content: `During this test, we (my graduate student mentor and I) realized the ROV was not connecting, and after many checks, learned that the spool (top left) had sheared the communication wires: a result of me putting the spool back together incorrectly. We then tested the pumping system (bottom right) and realized we needed about half a meter more head. We figured it may be from losses along the curves in the tubing.`,
      sideImages: [test1Img]
    },
    {
      title: 'Second Test: Sippewisett Marsh, Falmouth, MA',
      layout: 'text-with-side-images-left',
      content: `We verified that the TMS worked well by practicing spooling in and out as we drove the drone (soldered the wires so those worked too). However, even with a larger pump (now 5A), we still couldn't pull water. We tried priming the pump beforehand and it worked somewhat. Another issue was that we needed a filter at the intake to prevent sand and plants from clogging it.`,
      sideImages: [test2Img]
    },
    {
      title: 'Third Test: Sippewisett Marsh, Falmouth, MA',
      layout: 'text-with-side-images-left',
      content: `We brought measurement instrumentation and a now 100 PSI diaphragm pump plus a submersible pump integrated into the ROV. The yellow boxes at the bottom left hold the dissolved gas extraction unit (DGEU) and generator gas analyzer (GGA). Unfortunately our submersible pump broke, but after priming the larger topside diaphragm pump, we were able to pull enough water to gather spatio-temporal data and CH4 and CO2 emissions data from the GGA! Of course, something must always go wrong...<br><br><br><br>The ROV had a few blown out propellers, so I'm hoping to do one more test in winter to get accurate data to analyze for a conference paper!`,
      sideImages: [test3Img]
    },
    {
      title: 'Fourth Test: Lake Whitehall, Hopkinton, MA',
      layout: 'text-with-side-images-left',
      customClass: 'lake-whitehall-section',
      content: `We deployed under a frozen lake for the first time and captured CO2 and CH4 data. Methane was from dissolved gas from decaying organic matter in the lake which can be seen from the BlueROV SWAP-UV video showing entrapped bubbles in the ice sheet.`,
      sideImages: [test4Img1, test4Img2, test4Img3, test4Img4]
    },
    {
      title: 'Results',
      layout: 'text-with-side-images-left',
      customClass: 'results-section',
      content: `I published a paper and presented at the OCEANS 2022 conference. I was accepted into the Student Poster Competition as the sole undergraduate student.`,
      sideImages: [posterImg],
      pdf: posterPdf
    }
  ],
  results: null
};

export default arcticRov;

