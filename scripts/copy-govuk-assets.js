const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '..', 'node_modules', 'govuk-frontend', 'dist', 'govuk', 'assets');
const destination = path.join(__dirname, '..', 'public', 'govuk', 'assets');

function copyFolder(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`Source path not found: ${src}`);
    return;
  }
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyFolder(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyFolder(source, destination);
