import SoluzioniHub from '../../../screens/SoluzioniHub';

export const metadata = {
  title: 'Digital Logistics Solutions',
  description:
    'Explore LogiExpert\'s digital logistics solutions: pallet and asset tracking (LogiTrace), proof of delivery (LogiPod), warehouse management (LogiStock) and AIDC & Mobility hardware for manufacturing, logistics and retail.',
  alternates: {
    canonical: 'https://www.logiexpert.com/en/solutions',
    languages: {
      'it':        'https://www.logiexpert.com/soluzioni',
      'en':        'https://www.logiexpert.com/en/solutions',
      'x-default': 'https://www.logiexpert.com/soluzioni',
    },
  },
  openGraph: {
    url: 'https://www.logiexpert.com/en/solutions',
    locale: 'en_GB',
    title: 'Digital Logistics Solutions — LogiExpert',
    description:
      'LogiTrace, LogiPod, LogiStock and AIDC & Mobility: end-to-end solutions for digitising the supply chain.',
  },
};

const ldBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.logiexpert.com/en' },
    { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.logiexpert.com/en/solutions' },
  ],
};

export default function EnSoluzioniPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <SoluzioniHub />
    </>
  );
}
