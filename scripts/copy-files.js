const fs = require('fs');
const path = require('path');

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function copyRecursive(src, dest) {
  const stat = await fs.promises.stat(src);
  if (stat.isDirectory()) {
    await ensureDir(dest);
    const entries = await fs.promises.readdir(src);
    for (const entry of entries) {
      await copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    await ensureDir(path.dirname(dest));
    await fs.promises.copyFile(src, dest);
  }
}

async function main() {
  try {
    const src = path.resolve(__dirname, '..', 'build', 'v4');
    const dest = path.resolve(__dirname, '..', 'dist');
    await copyRecursive(src, dest);
    console.log('Files copied to', dest);
  } catch (err) {
    console.error('Copy failed:', err && err.message ? err.message : err);
    process.exit(1);
  }
}

main();
