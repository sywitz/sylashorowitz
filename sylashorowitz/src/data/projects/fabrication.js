// Import images
import previewImage from '../../assets/engineering-data/fabrication/IMG_20251224_202427_587.jpg';
import ladderClampedImage from '../../assets/engineering-data/fabrication/Screenshot 2026-01-26 173233.png';
import ladderFinalImage from '../../assets/engineering-data/fabrication/PXL_20250222_165352361.jpg';
import deskScrapwoodImage from '../../assets/engineering-data/fabrication/PXL_20230913_014320441.jpg';
import deskBiscuitJoined1 from '../../assets/engineering-data/fabrication/IMG_20230925_212327.jpg';
import deskBiscuitJoined2 from '../../assets/engineering-data/fabrication/PXL_20230929_023010549.jpg';
import deskBiscuitJoined3 from '../../assets/engineering-data/fabrication/PXL_20230929_023043103.jpg';
import deskStained1 from '../../assets/engineering-data/fabrication/PXL_20231013_022115432.jpg';
import deskStained2 from '../../assets/engineering-data/fabrication/PXL_20231013_022058908.jpg';
import deskPipe1 from '../../assets/engineering-data/fabrication/IMG_20251224_202415_417.jpg';
import deskPipe2 from '../../assets/engineering-data/fabrication/IMG_20231018_012841.jpg';
import deskFinalImage from '../../assets/engineering-data/fabrication/IMG_20231020_192901_01.jpg';
import deskInceptionImage from '../../assets/engineering-data/fabrication/PXL_20260126_230935391.jpg';
import bugWelding1 from '../../assets/engineering-data/fabrication/IMG_20251224_202427_587.jpg';
import bugWelding2 from '../../assets/engineering-data/fabrication/PXL_20230927_234830115.jpg';
import bugWelding3 from '../../assets/engineering-data/fabrication/PXL_20230928_003401340.jpg';
import bugAluminumFace from '../../assets/engineering-data/fabrication/PXL_20231014_000858432.jpg';
import bugLargeSculpture from '../../assets/engineering-data/fabrication/PXL_20231014_002025873.jpg';
import bugBurning1 from '../../assets/engineering-data/fabrication/PXL_20231111_232248710.TS.mp4';
import bugBurning2 from '../../assets/engineering-data/fabrication/PXL_20231111_232558773.TS.mp4';
import bugAftermath from '../../assets/engineering-data/fabrication/PXL_20231111_234708221.jpg';
import catPencilHolder from '../../assets/engineering-data/fabrication/IMG_0405 Edited.jpg';
import sokkaBoomerangImage from '../../assets/engineering-data/fabrication/PXL_20221013_213135656~2.jpg';
import sokkaBoomerangVideo from '../../assets/engineering-data/fabrication/VID_134240810_022251_884.mp4';
import frogSewing from '../../assets/engineering-data/fabrication/PXL_20221117_050254888.jpg';

