import LavoraConNoi from '../../../../screens/LavoraConNoi';
import { JOBS_DATA } from '../../../../screens/careersData';

const BASE = 'https://www.logiexpert.com';
const URL_IT = `${BASE}/azienda/lavora-con-noi`;
const URL_EN = `${BASE}/en/about/careers`;

export const metadata = {
  title: 'Careers | LogiExpert',
  description:
    'Discover open positions at LogiExpert and apply to work in digital logistics: proprietary software, system integration and B2B eCommerce.',
  alternates: {
    canonical: URL_EN,
    languages: {
      'it':        URL_IT,
      'en':        URL_EN,
      'x-default': URL_IT,
    },
  },
  openGraph: {
    url: URL_EN,
    locale: 'en_GB',
    title: 'Careers — LogiExpert',
    description:
      'Building the future of digital logistics. Discover open positions and apply at LogiExpert.',
  },
};

const ldBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',    item: `${BASE}/en` },
    { '@type': 'ListItem', position: 2, name: 'Company', item: `${BASE}/en/about` },
    { '@type': 'ListItem', position: 3, name: 'Careers', item: URL_EN },
  ],
};

// JobPosting per ciascuna posizione (segnale SEO per Google Jobs).
// NOTA: `datePosted`/`validThrough` reali vanno impostati da HR alla pubblicazione.
const ldJobs = JOBS_DATA.map((job) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: job.title.en,
  description: job.responsibilities.en.join(' '),
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'LogiExpert',
    sameAs: BASE,
  },
  jobLocation: {
    '@type': 'Place',
    address: { '@type': 'PostalAddress', addressCountry: 'IT', addressLocality: job.location.en },
  },
  directApply: true,
  url: `${URL_EN}#candidati`,
}));

export default function EnCareersPage() {
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
