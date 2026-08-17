import LavoraConNoi from '../../../screens/LavoraConNoi';
import { JOBS_DATA } from '../../../screens/careersData';

const BASE = 'https://www.logiexpert.com';
const URL_IT = `${BASE}/azienda/lavora-con-noi`;
const URL_EN = `${BASE}/en/about/careers`;

export const metadata = {
  title: 'Lavora con noi | LogiExpert',
  description:
    'Scopri le posizioni aperte in LogiExpert e candidati per lavorare nella logistica digitale: software proprietari, system integration ed eCommerce B2B.',
  alternates: {
    canonical: URL_IT,
    languages: {
      'it':        URL_IT,
      'en':        URL_EN,
      'x-default': URL_IT,
    },
  },
  openGraph: {
    url: URL_IT,
    title: 'Lavora con noi — LogiExpert',
    description:
      'Costruiamo il futuro della logistica digitale. Scopri le posizioni aperte e candidati in LogiExpert.',
  },
};

const ldBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',           item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Azienda',        item: `${BASE}/azienda` },
    { '@type': 'ListItem', position: 3, name: 'Lavora con noi', item: URL_IT },
  ],
};

// JobPosting per ciascuna posizione (segnale SEO per Google Jobs).
// NOTA: `datePosted`/`validThrough` reali vanno impostati da HR alla pubblicazione.
const ldJobs = JOBS_DATA.map((job) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: job.title.it,
  description: job.responsibilities.it.join(' '),
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'LogiExpert',
    sameAs: BASE,
  },
  jobLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressCountry: 'IT', addressLocality: job.location.it },
  },
  directApply: true,
  url: `${URL_IT}#candidati`,
}));

export default function LavoraConNoiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      {ldJobs.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <LavoraConNoi />
    </>
  );
}
