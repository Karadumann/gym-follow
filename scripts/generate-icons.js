const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const exerciseIcons = [
  'bench-press',
  'squat',
  'deadlift',
  'overhead-press',
  'barbell-row'
];

async function generateExerciseIcons() {
  for (const exercise of exerciseIcons) {
    const svgPath = path.join(__dirname, '..', 'public', 'exercises', `${exercise}.svg`);
    const pngPath = path.join(__dirname, '..', 'public', 'exercises', `${exercise}.png`);

    if (fs.existsSync(svgPath)) {
      try {
        await sharp(svgPath)
          .resize(200, 200)
          .png()
          .toFile(pngPath);
        console.log(`Generated ${pngPath}`);
      } catch (error) {
        console.error(`Error generating ${pngPath}:`, error);
      }
    } else {
      console.error(`SVG file not found: ${svgPath}`);
    }
  }
}

// Generate PWA icons
async function generatePWAIcons() {
  const sizes = [192, 512];
  for (const size of sizes) {
    const svgPath = path.join(__dirname, '..', 'public', `icon-${size}x${size}.svg`);
    const pngPath = path.join(__dirname, '..', 'public', `icon-${size}x${size}.png`);

    if (fs.existsSync(svgPath)) {
      try {
        await sharp(svgPath)
          .resize(size, size)
          .png()
          .toFile(pngPath);
        console.log(`Generated ${pngPath}`);
      } catch (error) {
        console.error(`Error generating ${pngPath}:`, error);
      }
    } else {
      console.error(`SVG file not found: ${svgPath}`);
    }
  }
}

// Run both icon generation functions
Promise.all([
  generateExerciseIcons(),
  generatePWAIcons()
]).then(() => {
  console.log('All icons generated successfully');
}).catch((error) => {
  console.error('Error generating icons:', error);
  process.exit(1);
}); 