/**
 * Art Data - Centralized art pieces data
 * 
 * All art pieces with their metadata, ordered from newest (top) to oldest (bottom).
 * This separates data from presentation for better maintainability.
 */

// Import all art pieces (art35 at top, art1 at bottom)
import art35 from '../assets/art-data/art35.mp4';
import art34 from '../assets/art-data/art34.mp4';
// import art33 from '../assets/art-data/art33.png';
// import art32 from '../assets/art-data/art32.png';
import art31 from '../assets/art-data/art31.jpg';
import art30 from '../assets/art-data/art30.jpg';
import art29 from '../assets/art-data/art29.JPG';
import art28 from '../assets/art-data/art28.JPG';
// import art27 from '../assets/art-data/art27.JPG';
// import art26 from '../assets/art-data/art26.JPG';
import art25 from '../assets/art-data/art25.JPG';
// import art24 from '../assets/art-data/art24.JPG';
import art23 from '../assets/art-data/art23.mp4';
import art22 from '../assets/art-data/art22.jpg';
import art21 from '../assets/art-data/art21.jpg';
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
// import art3 from '../assets/art-data/art3.jpg';
import art2 from '../assets/art-data/art2.png';
import art1 from '../assets/art-data/art1.jpg';

// Art pieces data - ordered from 35 (top) to 1 (bottom)
export const artPieces = [
  { id: 35, src: art35, type: 'video', title: 'Untitled 35', description: 'Digital animation, 2024. Example description text for this piece.', medium: 'Digital Animation' },
  { id: 34, src: art34, type: 'video', title: 'Untitled 34', description: 'Digital animation, 2024. Example description text for this piece.', medium: 'Digital Animation' },
  // { id: 33, src: art33, type: 'image', title: 'Untitled 33', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  // { id: 32, src: art32, type: 'image', title: 'Untitled 32', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 31, src: art31, type: 'image', title: 'Untitled 31', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 30, src: art30, type: 'image', title: 'Untitled 30', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 29, src: art29, type: 'image', title: 'Untitled 29', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 28, src: art28, type: 'image', title: 'Untitled 28', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  // { id: 27, src: art27, type: 'image', title: 'Untitled 27', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  // { id: 26, src: art26, type: 'image', title: 'Untitled 26', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 25, src: art25, type: 'image', title: 'Untitled 25', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  // { id: 24, src: art24, type: 'image', title: 'Untitled 24', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 23, src: art23, type: 'video', title: 'Untitled 23', description: 'Digital animation, 2024. Example description text for this piece.', medium: 'Digital Animation' },
  { id: 22, src: art22, type: 'image', title: 'Untitled 22', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 21, src: art21, type: 'image', title: 'Untitled 21', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 20, src: art20, type: 'image', title: 'Untitled 20', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 19, src: art19, type: 'image', title: 'Untitled 19', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 18, src: art18, type: 'image', title: 'Untitled 18', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 17, src: art17, type: 'image', title: 'Untitled 17', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  // { id: 16, src: art16, type: 'image', title: 'Untitled 16', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 15, src: art15, type: 'gif', title: 'Untitled 15', description: 'Animated GIF, 2024. Example description text for this piece.', medium: 'Animated GIF' },
  { id: 14, src: art14, type: 'gif', title: 'Untitled 14', description: 'Animated GIF, 2024. Example description text for this piece.', medium: 'Animated GIF' },
  { id: 13, src: art13, type: 'image', title: 'Untitled 13', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  // { id: 12, src: art12, type: 'image', title: 'Untitled 12', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 11, src: art11, type: 'image', title: 'Untitled 11', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  // { id: 10, src: art10, type: 'image', title: 'Untitled 10', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 9, src: art9, type: 'image', title: 'Untitled 9', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  // { id: 8, src: art8, type: 'image', title: 'Untitled 8', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 7, src: art7, type: 'image', title: 'Untitled 7', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 6, src: art6, type: 'image', title: 'Untitled 6', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 5, src: art5, type: 'image', title: 'Untitled 5', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 4, src: art4, type: 'image', title: 'Untitled 4', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  // { id: 3, src: art3, type: 'image', title: 'Untitled 3', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 2, src: art2, type: 'image', title: 'Untitled 2', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
  { id: 1, src: art1, type: 'image', title: 'Untitled 1', description: 'Digital art, 2024. Example description text for this piece.', medium: 'Digital Art' },
];

export default artPieces;

