import Contatti from '../../../screens/Contatti';

export const metadata = {
  title: 'Contact',
  description:
    'Contact LogiExpert for integrated digital logistics solutions. Speak with a specialist consultant: system integration, WMS, proof of delivery, pallet tracking and industrial AIDC hardware.',
  alternates: {
    canonical: 'https://www.logiexpert.com/en/contact',
    languages: {
      'it':        'https://www.logiexpert.com/contatti',
      'en':        'https://www.logiexpert.com/en/contact',
      'x-default': 'https://www.logiexpert.com/contatti',
    },
  },
  openGraph: {
    url: 'https://www.logiexpert.com/en/contact',
    locale: 'en_GB',
    title: 'Contact — LogiExpert',
    description:
      'Talk to a LogiExpert consultant to find the right digital logistics solution for your process. No call centre — direct response from the specialist.',
  },
};

const ldBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',    item: 'https://www.logiexpert.com/en' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.logiexpert.com/en/contact' },
  ],
};

export default function EnContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <Contatti />
    </>
  );
}
