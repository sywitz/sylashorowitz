import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, 'src', 'assets', 'images', 'favicon', 'Profile_pic.png');
const outputPath = join(__dirname, 'public', 'favicon.png');

async function makeRoundFavicon() {
  try {
    // Get image metadata to determine size
    const metadata = await sharp(inputPath).metadata();
    const size = Math.min(metadata.width, metadata.height);
    
    // Create a circular mask
    const mask = Buffer.from(
      `<svg width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
      </svg>`
    );
    
    // Process the image: resize to square, apply circular mask, and save
    await sharp(inputPath)
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .composite([
        {
          input: mask,
          blend: 'dest-in'
        }
      ])
      .png()
      .toFile(outputPath);
    
    console.log(`Round favicon created successfully at ${outputPath}`);
  } catch (error) {
    console.error('Error creating round favicon:', error);
    process.exit(1);
  }
}

makeRoundFavicon();




