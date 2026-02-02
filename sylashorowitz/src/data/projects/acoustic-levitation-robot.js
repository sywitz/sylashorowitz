import overviewImage from '../../assets/engineering-data/holosonic/20240906_144027.jpg';
import backgroundVideo from '../../assets/engineering-data/holosonic/Recording 2024-10-25 232352.mp4';
import screenshot20260123_193522 from '../../assets/engineering-data/holosonic/Screenshot 2026-01-23 193522.png';
import screenshot20260123_143615 from '../../assets/engineering-data/holosonic/Screenshot 2026-01-23 143615.png';
import fmatsImage from '../../assets/engineering-data/holosonic/fmats-10-1132585-g004.jpg';
import screenshot20260123_143136 from '../../assets/engineering-data/holosonic/Screenshot 2026-01-23 143136.png';
import gaussianTargetImage from '../../assets/engineering-data/holosonic/gaussian_target_image.jpg';
import mseIasaImage from '../../assets/engineering-data/holosonic/MSE_IASA_iterations.png';
import gaussianPhaseMap from '../../assets/engineering-data/holosonic/gaussian_phase_map.jpg';
import gaussianPressureField from '../../assets/engineering-data/holosonic/gaussian_pressure_field.jpg';
import recording20241025_233150 from '../../assets/engineering-data/holosonic/Recording 2024-10-25 233150.mp4';
import screenshot20260123_165038 from '../../assets/engineering-data/holosonic/Screenshot 2026-01-23 165038.png';
import screenshot20260123_165049 from '../../assets/engineering-data/holosonic/Screenshot 2026-01-23 165049.png';
import screenshot20260123_165058 from '../../assets/engineering-data/holosonic/Screenshot 2026-01-23 165058.png';
import applsciImage from '../../assets/engineering-data/holosonic/applsci-11-02981-g001.png';
import pxl20240702Video from '../../assets/engineering-data/holosonic/PXL_20240702_023119686.TS.mp4';
import img20240822_140611 from '../../assets/engineering-data/holosonic/IMG_20240822_140611.jpg';
import vid20240905_wa0010 from '../../assets/engineering-data/holosonic/VID-20240905-WA0010.mp4';
import fv5z7epkqux6ujb from '../../assets/engineering-data/holosonic/FV5Z7EPKQUX6UJB.png';
import vid20240910_wa0002 from '../../assets/engineering-data/holosonic/VID-20240910-WA0002.mp4';

