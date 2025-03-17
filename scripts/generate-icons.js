const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const sizes = [192, 512];
  const publicDir = path.join(process.cwd(), 'public');

  for (const size of sizes) {
    const svgPath = path.join(publicDir, `icon-${size}x${size}.svg`);
    const pngPath = path.join(publicDir, `icon-${size}x${size}.png`);

    if (fs.existsSync(svgPath)) {
      await sharp(svgPath)
        .png()
        .toFile(pngPath);
      
      console.log(`Generated ${pngPath}`);
    }
  }
}

generateIcons().catch(console.error); 