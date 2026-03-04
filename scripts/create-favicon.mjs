/**
 * Converts public/favicon.png → public/favicon.ico
 * Creates a multi-size ICO file (32x32 + 16x16) using sharp for resizing.
 * ICO file embeds PNG blobs (supported by all modern browsers & Google).
 */

import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

let sharp;
try {
    sharp = require('sharp');
} catch {
    console.error('sharp not found. Installing…');
    process.exit(1);
}

const ROOT = join(__dirname, '..');

async function pngBuffer(size) {
    return sharp(join(ROOT, 'public', 'favicon.png'))
        .resize(size, size)
        .png()
        .toBuffer();
}

function buildIco(images) {
    // ICONDIR header (6 bytes)
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type = ICO
    header.writeUInt16LE(images.length, 4); // image count

    const ENTRY_SIZE = 16;
    const HEADER_SIZE = 6;
    const ENTRIES_SIZE = ENTRY_SIZE * images.length;

    let offset = HEADER_SIZE + ENTRIES_SIZE;

    const entries = images.map(({ png, size }) => {
        const entry = Buffer.alloc(ENTRY_SIZE);
        entry.writeUInt8(size === 256 ? 0 : size, 0);  // width  (0 = 256)
        entry.writeUInt8(size === 256 ? 0 : size, 1);  // height (0 = 256)
        entry.writeUInt8(0, 2);              // color count
        entry.writeUInt8(0, 3);              // reserved
        entry.writeUInt16LE(1, 4);              // planes
        entry.writeUInt16LE(32, 6);              // bit count
        entry.writeUInt32LE(png.length, 8);            // bytes in resource
        entry.writeUInt32LE(offset, 12);             // offset of image data
        offset += png.length;
        return entry;
    });

    return Buffer.concat([header, ...entries, ...images.map(i => i.png)]);
}

(async () => {
    console.log('Building favicon.ico …');
    const [png32, png16] = await Promise.all([pngBuffer(32), pngBuffer(16)]);
    const ico = buildIco([
        { png: png32, size: 32 },
        { png: png16, size: 16 },
    ]);
    const out = join(ROOT, 'public', 'favicon.ico');
    writeFileSync(out, ico);
    console.log(`✅  Written ${ico.length} bytes → ${out}`);
})();
