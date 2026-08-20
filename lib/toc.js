// Shared slug + table-of-contents helpers for the guide pages.
// Client-safe (no fs). Prose uses makeSlugger() to assign heading ids while it
// renders; extractToc() runs the SAME slugger over the same content in the same
// order, so the ids it produces for the index match the ones Prose emits.

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "") // strip accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Returns a function that slugs headings in document order, de-duplicating
// repeats with a numeric suffix (-2, -3, …) so ids stay unique and stable.
export function makeSlugger() {
  const seen = new Map();
  return (text) => {
    const base = slugify(text) || 'sezione';
    const n = (seen.get(base) || 0) + 1;
    seen.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  };
}

// Slug a single heading text with a fresh, non-deduping slugger — for linking a
// known unique heading (e.g. from the flow diagram) to its anchor.
export function anchorFor(text) {
  return slugify(text);
}

// Extract the table of contents. Slugs EVERY heading (to stay in sync with Prose)
// but only returns those at or above maxLevel.
export function extractToc(markdown, { maxLevel = 3 } = {}) {
  const slug = makeSlugger();
  const out = [];
  for (const line of String(markdown).replace(/\r\n/g, '\n').split('\n')) {
    const m = line.match(/^(#{1,6})\s+(.*)$/);
    if (!m) continue;
    const level = m[1].length;
    const text = m[2].trim();
    const id = slug(text); // always slug, even if filtered out, to keep counters aligned
    if (level <= maxLevel) out.push({ level, text, id });
  }
  return out;
}
