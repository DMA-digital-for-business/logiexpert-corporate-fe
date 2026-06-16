import Homepage from '../../screens/Homepage';

export const metadata = {
  title: 'LogiExpert — System Integrator for Digital Logistics',
  description:
    'LogiExpert digitalises the Italian supply chain: pallet tracking with LogiTrace, proof of delivery with LogiPod, warehouse management with LogiStock, and industrial AIDC hardware from Zebra, Honeywell and Datalogic.',
  alternates: {
    canonical: 'https://www.logiexpert.com/en',
    languages: {
      'it':        'https://www.logiexpert.com',
      'en':        'https://www.logiexpert.com/en',
      'x-default': 'https://www.logiexpert.com',
    },
  },
  openGraph: {
    url: 'https://www.logiexpert.com/en',
    locale: 'en_GB',
    title: 'LogiExpert — System Integrator for Digital Logistics',
    description:
      'Pallet tracking, digital proof of delivery, WMS and AIDC & Mobility. Proprietary software, system integration and on-site support for manufacturing, logistics and retail.',
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
    'Italian system integrator and software house specialised in integrated digital logistics solutions for supply chain, manufacturing, logistics & transport and retail.',
  telephone: '+390280898867',
  email: 'info@logiexpert.com',
  address: { '@type': 'PostalAddress', addressCountry: 'IT' },
  knowsAbout: [
    'Pallet tracking', 'Proof of Delivery', 'Warehouse Management System',
    'AIDC', 'System integration', 'Digital supply chain',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'LogiExpert Solutions',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'LogiTrace', description: 'Pallet and reusable asset tracking' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'LogiPod', description: 'Digital proof of delivery' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'LogiStock', description: 'Cloud-native warehouse management system' } },
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
    'Integrated digital logistics solutions: pallet tracking, proof of delivery, warehouse management and AIDC & Mobility.',
  publisher: { '@id': 'https://www.logiexpert.com/#organization' },
};

export default function EnHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldOrganization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldWebSite) }} />
      <Homepage />
    </>
  );
}
