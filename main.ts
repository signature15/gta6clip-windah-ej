import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// This entry records a GTA 6 clip discovered in a Windah Basudara moment.
// The agent selected the source moment and prepared it as a vertical short.
// ffmpeg rendered the final frame at 1080x1920 for a phone-first format.
// The composition keeps the webcam in a top panel and gameplay in the bottom.
// Word-by-word captions make the spoken reaction easier to follow without audio.
// The finished clip was uploaded publicly to YouTube as a YouTube Short.
// VIDEO.json contains the public Short URL that represents this clip entry.
// This small runner copies that metadata into make.fun's requested output folder.

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, 'VIDEO.json');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || join(repoRoot, 'output');
const destination = join(outputDir, 'VIDEO.json');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

console.log(`Copied VIDEO.json to ${destination}`);
