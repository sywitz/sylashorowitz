/**
 * Art Data - Centralized art pieces data
 * 
 * All art pieces with their metadata, ordered from newest (top) to oldest (bottom).
 * This separates data from presentation for better maintainability.
 */

// Import all art pieces (art35 at top, art1 at bottom)
import art35 from '../assets/art-data/art35.mp4';
import art34 from '../assets/art-data/art34.mp4';
import walden from '../assets/art-data/Walden.jpg';
// import art33 from '../assets/art-data/art33.png';
// import art32 from '../assets/art-data/art32.png';
import art31 from '../assets/art-data/art31.jpg';
import here from '../assets/art-data/Here.jpg';
import howl from '../assets/art-data/Howl.jpg';
import oakland from '../assets/art-data/Oakland.jpg';
import art30 from '../assets/art-data/art30.jpg';
import art29 from '../assets/art-data/art29.JPG';
import art28 from '../assets/art-data/art28.JPG';
// import art27 from '../assets/art-data/art27.JPG';
// import art26 from '../assets/art-data/art26.JPG';
import art25 from '../assets/art-data/art25.JPG';
// import art24 from '../assets/art-data/art24.JPG';
import art23 from '../assets/art-data/art23.mp4';
import art22 from '../assets/art-data/art22.jpg';
// import art21 from '../assets/art-data/art21.jpg';
import art20 from '../assets/art-data/art20.PNG';
import art19 from '../assets/art-data/art19.PNG';
import art18 from '../assets/art-data/art18.PNG';
import art17 from '../assets/art-data/art17.PNG';
// import art16 from '../assets/art-data/art16.PNG';
import art15 from '../assets/art-data/art15.GIF';
import art14 from '../assets/art-data/art14.gif';
import art13 from '../assets/art-data/art13.jpg';
// import art12 from '../assets/art-data/art12.jpg';
import art11 from '../assets/art-data/art11.jpg';
// import art10 from '../assets/art-data/art10.png';
import art9 from '../assets/art-data/art9.jpg';
// import art8 from '../assets/art-data/art8.jpg';
import art7 from '../assets/art-data/art7.jpg';
import art6 from '../assets/art-data/art6.jpg';
import art5 from '../assets/art-data/art5.jpg';
import art4 from '../assets/art-data/art4.jpg';
import fairies from '../assets/art-data/Fairies.jpg';
// import art3 from '../assets/art-data/art3.jpg';
import art2 from '../assets/art-data/art2.png';
import art1 from '../assets/art-data/art1.jpg';

