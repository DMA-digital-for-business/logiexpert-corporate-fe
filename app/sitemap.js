import { SOLUZIONI_DATA } from '../screens/soluzioniData';

const BASE = 'https://www.logiexpert.com';

// For each route we emit BOTH language versions as their own <loc> entry
// (so every URL is directly discoverable for crawling), and each entry
// carries the full hreflang cluster (it / en / x-default → Italian).
// This mirrors the <link rel="alternate"> tags in each page's <head>.
function pair(itPath, enPath, { changeFrequency, priority }, now) {
  const it = `${BASE}${itPath}`;
  const en = `${BASE}${enPath}`;
  const languages = { it, en, 'x-default': it };
  return [
    { url: it, lastModified: now, changeFrequency, priority,                 alternates: { languages } },
    { url: en, lastModified: now, changeFrequency, priority: priority - 0.05, alternates: { languages } },
  ];
}

export default function sitemap() {
  const now = new Date().toISOString();
  const slugs = Object.keys(SOLUZIONI_DATA);

  return [
    ...pair('',           '/en',           { changeFrequency: 'monthly', priority: 1.0 }, now),
    ...pair('/soluzioni', '/en/solutions', { changeFrequency: 'monthly', priority: 0.9 }, now),
    ...slugs.flatMap((slug) =>
      pair(`/soluzioni/${slug}`, `/en/solutions/${slug}`, { changeFrequency: 'monthly', priority: 0.85 }, now)
    ),
    ...pair('/azienda',  '/en/about',   { changeFrequency: 'monthly', priority: 0.7 }, now),
    ...pair('/azienda/lavora-con-noi', '/en/about/careers', { changeFrequency: 'weekly', priority: 0.7 }, now),
    ...pair('/contatti', '/en/contact', { changeFrequency: 'yearly',  priority: 0.6 }, now),
    ...pair('/privacy-policy', '/en/privacy-policy', { changeFrequency: 'yearly', priority: 0.2 }, now),
  ];
}