export const fabrication = {
  id: 'fabrication',
  title: 'FABRICATION: WOODWORKING, WELDING, AND MORE',
  subtitle: 'Personal projects, 2023-2025',
  featured: false,
  heroImage: null,
  overviewImage: null,
  description: `I designed and built my own desk completely from old scrapwood and pipes, TIG welded and riveted giant bug sculptures to set on fire, made Sokka's boomerang from Avatar the Last Airbender, and more!`,
  achievements: [
    'Built custom L-shaped desk from scrapwood using biscuit joining and steel pipe base',
    'TIG welded and riveted large-scale bug sculptures for community art burn event',
    'Created various woodworking and fabrication projects including ladder shelf, cat pencil holder, and prop replicas'
  ],
  skills: [
    'Woodworking',
    'TIG Welding',
    'Riveting',
    'Biscuit Joining',
    'Furniture Design',
    'Metalworking',
    'Sewing',
    'Fabrication',
    'Hand Tools',
    'Power Tools',
    'Staining',
    'Finishing'
  ],
  sections: [
    {
      title: 'Ladder shelf (2025)',
      content: `I built this wooden ladder shelf of my dreams, in order to have a dream ladder shelf and to bond with my 89-year-old, crafty grandpa!<br><br>I don't have a ton of progress pics, but it's pretty straightforward. Here's everything clamped together, prestain:`,
      layout: 'side-by-side-images',
      customClass: 'ladder-shelf-close',
      showArrow: false,
      sideBySideImages: [
        {
          image: ladderClampedImage,
          caption: 'Everything clamped together, prestain'
        },
        {
          image: ladderFinalImage,
          caption: 'Final product, stained and in my apartment'
        }
      ]
    },
    {
      title: 'Building my own desk entirely from scrapwood (2023)',
      content: `My roommate in Providence worked at Home Depot and a ton of plywood scrap rotting in the backyard. I carted them all over to the Brown Design Workshop at Brown University and planed each piece to the same dimensions, removing debris and decay.<br><br>For the tabletop, I biscuit joined each piece and wood glued them together. I sanded it down smoothly and applied wood conditioner. Look at that nice grain!<br><br>Then I applied some nice dark stain.<br><br>For the base, I purchase some 1" black steel pipe. Here's what we got:<br><br>And the final product… a perfectly sized, large L-shaped desk, customized to my desires!`,
      layout: 'fabrication-desk-grid',
      deskGridImages: [
        {
          image: deskScrapwoodImage,
          caption: 'Scrapwood pieces before planing'
        },
        {
          image: deskBiscuitJoined1,
          caption: 'Sanding after planing, cutting, and biscuit joining'
        },
        {
          image: deskBiscuitJoined2,
          caption: 'Grain detail after conditioning'
        },
        {
          image: deskBiscuitJoined3,
          caption: 'Look at that grain!'
        },
        {
          image: deskStained1,
          caption: 'Staining process'
        },
        {
          image: deskStained2,
          caption: 'Stained surface'
        },
        {
          image: deskPipe1,
          caption: 'Steel pipe assembly'
        },
        {
          image: deskPipe2,
          caption: 'Pre-screwing tabletop to base'
        }
      ],
      deskFinalImage: {
        image: deskFinalImage,
        caption: 'Final L-shaped desk'
      },
      deskSideImage: {
        image: deskInceptionImage,
        caption: 'Inception! Here\'s me working on this portfolio page right now at my well lived-in desk to this day! Now you can understand why I need such a giant, L-shaped desk! The mess on the right side is a hydraulic robot arm I\'m assembling. You can see that I have moved (a few times, actually) since that first photo. I chose pipes so my desk would be modular and easy to store and transport, while having a cool, sturdy and industrial look.'
      }
    },
    {
      title: 'Volunteering at The Steelyard (2023)',
      content: `Every year, the Providence Steelyard welds giant sculptures and sets 'em on fire. During 2023, while living in providence, I helped fabricate some large bug sculptures for their bug-themed burn. We were given a basic idea of the desired design, with creative freedom to throw together any scrap parts we can find and fabricate through whatever methods we chose. I learned TIG welding to assemble the bug's steel body.`,
      subsections: [
        {
          content: `Here are some snippets from the process of building the bug's body:`,
          layout: 'side-by-side-images',
          showArrow: false,
          sideBySideImages: [
            {
              image: bugWelding1,
              caption: ''
            },
            {
              image: bugWelding2,
              caption: ''
            },
            {
              image: bugWelding3,
              caption: ''
            }
          ]
        },
        {
          content: `I also helped cut and rivet pieces for this aluminum bug "Face":`,
          layout: 'side-by-side-images',
          showArrow: false,
          customClass: 'steelyard-small-row',
          sideBySideImages: [
            {
              image: bugAluminumFace,
              caption: 'Aluminum bug face with rivets'
            },
            {
              image: bugLargeSculpture,
              caption: 'Large bug sculpture'
            }
          ]
        },
        {
          content: `Some videos from the burning, no sound, looping, no play button:`,
          layout: 'steelyard-videos',
          firstVideo: {
            video: bugBurning1,
            autoPlay: true,
            loop: true,
            muted: true,
            controls: false,
            caption: ''
          },
          secondRow: [
            {
              video: bugBurning2,
              autoPlay: true,
              loop: true,
              muted: true,
              controls: false,
              caption: ''
            },
            {
              image: bugAftermath,
              caption: 'Bug sculpture after burning'
            }
          ]
        }
      ]
    },
    {
      title: 'Cat pencil holder (2022)',
      content: `I toured my friend around the shop and we had an idea to make this cat pencil holder on the bandsaw. There is a hole in the tail to rest your pen through on the right side, which makes it look like the cat is pawing at your pencil.`,
      customClass: 'fabrication-small-single-image',
      images: [
        {
          src: catPencilHolder,
          caption: 'Cat pencil holder'
        }
      ]
    },
    {
      title: "Sokka's Boomerange (2022)",
      content: `Following my frog, I used my downtime as a shop mentor to throw together this replica of Sokka's boomerang from Avatar the Last Airbender as a halloween prop in the bandsaw and drill press. I'll spare you the costume I sewed from scratch, too!`,
      layout: 'side-by-side-images',
      customClass: 'fabrication-small-image',
      showArrow: false,
      sideBySideImages: [
        {
          image: sokkaBoomerangImage,
          caption: "Sokka's boomerang replica"
        },
        {
          video: sokkaBoomerangVideo,
          autoPlay: true,
          loop: true,
          muted: true,
          controls: false,
          caption: 'Boomerang in action'
        }
      ]
    },
    {
      title: 'Frog sewing project! (2022)',
      content: `I used my own pattern and sewed this frog, based on frog and toad, as my first ever sewing project in MIT Metropolis. I was inspired to do this shortly after becoming an MIT Project Manus shop mentor and taking a sewing class.`,
      customClass: 'fabrication-small-single-image',
      images: [
        {
          src: frogSewing,
          caption: 'Hand-sewn frog plushie'
        }
      ]
    }
  ],
  results: null
};

export default fabrication;