// Art pieces data - ordered from newest (top) to oldest (bottom)
export const artPieces = [
  { id: 39, src: art35, type: 'video', title: 'Jellyfish Lamp', description: 'Mechanical sculpture, 2025. A motor in the base drives the frame to bow like a jellyfish and tentacles to move.' },
  { id: 38, src: art34, type: 'video', title: 'Mobile Hologram', description: 'Extended reality, 2025. This is a simple plexiglas object that can be placed on a phone to create a hologram.' },
  { id: 37, src: art23, type: 'video', title: 'Portrait of My Friend, Part 2', description: 'Acrylic and embedded LEDs, 2025.' },
  { id: 36, src: art22, type: 'image', title: 'Portrait of My Friend, Part 1', description: 'Acrylic, 2022.' },
  { id: 35, src: walden, type: 'image', title: 'Transcendental', description: 'Watercolor, 2025. A study of Walden Pond.' },
  // { id: 33, src: art33, type: 'image', title: 'Untitled 33', description: 'Digital art, 2024. Example description text for this piece.' },
  // { id: 32, src: art32, type: 'image', title: 'Untitled 32', description: 'Digital art, 2024. Example description text for this piece.' },
  { id: 34, src: art31, type: 'image', title: 'Woodland Heartbreak', description: 'Monotype printmaking, 2022. I used a subtractive process to create this image by rolling ink onto a gelli plate and putting it through a monotype press.' },
  { id: 33, src: here, type: 'image', title: 'Here', description: 'Watercolor, 2023. Concept art style.' },
  { id: 32, src: howl, type: 'image', title: 'Howl and Sophie', description: 'Gouache, 2023. Inspired by Howl\'s Moving Castle.' },
  { id: 31, src: oakland, type: 'image', title: 'Oakland in Twilight', description: 'Digital painting, 2021. A study of twilight at a beach in Rhode Island.' },
  { id: 30, src: art30, type: 'image', title: 'Still Life', description: 'Pastel and gouache, 2022. A study from a course on mixed media techniques.' },
  { id: 29, src: art29, type: 'image', title: 'Honey, I Fixed the Hole', description: 'Mural with acrylic on spackle on a void to the unknown, 2022. There was a hole in the wall of our bathroom, so I made a portal to another dimension.' },
  { id: 28, src: art28, type: 'image', title: 'Portrait of Kehlani', description: 'Digital painting, 2022.' },
  // { id: 27, src: art27, type: 'image', title: 'Untitled 27', description: 'Digital art, 2024. Example description text for this piece.' },
  // { id: 26, src: art26, type: 'image', title: 'Untitled 26', description: 'Digital art, 2024. Example description text for this piece.' },
  { id: 27, src: art25, type: 'image', title: 'Glitz', description: 'Digital painting, 2022.' },
  // { id: 24, src: art24, type: 'image', title: 'Untitled 24', description: 'Digital art, 2024. Example description text for this piece.' },
  // { id: 21, src: art21, type: 'image', title: 'Untitled 21', description: 'Digital art, 2024. Example description text for this piece.' },
  { id: 26, src: art20, type: 'image', title: 'Water Protector', description: 'Digital painting, 2022. An Anishinaabe "water protector" protesting the Line 3 pipeline.' },
  { id: 25, src: art19, type: 'image', title: 'Nonexistent Friend: Cambridgeside Canal', description: 'Digital painting, 2022. Because birds aren\'t real.' },
  { id: 24, src: art18, type: 'image', title: 'Be The Cowboy', description: 'Digital painting, 2021. A portrait of musical artist, Mitski.' },
  { id: 23, src: art17, type: 'image', title: 'Kahlo and Vargas', description: 'Digital painting, 2021. A color rendition of a black and white photo of two lovers from the 1940s.' },
  // { id: 16, src: art16, type: 'image', title: 'Untitled 16', description: 'Digital art, 2024. Example description text for this piece.' },
  { id: 22, src: art15, type: 'gif', title: 'The Florist After Hours', description: 'Digital animation, 2021.' },
  { id: 21, src: art14, type: 'gif', title: 'Extraction', description: 'Digital animation, 2020. An animation in which aliens mine future human cities for elemental resources.' },
  { id: 20, src: art13, type: 'image', title: 'Melodrama Reproduction', description: 'Oil painting, 2021. Based on original album cover art by Sam McKinniss of Lorde\'s album, Melodrama.' },
  // { id: 12, src: art12, type: 'image', title: 'Untitled 12', description: 'Digital art, 2024. Example description text for this piece.' },
  { id: 19, src: art11, type: 'image', title: 'Tunnel 66', description: 'Digital art, 2020. A pandemic project of virtual, connected murals with the MIT community.', link: 'http://tunnel.mit.edu/' },
  // { id: 10, src: art10, type: 'image', title: 'Untitled 10', description: 'Digital art, 2024. Example description text for this piece.' },
  { id: 18, src: art9, type: 'image', title: 'Tell Me I\'m Pretty Reproduction', description: 'Oil painting, 2020. Based on original album cover art from Cage the Elephant\'s album, Tell Me I\'m Pretty.' },
  // { id: 8, src: art8, type: 'image', title: 'Untitled 8', description: 'Digital art, 2024. Example description text for this piece.' },
  { id: 17, src: art7, type: 'image', title: 'Disney Wedding', description: 'Acrylic painting, 2019. A commmission for a friend\'s wedding.' },
  { id: 16, src: art6, type: 'image', title: 'Nostalgia and Now', description: 'Mural with latex paint, 2019. I painted this mural which is now displayed at MIT\'s Banana Lounge.', link: 'http://borderline.mit.edu/projects.html#banana' },
  { id: 15, src: art5, type: 'image', title: 'Automated', description: 'Oil and acrylic painting, 2018.' },
  { id: 14, src: art4, type: 'image', title: 'Study of a Can', description: 'Graphite, 2018. Technical study.' },
  { id: 13, src: fairies, type: 'image', title: 'Where Do the Fairies Live?', description: 'Multimedia sculpture, 2017. An architectural model of a fairy\'s treehouse.' },
  // { id: 3, src: art3, type: 'image', title: 'Untitled 3', description: 'Digital art, 2024. Example description text for this piece.' },
  { id: 12, src: art2, type: 'image', title: 'Women in Science and Engineering Logo', description: 'Digital art, 2016. Logo I designed as captain of my high school First Tech Challenge (FTC) robotics team.' },
  { id: 11, src: art1, type: 'image', title: 'Decomposition', description: 'Acrylic painting, 2016.' },
];

export default artPieces;

