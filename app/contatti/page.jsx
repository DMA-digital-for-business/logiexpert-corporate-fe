import Contatti from '../../screens/Contatti';

export const metadata = {
  title: 'Contatti',
  description:
    'Contatta LogiExpert per soluzioni di logistica digitale integrata. Parla con un consulente specializzato: system integration, WMS, proof of delivery, tracciabilità pallet e hardware AIDC industriale.',
  alternates: {
    canonical: 'https://www.logiexpert.com/contatti',
    languages: {
      'it':        'https://www.logiexpert.com/contatti',
      'en':        'https://www.logiexpert.com/en/contact',
      'x-default': 'https://www.logiexpert.com/contatti',
    },
  },
  openGraph: {
    url: 'https://www.logiexpert.com/contatti',
    title: 'Contatti — LogiExpert',
    description:
      'Parla con un consulente LogiExpert per trovare la soluzione di logistica digitale adatta al tuo processo. Nessun call center, risposta diretta dallo specialista.',
  },
};

const ldBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.logiexpert.com' },
    { '@type': 'ListItem', position: 2, name: 'Contatti', item: 'https://www.logiexpert.com/contatti' },
  ],
};

export default function ContattiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <Contatti />
    </>
  );
}
