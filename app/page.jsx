import Homepage from '../screens/Homepage';

export const metadata = {
  title: 'LogiExpert — System Integrator per la Logistica Digitale',
  description:
    'LogiExpert digitalizza la supply chain italiana: tracciabilità pallet con LogiTrace, proof of delivery con LogiPod, warehouse management con LogiStock e hardware AIDC industriale Zebra, Honeywell e Datalogic.',
  alternates: {
    canonical: 'https://www.logiexpert.com',
    languages: {
      'it':        'https://www.logiexpert.com',
      'en':        'https://www.logiexpert.com/en',
      'x-default': 'https://www.logiexpert.com',
    },
  },
  openGraph: {
    url: 'https://www.logiexpert.com',
    title: 'LogiExpert — System Integrator per la Logistica Digitale',
    description:
      'Tracciabilità pallet, proof of delivery digitale, WMS e AIDC & Mobility. Software proprietari, system integration e assistenza on-site per manufacturing, logistica e retail.',
  },
};

const ldOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.logiexpert.com/#organization',
  name: 'LogiExpert',
  url: 'https://www.logiexpert.com',
  logo: 'https://www.logiexpert.com/assets/logo-logiexpert.png',
  description:
    'System integrator e software house italiano specializzato in soluzioni di logistica digitale integrata per supply chain, manufacturing, logistica & trasporti e retail.',
  telephone: '+390280898867',
  email: 'info@logiexpert.com',
  vatID: 'IT09900890964',
  foundingDate: '1994',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Viale Sarca 336/F, Edificio 16',
    addressLocality: 'Milano',
    postalCode: '20126',
    addressRegion: 'MI',
    addressCountry: 'IT',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+390280898867',
    email: 'info@logiexpert.com',
    contactType: 'customer support',
    areaServed: 'IT',
    availableLanguage: ['Italian', 'English'],
  },
  knowsAbout: [
    'Tracciabilità pallet', 'Proof of Delivery', 'Warehouse Management System',
    'AIDC', 'System integration', 'Supply chain digitale',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Soluzioni LogiExpert',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'LogiTrace', description: 'Tracciabilità pallet e asset riutilizzabili' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'LogiPod', description: 'Proof of delivery digitale' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'LogiStock', description: 'Warehouse Management System cloud-native' } },
    ],
  },
};

const ldWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.logiexpert.com/#website',
  name: 'LogiExpert',
  url: 'https://www.logiexpert.com',
  description:
    'Soluzioni di logistica digitale integrata: tracciabilità pallet, proof of delivery, warehouse management e AIDC & Mobility.',
  publisher: { '@id': 'https://www.logiexpert.com/#organization' },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrganization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldWebSite) }} />
      <Homepage />
    </>
  );
}
