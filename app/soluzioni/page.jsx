import SoluzioniHub from '../../screens/SoluzioniHub';

export const metadata = {
  title: 'Soluzioni di Logistica Digitale',
  description:
    'Esplora le soluzioni di logistica digitale di LogiExpert: tracciabilità pallet e asset (LogiTrace), proof of delivery (LogiPod), warehouse management (LogiStock) e hardware AIDC & Mobility per manufacturing, logistica e retail.',
  alternates: {
    canonical: 'https://www.logiexpert.com/soluzioni',
    languages: {
      'it':        'https://www.logiexpert.com/soluzioni',
      'en':        'https://www.logiexpert.com/en/solutions',
      'x-default': 'https://www.logiexpert.com/soluzioni',
    },
  },
  openGraph: {
    url: 'https://www.logiexpert.com/soluzioni',
    title: 'Soluzioni di Logistica Digitale — LogiExpert',
    description:
      'LogiTrace, LogiPod, LogiStock e AIDC & Mobility: soluzioni end-to-end per la digitalizzazione della supply chain italiana.',
  },
};

const ldBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.logiexpert.com' },
    { '@type': 'ListItem', position: 2, name: 'Soluzioni', item: 'https://www.logiexpert.com/soluzioni' },
  ],
};

export default function SoluzioniPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <SoluzioniHub />
    </>
  );
}
