const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [192, 512];
const inputFile = path.join(__dirname, '../public/app-icon.svg');
const outputDir = path.join(__dirname, '../public');

async function generateIcons() {
  for (const size of sizes) {
    await sharp(inputFile)
      .resize(size, size)
      .toFile(path.join(outputDir, `icon-${size}x${size}.png`));
  }
}

generateIcons().catch(console.error); 