export const acousticLevitationRobot = {
  id: 'acoustic-levitation-robot',
  title: 'ACOUSTIC LEVITATION ROBOT',
  subtitle: 'Personal project, 2025',
  featured: false,
  heroImage: null,
  overviewImage: overviewImage,
  description: `I am designing a particle manipulation device that emits high-frequency sound with precise wave characteristics. This ultrasonic technology is known as acoustic levitation or acoustophoresis … sometimes "acoustic tweezers." A sound wave applies forces on small particles, such as individual cells, UV-curable gels, and small electronic components. These forces can move, levitate, and reorganize the particles in mid-air with precision and gentleness.<br><br>Alongside my partner, I have built and modified a 3D ultrasonic array testing platform from <a href="https://www.instructables.com/SonicSurface-Phased-array-for-Levitation-Mid-air-T/" target="_blank" rel="noopener noreferrer">UpnaLab's open-source project</a> to simulate a scaled-up version of our end product. I simulated the acoustic field control strategy in Python by generating phase maps based on the desired acoustic pressure field.`,
  achievements: [
    'Built and modified a 3D ultrasonic array testing platform from open-source design',
    'Developed Python simulation for acoustic field control strategy',
    'Generated phase maps based on desired acoustic pressure fields'
  ],
  skills: [
    'Python',
    'FPGA',
    'CUDA',
    'Acoustic Field Simulation',
    'Iterative Angular Spectrum Method',
    'PCB Design',
    'Quartus II',
    'Laser Cutting',
    'Reflow Soldering',
    'Acoustophoresis'
  ],
  sections: [
    {
      title: 'Background and Design Considerations',
      content: ''
    },
    {
      content: `Conventional submicron manufacturing technologies are unable to manufacture complex, internal, and multi-material structures at high-resolution and speed. I am working toward the first-ever platform that uses 3D acoustic levitation in arbitrary configurations for additive manufacturing and assembly of small electromechanical devices. There are also some fun applications in <a href="https://doi.org/10.1063/1.5113467" target="_blank" rel="noopener noreferrer">volumetric, particle-based displays for XR</a>.`,
      images: [
        {
          src: screenshot20260123_193522,
          caption: 'Potential applications of Holosonic in additive manufacturing, embedded 3D printing, and MEMS fabrication.'
        }
      ]
    },
    {
      content: `How did I get this idea? I was in Denmark working at a company designing transducers and consumer sound systems (Fibona Acoustics) while my partner was working at a photonics lab in Denmark. Photonics sparked an interest in optical tweezers–holograms of light–which combined with my interest in acoustics. Do holograms of sound exist? Then, a groundbreaking paper was published by <a href="https://www.science.org/doi/epdf/10.1126/sciadv.adf6182" target="_blank" rel="noopener noreferrer">Melde et al., Compact holographic sound fields enable rapid one-step assembly of matter in 3D</a>, in 2023. Researchers in Germany demonstrated the most sophisticated one-step assembly of particles using an acoustic field. Notably, the ultrasonic transducers were orthogonal, allowing for more rapid computation and for acoustic configuration in compact applications where opposing arrays would not be feasible; in our case, assembly on the surface of a PCB, for example.`,
      images: [
        {
          src: screenshot20260123_143615,
          caption: '<a href="https://www.science.org/doi/epdf/10.1126/sciadv.adf6182" target="_blank" rel="noopener noreferrer">Melde et al.</a>'
        }
      ]
    },
    {
      content: `There is one major limitation with the setup from this paper: the holographic projection is fixed. The shape of the acoustic field is modulated by the 3D printed purple plates you can see in Figure B, mounted on the face of three large megahertz-scale transducers. These plates contain fixed extrusions that modify the phase of the acoustic wave front (Figure C) to produce the fixed pressure amplitude (Figure D). It is the phase of the acoustic wavefront that drives the pressure field, governed by the formula:<br><br><span class="formula">p(r) = A(r)e<sup>iφ(r)</sup></span><br><br>How else can we control phase, we wondered, such that we can manufacture any shape and assembly in any configuration, all in one or very few steps? We explored a variety of tunable metamaterials, materials that can arbitrarily manipulate acoustic fields, such as elastomers and piezoelectrics. But metamaterials seem redundant when we consider having an array of very small, megahertz transducers which can be phase-shifted directly through signal generation and control. We explored existing ultrasound imaging medical devices to understand how hundreds to thousands of channels can be controlled using time delays through FPGAs, pulse-width modulation, and drivers.`,
      images: [
        {
          src: fmatsImage,
          caption: '<a href="https://www.frontiersin.org/journals/materials/articles/10.3389/fmats.2023.1132585/full" target="_blank" rel="noopener noreferrer">Zabhihi et al.</a>'
        }
      ]
    },
    {
      content: `A key phenomena is that resolution in acoustic fields are limited by frequency (and the speed of sound in the medium). We know that sound frequency <em>f</em> and wavelength λ are tied by<br><br><span class="formula">λ = c/f</span><br><br>where <em>c</em> is the speed of sound in the medium.<br><br>A rule of thumb is that a particle must be less than half the wavelength of the acoustic field (well, you can go larger using <a href="https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.120.044301" target="_blank" rel="noopener noreferrer">acoustic vortices</a>, but that's a story for another day). Given the speed of sound in air as 343 m/s, we can expect an order of magnitude of 100s of MHz needed to reliably control micro-scale particles.<br><br>When it comes to holography, acoustic pressure is defined as:<br><br><span class="formula">p(r,t) = A(r)cos(ωt + φ(r))</span><br><br>the local wavevector is<br><br><span class="formula"><strong>k</strong> = ∇φ</span><br><br>with magnitude<br><br><span class="formula">|<strong>k</strong>| = 2π/λ = 2πf/c</span><br><br>Higher frequency and lower speed of sound of the medium (e.g. in air rather than water) means:<br><br>1. Larger <strong>k</strong><br>2. Steeper allowable phase gradients<br>3. Faster phase accumulation in space<br><br>Higher frequency means higher precision, but we also get more attenuation and more phase error, which will lead to challenges down the line. Design tradeoffs will need to be balanced depending on the scale, precision, allowable distance, and power requirements down the line.`
    },
    {
      title: 'Design, Simulation, and Modelling',
      layout: 'background-video',
      backgroundVideo: backgroundVideo,
      content: ''
    },
    {
      content: `We first explored finite element simulations of sound propagating through air from point sources. Below you can see our GPU-accelerated (CUDA) simulations of acoustic wavefront propagation over a series of time-steps in 3D.`,
      image: screenshot20260123_143136
    },
    {
      content: `While this is useful for understanding acoustic attenuation and interference, it is far too high-fidelity and computationally taxing as a control strategy.<br><br>We modelled the Iterative angular spectrum approach (IASA) using a gradient-based design in 3D that computes the optimum pressure and phase distributions assuming we have a single transducer that can emit a wavefront of any phase variation. The mathematical principle is to minimize error between the target and reconstructed image using Fourier transforms.<br><br>We start by defining a placeholder Gaussian function to represent the amplitude in the image plane. We can then begin the IASA by the following steps.`,
      image: gaussianTargetImage,
      customClass: 'gaussian-image-section'
    },
    {
      title: 'IASA Algorithm Steps',
      subsections: [
        {
          title: '1) Define wavelength and wavenumber',
          content: `Define the acoustic wavelength and wavenumber (sets the wave scale).<br><br><span class="formula">λ = c/f, &nbsp;&nbsp;&nbsp; k<sub>m</sub> = 2π/λ</span><br><br>where <em>c</em> is the speed of sound in the propagation medium, <em>f</em> is the acoustic frequency, λ is the wavelength in the medium, and <em>k<sub>m</sub></em> is the wavenumber in the medium.`
        },
        {
          title: '2) Initialize hologram-plane field',
          content: `Initialize the hologram-plane complex pressure field (starting field to be optimized).<br><br><span class="formula">p<sub>h</sub>(x,y) = A<sub>0</sub>(x,y) e<sup>iφ<sub>h</sub>(x,y)</sup></span><br><br>where <em>p<sub>h</sub>(x,y)</em> is the complex pressure at the hologram plane, <em>A<sub>0</sub>(x,y)</em> is the initial amplitude, and <em>φ<sub>h</sub>(x,y)</em> is the hologram phase.`
        },
        {
          title: '3) Forward propagation (ASM)',
          content: `Forward propagate from the hologram plane to the image plane using the angular spectrum method.<br><br><span class="formula">P<sub>i</sub>(x,y;z) = ℱ<sup>-1</sup>{ℱ{p<sub>h</sub>(x,y)} e<sup>i k<sub>z</sub>(k<sub>x</sub>,k<sub>y</sub>) z</sup>}</span><br><br><span class="formula">k<sub>z</sub>(k<sub>x</sub>,k<sub>y</sub>) = √(k<sub>m</sub><sup>2</sup> - k<sub>x</sub><sup>2</sup> - k<sub>y</sub><sup>2</sup>)</span><br><br>where <em>P<sub>i</sub>(x,y;z)</em> is the complex pressure at the image plane, <em>z</em> is the propagation distance, ℱ{·}, ℱ<sup>-1</sup>{·} are 2D FFT and inverse FFT, <em>k<sub>x</sub>, k<sub>y</sub></em> are spatial frequency coordinates, and <em>k<sub>z</sub></em> is the axial wavenumber.`
        },
        {
          title: '4) Enforce target amplitude constraint',
          content: `Enforce the target amplitude at the image plane (keep phase, replace amplitude).<br><br><span class="formula">P<sub>i</sub><sup>(new)</sup>(x,y) = A<sub>target</sub>(x,y) e<sup>i ∠P<sub>i</sub>(x,y)</sup></span><br><br>where <em>P<sub>i</sub><sup>(new)</sup>(x,y)</em> is the constrained image-plane field, <em>A<sub>target</sub>(x,y)</em> is the desired image-plane amplitude, and <em>∠P<sub>i</sub>(x,y)</em> is the phase of the propagated field.`
        },
        {
          title: '5) Backward propagation (ASM) and phase update',
          content: `Backward propagate from the image plane back to the hologram plane (update hologram phase).<br><br><span class="formula">P<sub>h</sub>(x,y) = ℱ<sup>-1</sup>{ℱ{P<sub>i</sub><sup>(new)</sup>(x,y)} e<sup>-i k<sub>z</sub>(k<sub>x</sub>,k<sub>y</sub>) z</sup>}</span><br><br><span class="formula">φ<sub>h</sub>(x,y) = ∠P<sub>h</sub>(x,y)</span><br><br>where <em>P<sub>h</sub>(x,y)</em> is the back-propagated hologram-plane field, <em>φ<sub>h</sub>(x,y)</em> is the updated hologram phase, and <em>z</em> is the same propagation distance used in the forward step.`
        },
        {
          title: '6) Phase-to-thickness mapping',
          content: `Convert phase difference to a thickness correction (maps phase to fabrication geometry).<br><br><span class="formula">ΔT(x,y) = (φ<sub>target</sub>(x,y) - φ<sub>h</sub>(x,y)) / (k<sub>m</sub> - k<sub>h</sub>), &nbsp;&nbsp;&nbsp; T(x,y) = T<sub>0</sub> - ΔT(x,y)</span><br><br>where <em>ΔT(x,y)</em> is the thickness change, <em>φ<sub>target</sub>(x,y)</em> is the desired phase, <em>k<sub>m</sub></em> is the wavenumber in the medium, <em>k<sub>h</sub></em> is the wavenumber in the hologram material, <em>T(x,y)</em> is the updated hologram thickness map, and <em>T<sub>0</sub></em> is a base (starting) thickness.`
        },
        {
          title: '7) Apply transmission coefficient',
          content: `Apply transmission through the hologram (accounts for amplitude loss vs thickness).<br><br><span class="formula">p̂<sub>h</sub>(x,y) = √(α<sub>T</sub>(x,y)) A<sub>0</sub>(x,y) e<sup>iφ<sub>h</sub>(x,y)</sup></span><br><br>where <em>p̂<sub>h</sub>(x,y)</em> is the updated hologram-plane field for the next iteration, <em>α<sub>T</sub>(x,y)</em> is the transmission coefficient (impedance/thickness model), <em>A<sub>0</sub>(x,y)</em> is the incident amplitude at the hologram plane, and <em>φ<sub>h</sub>(x,y)</em> is the current hologram phase.`
        },
        {
          title: '8) Iterate',
          content: `Iterate until convergence (repeat propagation + constraint + update).<br><br><span class="formula">Repeat steps 3–7 for n = 1, …, N<sub>iter</sub></span><br><br>where <em>N<sub>iter</sub></em> is the number of iterations.`
        }
      ],
      content: `Below are the results of the IASA algorithm:`,
      layout: 'side-by-side-images',
      sideBySideImages: [
        {
          image: mseIasaImage,
          caption: ''
        },
        {
          image: gaussianPhaseMap,
          caption: ''
        }
      ]
    },
    {
      title: 'Pressure Field Resolution',
      content: `Once we have the optimized hologram phase from IASA, we can resolve the pressure field by calculating the angular spectrum at the desired plane away from the face of a transducer and taking the inverse Fourier transform. This allows us to visualize and validate the acoustic pressure distribution in 3D space.`,
      subsections: [
        {
          title: '1) Define hologram-plane pressure field',
          content: `Define the complex acoustic pressure field at the hologram plane.<br><br><span class="formula">p<sub>h</sub>(x,y) = e<sup>iφ<sub>h</sub>(x,y)</sup></span><br><br>where <em>p<sub>h</sub>(x,y)</em> is the complex pressure at the hologram plane and <em>φ<sub>h</sub>(x,y)</em> is the hologram phase map.`
        },
        {
          title: '2) Propagate field along z (ASM)',
          content: `Propagate the hologram-plane field to a given axial position z using the angular spectrum method.<br><br><span class="formula">P(x,y;z) = ℱ<sup>-1</sup>{ℱ{p<sub>h</sub>(x,y)} e<sup>i k<sub>z</sub>(k<sub>x</sub>,k<sub>y</sub>) z</sup>}</span><br><br><span class="formula">k<sub>z</sub>(k<sub>x</sub>,k<sub>y</sub>) = √(k<sup>2</sup> - k<sub>x</sub><sup>2</sup> - k<sub>y</sub><sup>2</sup>)</span><br><br>where <em>P(x,y;z)</em> is the complex pressure field at depth <em>z</em>, <em>k</em> is the medium wavenumber, <em>k<sub>x</sub>, k<sub>y</sub></em> are spatial frequency coordinates, and <em>k<sub>z</sub></em> is the axial wavenumber.`
        },
        {
          title: '3) Recover real-space pressure',
          content: `Transform the propagated angular spectrum back into real space.<br><br><span class="formula">p(x,y;z) = ℱ<sup>-1</sup>{P(x,y;z)}</span><br><br>where <em>p(x,y;z)</em> is the real-space complex pressure field.`
        },
        {
          title: '4) Compute pressure magnitude',
          content: `Compute the acoustic pressure magnitude at each spatial location.<br><br><span class="formula">|p(x,y;z)| = √(ℜ(p(x,y;z))<sup>2</sup> + ℑ(p(x,y;z))<sup>2</sup>)</span><br><br>where <em>|p(x,y;z)|</em> is the acoustic pressure amplitude.`
        },
        {
          title: '5) Sample the 3D pressure field',
          content: `Sample the pressure field across x, y, and z to build a 3D dataset.<br><br><span class="formula">(x,y,z,|p(x,y;z)|)</span><br><br>where <em>x,y</em> are transverse spatial coordinates, <em>z</em> is the axial propagation distance, and <em>|p|</em> is the pressure magnitude.`
        },
        {
          title: '6) Visualize the pressure field',
          content: `Visualize the 3D acoustic pressure field using a color-mapped scatter plot.<br><br><span class="formula">Plot (x,y,z) colored by |p(x,y;z)|</span><br><br>where <em>|p|</em> controls color intensity in the visualization.`
        }
      ],
      layout: 'side-by-side-images',
      sideBySideImages: [
        {
          image: gaussianPressureField,
          caption: ''
        },
        {
          video: recording20241025_233150,
          caption: '',
          loop: true,
          muted: true,
          controls: false,
          autoPlay: true
        }
      ]
    },
    {
      content: `The model we developed utilizes a single hologram, which can also be approximated as an array of transducers on a single plane and does not provide proper force balancing in 3D space. We aim to expand this model to include at least three orthogonal angles for true 3D control. The positioning and angles of the array can be optimized for compactness, speed, and control.<br><br><span class="future-work-highlight">Future design work will involve modelling tradeoffs related to attenuation and acoustophoretic force depending on particle mass at the micron and submicron scale needed for MEMS manufacturing and assembly at different transducer frequencies. Near-field effects near the plane of the array should be incorporated, potentially using our GPU-accelerated physics simulations shown above or available modelling software like COMSOL. Modelling should also incorporate expected hardware limitations such as power, phase control, and real-time computational speed.</span><br><br>Off-the-shelf megahertz-scale transducers at the size needed for our arrays are limited. The most realistic approach is to manufacture custom piezoelectric transducers to assemble into arrays in our desired configuration. Below is a design mockup I generated for the general form-factor assuming three arrays.`,
      layout: 'side-by-side-images',
      sideBySideImages: [
        {
          image: screenshot20260123_165038,
          caption: ''
        },
        {
          image: screenshot20260123_165049,
          caption: ''
        },
        {
          image: screenshot20260123_165058,
          caption: ''
        }
      ]
    },
    {
      title: 'Prototyping'
    },
    {
      content: `The minimum viable product we envision will contain small, custom surface-mounted MHz transducers in a single direction to allow for manipulation of small electronics on surfaces. However, we need a test platform to develop our control strategy and understand the required hardware cheaply, without the challenges of MHz scale acoustophoresis. Therefore, we started by building a this opposing array design of 512 transducers from an open-source project by <a href="https://www.instructables.com/SonicSurface-Phased-array-for-Levitation-Mid-air-T/" target="_blank" rel="noopener noreferrer">UpnaLab</a>.<br><br>The design consists of two opposing PCBs with 256 ultrasonic emitters on each controlled by a cheap Altera FPGA. To achieve this huge array, each pair of two transducers are driven by high-speed MOSFET drivers in an SOIC-8 package. 32 shift registers each control four drivers, which expand the number of outputs available from the FPGA with minimal pins using serial data chaining. The board requires 18 V for power and 5 V for logic. An overview of the schematic from <a href="https://www.mdpi.com/2076-3417/11/7/2981" target="_blank" rel="noopener noreferrer">Morales et al.</a> is shown.<br><br>Phase and amplitude control are handled digitally inside the FPGA using the internal clock. Each transducer channel is assigned a phase delay and amplitude value, which determine when the 40 kHz drive signal is applied and for how long within each cycle. Phase is controlled by shifting the timing of the square-wave output in discrete steps across the ultrasonic period, while amplitude is controlled by enabling or disabling pulses over multiple cycles. These values are calculated externally and streamed to the FPGA.`,
      image: applsciImage
    },
    {
      content: `We got the custom PCBs made using JLCPCB from the open-source file and carefully reflow soldered two of them.`,
      layout: 'text-with-side-images',
      sideImages: [
        {
          type: 'video',
          src: pxl20240702Video,
          loop: true,
          muted: true,
          controls: false,
          autoPlay: true
        }
      ]
    },
    {
      content: `I laser cut a spacer so that the transducers would sit properly on the PCB before soldering each one. Each transducer has to be painstakingly checked for polarity.`,
      layout: 'text-with-side-images',
      sideImages: [img20240822_140611]
    },
    {
      content: `Once both boards were soldered, I had to do a bit of hardware troubleshooting with my power supply and learned some soldering lessons while checking that each transducer was emitting 40 kHz at the expected amplitude.`,
      layout: 'background-video',
      backgroundVideo: vid20240905_wa0010
    },
    {
      content: `I designed a nice acrylic mount for the PCBs which I lasercut and assembled with weld-on in MIT's Metropolis, using my shop mentor access.`,
      layout: 'text-with-side-images',
      sideImages: [overviewImage]
    },
    {
      content: `We used an arduino nano to act as a USB-to-serial adapter from the open-source Java control software.`,
      image: fv5z7epkqux6ujb
    },
    {
      content: `After programming and troubleshooting the FPGA in Quartus II, we were able to achieve levitation! Interestingly, my phone microphone picks up the ultrasonic sound, which is inaudible and above human hearing, and it is audible in this video as noise.`,
      layout: 'background-video',
      backgroundVideo: vid20240910_wa0002
    },
    {
      content: '',
      video: {
        type: 'video',
        src: vid20240910_wa0002,
        loop: false,
        muted: false,
        controls: true,
        autoPlay: false
      },
      customClass: 'video-only-section'
    },
    {
      title: 'Next Steps',
      content: `<span class="future-work-highlight">We plan to refine our current setup to function reliably with both opposing boards and program our own FPGA control software in Python to utilize the iterative angular spectrum method, while in parallel, developing custom PCBs that utilize at least three orthogonal arrays rather than opposing arrays–closer to our proposed product. We will iterate on the best array configuration at the larger, 40 kHz scale.<br><br>We will also be working with custom piezo manufacturers to develop Prototype #2: our custom, precise MHz system with refined hardware. Prototype #2 design will be informed by modelling and optimizing the design tradeoffs described in the Design, Simulation, and Modelling section.</span> Look forward to this page for further developments in this complex, exciting project!`
    }
  ],
  results: null
};

export default acousticLevitationRobot;
