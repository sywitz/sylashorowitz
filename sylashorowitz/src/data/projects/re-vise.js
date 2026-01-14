// Import images
import overviewImage from '../../assets/engineering-data/re-vise/final_photo_white_edited_edited cropped.jpg';
import sandBg from '../../assets/engineering-data/re-vise/simple-pink-gravel-plain-background.jpg';
import userDesignImg1 from '../../assets/engineering-data/re-vise/Screenshot 2024-06-03 181710.png';
import userDesignBg from '../../assets/engineering-data/re-vise/Screenshot 2024-06-03 181437.png';
import prototype1Video from '../../assets/engineering-data/re-vise/03 - 20211115_173331.mp4';
import prototype1Img from '../../assets/engineering-data/re-vise/Screenshot 2024-06-03 181635.png';
import pneumaticDiagram from '../../assets/engineering-data/re-vise/Final Pneumatic Diagram.drawio (1) cropped.png';
import granularTopImg from '../../assets/engineering-data/re-vise/Screenshot 2024-06-03 182341.png';
import granularSideImg from '../../assets/engineering-data/re-vise/Screenshot 2024-06-03 182331.png';
import granularSideImg1 from '../../assets/engineering-data/re-vise/Screenshot 2024-06-03 184445.png';
import granularSideImg2 from '../../assets/engineering-data/re-vise/Screenshot 2024-06-03 181510.png';
import assembly2Img from '../../assets/engineering-data/re-vise/assembly2.png';
import controlBoxGif from '../../assets/engineering-data/re-vise/control_box_exp.gif';
import bladderImg from '../../assets/engineering-data/re-vise/bladder.png';
import iteration2RightImg from '../../assets/engineering-data/re-vise/Screenshot 2024-06-03 181820.png';
import finalSmallImg from '../../assets/engineering-data/re-vise/20211130_210121.jpg';
import finalLargeImg from '../../assets/engineering-data/re-vise/Screenshot 2024-06-03 184438.png';

