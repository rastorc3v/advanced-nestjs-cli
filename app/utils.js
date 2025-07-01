import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export function isValidFolderPath(path) {
    return path && fs.existsSync(path) && fs.statSync(path).isDirectory() && !path.startsWith('-') && !path.endsWith('-');
}

export function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export function getDirname() {
    const __filename = fileURLToPath(import.meta.url);
    return dirname(__filename);
}
