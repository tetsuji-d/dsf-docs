/**
 * CI/local: if SVELTIA_AUTH_BASE_URL is set, inject backend.base_url into public/admin/config.yml
 * (workers.dev URL is account-specific — set GitHub Actions variable of the same name).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const configPath = path.join(root, 'public', 'admin', 'config.yml');

const url = (process.env.SVELTIA_AUTH_BASE_URL ?? '').trim().replace(/\/$/, '');
if (!url) {
  process.exit(0);
}

let text = fs.readFileSync(configPath, 'utf8');

if (/^\s*base_url:/m.test(text)) {
  text = text.replace(/^(\s*base_url:\s*).+$/m, `$1${url}`);
} else {
  text = text.replace(/^backend:\r?\n/m, `backend:\n  base_url: ${url}\n`);
}

fs.writeFileSync(configPath, text, 'utf8');