export const reVise = {
  id: 're-vise',
  title: 'RE-VISE',
  subtitle: 'Senior Capstone, MIT 2.009, 2021',
  featured: false,
  heroImage: null,
  overviewImage: overviewImage,
  description: `As part of my 2.009 capstone product design class at MIT, I led the design of the pneumatics system and contributed to the CAD design of the welded structure, bladder design, granular jamming mechanism, and user interface (UI/UX) design and user testing for ReVise. Along with my team of 20, we collaborated closely with the MIT forge/foundry to understand the challenges faced by artists and makers when holding irregular workpieces. This user-centric approach guided us through four design iterations.<br><br>ReVise is an integrated vise solution designed to revolutionize workholding for irregular objects. It features moldable pouches that seamlessly transition between soft and stiff states, allowing users to securely grip a wide range of geometries with a single tool. Unlike traditional vises, which can damage delicate materials due to concentrated pressure points, ReVise distributes clamping forces over a larger contact area, ensuring a secure grip without causing harm.<br><br>By leveraging the concept of granular jamming, ReVise's pouches stiffen upon the removal of air, conforming to the shape of the object being held. This adaptability eliminates the need for custom jigs and fixtures, saving users valuable time and resources. The intuitive user interface and self-regulating pneumatic system ensure a seamless experience, further enhancing the product's appeal to its target market of artists, woodworkers, machinists, jewelers, and educational institutions.<br><br><a href="http://designed.mit.edu/new/view.html?year=2021&team=pink" target="_blank" rel="noopener noreferrer" style="color: #ff69b4;">You can see official documentation of our work here!</a><br><br><em style="color: #ff69b4;">Note: everything is pink because we were the "Pink" team... one of many teams in the class, all different colors.</em>`,
  achievements: [
    'Led design of a self-regulating pneumatic system and granular jamming bladders for the vise',
    'Coordinated CAD for welded structure, bladder mounts, and modular assemblies across four design iterations',
    'Ran user research, UI/UX design, and testing with makers to define product requirements'
  ],
  skills: [
    'Pneumatic Design',
    'Granular Jamming',
    'CAD',
    'Sheet Metal Fabrication',
    'User-Centered Design',
    'Prototyping',
    'Systems Integration',
    'UI/UX Research',
    'P&ID',
    'Product Design Process',
    'Team Leadership',
    'Welding',
    'Vacuum Systems',
    'Material Selection'
  ],
  sections: [
    {
      title: 'User Design',
      content: `Based on conversations and guided UX user feedback sessions with jewelers, blacksmiths, metalworkers, makerspace users, and 20 or so other makers of odd-shaped origins, we identified the following product specs:`,
      layout: 'revise-section-1',
      customClass: 'revise-white-bg',
      image: userDesignImg1,
      backgroundImage: userDesignBg,
      sandBackground: sandBg
    },
    {
      title: 'Prototype Iteration 1',
      content: `We started by designing a functional prototype. This design featured TPU "bladders" that carried rubber granules and a vacuum pump. We noticed that the bladders would displace by about a centimeter when de-pressurized. I machined a mount with a spring that would allow for this deformation. In this first prototype, the control box with the pneumatic system was separate from the vise, and we used an OTS, lightweight vise that was retrofitted with a sheet metal box that I fabricated.`,
      layout: 'revise-section-2',
      customClass: 'revise-sand-bg',
      video: prototype1Video,
      additionalContent: `Our first pneumatic system was housed in a sheet metal box, which I led a team of 6 to design. We considered a number of pressure regulators and dials to account for multiple Re-vises (or at the time, our product was called "Conform," which we later realized did not match our vibe)! This took advantage of the modular design we had at this time, with the separate control box. We also had an accumulator, which you can see as the large oblong sphere within the box, which marginally sped up the process of sucking air by passively pre-generating the vacuum through the creation of a pressure differential (milliseconds), but we later decided that it took more space than it saved time.`,
      image: prototype1Img
    },
    {
      title: 'Pneumatic P&ID',
      layout: 'revise-section-3',
      customClass: 'revise-white-bg',
      image: pneumaticDiagram,
      content: `I then spearheaded the design of a new pneumatic system. In this system, a vacuum switch triggers the pump through a relay when the pump falls below the desired pressure. The solenoid valve is controlled by a switch to release the vacuum. The placement of the gauge close to the bladders allows us to troubleshoot the pressure in the bladders. Behind the solenoid valve, a check valve prevents backflow. A muffler is placed to minimize noise. Steel tubing was selected for airtightness and robustness in rough environments, while an adapter allows for easy push-to-connect or other simple attachements to plastic tubing.`,
      sandBackground: sandBg
    },
    {
      title: 'Granular Jamming',
      layout: 'revise-section-4',
      customClass: 'revise-sand-bg',
      content: `After battling with leaks in the TPU, we explored a variety of bladder materials. Since forgeries and jewelers work with hot materials, especially after coming out of the mold and working them with a file for awhile, we had to find something that had a balanced spec of high melting point, low thermal conductivity, good normal strain, and ideal elasticity. We settled on Dragon Skin 10, a medium silicone rubber, for the bladder that houses our granules. Further, we optimized our granule size and material based on a force v. deformation analysis.`,
      topImage: granularTopImg,
      sideImage: granularSideImg,
      additionalContent: `While we were satisfied with the Dragon Skin and new pneumatic system, we noticed much of the leaking was coming from the mounting hardware for the bladder, so we reevaluated the assembly (right). We opted for the so-called "washer" assembly over the "racetrack" or "belt."`,
      sideImages: [granularSideImg1, granularSideImg2]
    },
    {
      title: 'Prototype Iteration 2',
      layout: 'revise-section-5',
      customClass: 'revise-white-bg',
      content: `With our washer assembly fleshed out, and equipped with Dragon Skin, we optimized our design, maintaining a module form to allow shop owners to connect our vise to their existing vise. After speaking with our users and administering surveys, we determined that compactness was ideal, and that most users would only buy 1 special vise. Therefore, there wouldn't really be a need for the bulky accumulator and multiple ports. With ease of maintenance in mind, I designed this new control box and animated an exploding view, just for you :)\n\nWe also considered user design into lever v. wheel locking handles, table mounting scheme, and even the clamp/release button.`,
      leftImage: bladderImg,
      bottomImage: assembly2Img,
      gifOverlay: controlBoxGif,
      additionalContent: `Once again, it was time to rethink some things.\n\nAfter speaking with our users and showing them this design, they were absolutely struck by the long dangly tubes screaming for someone to trip on them. Why, they wondered aloud to us, why would you increase risk of leakage and the need for users to manage all that tubing? Also, why rely on the user to use up their own good compressor when such a small volume of air needs to be sucked? Based on real-estate in our housing and the desire to maintain conventional vise height & form factor, we decided to fully integrate our control box and vacuum pump ("CB") in the top configuration show right.`,
      rightImage: iteration2RightImg,
      sandBackground: sandBg
    },
    {
      title: 'Final Prototype',
      layout: 'revise-section-6',
      customClass: 'revise-sand-bg',
      content: `After tedious troubleshooting, routing, bending, flaring, and testing of our pneumatics box in a laser-cut housing for fit, I was finally able to get something working. I designed some mounts and coordinated with the team and shop to waterjet, bend, weld, assemble, and paint the vise housing. Many vacuum chambers with water were used in the process of making the device airtight. We then added our "suspension" to the jaws and fabricated the bladder hardware with pink granules. Fun fact: we found that the granules that worked best were those playground rubber flooring bits. Luckily, they come in fun colors. During the final reveal, we attached our giant 0.5 meter long lead screw. Here is my hand feeling how tight a donated metal cast from the foundry fit.\n\n<em style="color: #ff69b4; font-style: italic;"><a href="http://designed.mit.edu/new/view.html?year=2021&team=pink" target="_blank" rel="noopener noreferrer" style="color: #ff69b4;">You can see official documentation of our work here!</a></em>`,
      smallImage: finalSmallImg,
      largeRightImage: finalLargeImg
    }
  ],
  results: null
};

export default reVise;
