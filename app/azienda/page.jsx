import Azienda from '../../screens/Azienda';

export const metadata = {
  title: 'Chi siamo: system integrator per la logistica digitale',
  description:
    'Scopri LogiExpert: identità, competenze e posizionamento. System integrator e software house specializzato in supply chain per Transportation & Logistics, Retail e Manufacturing, con approccio orientato alla customizzazione.',
  alternates: {
    canonical: 'https://www.logiexpert.com/azienda',
    languages: {
      'it':        'https://www.logiexpert.com/azienda',
      'en':        'https://www.logiexpert.com/en/about',
      'x-default': 'https://www.logiexpert.com/azienda',
    },
  },
  openGraph: {
    url: 'https://www.logiexpert.com/azienda',
    title: 'Chi siamo — LogiExpert',
    description:
      'System integrator e software house italiano con 30+ anni di esperienza. Settori: Manufacturing, Logistica & Trasporti, Retail. Software: LogiTrace, LogiPod, LogiStock.',
  },
};

const ldBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.logiexpert.com' },
    { '@type': 'ListItem', position: 2, name: 'Azienda', item: 'https://www.logiexpert.com/azienda' },
  ],
};

const ldAboutPage = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Chi siamo — LogiExpert',
  url: 'https://www.logiexpert.com/azienda',
  description:
    'LogiExpert è un system integrator e software house italiano con oltre 30 anni di esperienza nella digitalizzazione della supply chain per manufacturing, logistica & trasporti e retail.',
  about: {
    '@type': 'Organization',
    '@id': 'https://www.logiexpert.com/#organization',
    name: 'LogiExpert',
    foundingDate: '1994',
    numberOfEmployees: { '@type': 'QuantitativeValue', description: 'PMI italiana' },
    knowsAbout: [
      'System integration', 'Supply chain digitale', 'Tracciabilità pallet',
      'Proof of Delivery', 'Warehouse Management', 'AIDC & Mobility industriale',
    ],
  },
};

export default function AziendaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldAboutPage) }} />
      <Azienda />
    </>
  );
}
