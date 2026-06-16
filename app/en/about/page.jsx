import Azienda from '../../../screens/Azienda';

export const metadata = {
  title: 'About us: system integrator for digital logistics',
  description:
    'Discover LogiExpert: identity, expertise and positioning. System integrator and software house specialised in supply chain for Transportation & Logistics, Retail and Manufacturing, with a customisation-oriented approach.',
  alternates: {
    canonical: 'https://www.logiexpert.com/en/about',
    languages: {
      'it':        'https://www.logiexpert.com/azienda',
      'en':        'https://www.logiexpert.com/en/about',
      'x-default': 'https://www.logiexpert.com/azienda',
    },
  },
  openGraph: {
    url: 'https://www.logiexpert.com/en/about',
    locale: 'en_GB',
    title: 'About us — LogiExpert',
    description:
      'Italian system integrator and software house with 30+ years of experience. Sectors: Manufacturing, Logistics & Transport, Retail. Software: LogiTrace, LogiPod, LogiStock.',
  },
};

const ldBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://www.logiexpert.com/en' },
    { '@type': 'ListItem', position: 2, name: 'About us', item: 'https://www.logiexpert.com/en/about' },
  ],
};

const ldAboutPage = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About us — LogiExpert',
  url: 'https://www.logiexpert.com/en/about',
  description:
    'LogiExpert is an Italian system integrator and software house with over 30 years of experience in supply chain digitalisation for manufacturing, logistics & transport and retail.',
  about: {
    '@type': 'Organization',
    '@id': 'https://www.logiexpert.com/#organization',
    name: 'LogiExpert',
    foundingDate: '1994',
    numberOfEmployees: { '@type': 'QuantitativeValue', description: 'Italian SME' },
    knowsAbout: [
      'System integration', 'Digital supply chain', 'Pallet tracking',
      'Proof of Delivery', 'Warehouse Management', 'Industrial AIDC & Mobility',
    ],
  },
};

export default function EnAboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldAboutPage) }} />
      <Azienda />
    </>
  );
}
