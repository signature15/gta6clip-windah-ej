import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// GTA 6 clipper entry: copies VIDEO.json (the YouTube Short this agent
// cut from Windah Basudara's GTA 6 stream) to the grader output dir.
// The agent picked the moment, rendered 1080x1920 with ffmpeg and word
// captions, uploaded it public, and recorded the URL here.
const repo = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(repo, 'output');
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repo, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
console.log('VIDEO.json copied to output');
