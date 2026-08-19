import fs from 'node:fs';
import path from 'node:path';

// loadGuide — server-only helper. Reads a Markdown guide from /content, strips the
// trailing internal "Note per la produzione/validazione (da rimuovere…)" block, and
// splits the leading H1 (title) and the lines right after it (subtitle) from the body
// so the page can render them in the hero.
export function loadGuide(fileName) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content', fileName), 'utf8');

  // Remove the explicitly "da rimuovere prima della pubblicazione" production notes.
  const cleaned = raw
    .replace(/\r\n/g, '\n')
    .replace(/\n-{3,}\s*\n+#{2,3}\s+Note per la (produzione|validazione)[\s\S]*$/i, '\n')
    .trim();

  const lines = cleaned.split('\n');
  let idx = 0;
  let title = '';
  const hm = lines[0]?.match(/^#\s+(.+)$/);
  if (hm) { title = hm[1].trim(); idx = 1; }

  // Subtitle = the non-blank lines immediately following the H1 (bold tagline + version).
  const sub = [];
  while (idx < lines.length && lines[idx].trim() !== '') { sub.push(lines[idx].trim()); idx++; }
  const subtitle = sub.map(s => s.replace(/^\*\*(.+)\*\*$/, '$1')).join(' — ');

  const body = lines.slice(idx).join('\n').trim();
  return { title, subtitle, body };
}
