import sharp from 'sharp';
import { join } from 'path';

const projectRoot = join(process.cwd());
const inputPath = join(projectRoot, 'public', 'Profile_pic.png');
const outputPath = join(projectRoot, 'public', 'favicon.png');

console.log('Input path:', inputPath);
console.log('Output path:', outputPath);

async function makeRoundFavicon() {
  try {
    const metadata = await sharp(inputPath).metadata();
    const size = Math.min(metadata.width, metadata.height);
    
    const mask = Buffer.from(
      `<svg width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
      </svg>`
    );
    
    await sharp(inputPath)
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .composite([{
        input: mask,
        blend: 'dest-in'
      }])
      .png()
      .toFile(outputPath);
    
    console.log(`Round favicon created successfully!`);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

makeRoundFavicon();




