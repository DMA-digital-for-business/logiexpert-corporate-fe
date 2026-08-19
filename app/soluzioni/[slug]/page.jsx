import { notFound } from 'next/navigation';
import SoluzioneDetail from '../../../screens/SoluzioneDetail';
import { SOLUZIONI_DATA } from '../../../screens/soluzioniData';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SOLUZIONI_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = SOLUZIONI_DATA[slug];
  if (!data) return {};
  const { title, pitch } = data.it;
  const url = `https://www.logiexpert.com/soluzioni/${slug}`;
  const enUrl = `https://www.logiexpert.com/en/solutions/${slug}`;
  return {
    title,
    description: pitch,
    alternates: {
      canonical: url,
      languages: {
        'it':        url,
        'en':        enUrl,
        'x-default': url,
      },
    },
    openGraph: {
      url,
      title: `${title} — LogiExpert`,
      description: pitch,
    },
  };
}

export default async function SoluzioneDetailPage({ params }) {
  const { slug } = await params;
  const data = SOLUZIONI_DATA[slug];

  if (!data) {
    notFound();
  }

  const { title, pitch, software } = data.it;
  const url = `https://www.logiexpert.com/soluzioni/${slug}`;

  const ldBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.logiexpert.com' },
      { '@type': 'ListItem', position: 2, name: 'Soluzioni', item: 'https://www.logiexpert.com/soluzioni' },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  };

  // FAQPage schema is emitted by the <FAQ> component itself (see components/FAQ.jsx),
  // so it is intentionally not duplicated here.

  // SoftwareApplication schema only for proprietary LogiExpert software (not hardware partner)
  const ldSoftware = software?.name && software.name !== 'Hardware partner' ? {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: software.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, SaaS',
    description: software.desc,
    url,
    offers: {
      '@type': 'Offer',
      seller: { '@type': 'Organization', name: 'LogiExpert', url: 'https://www.logiexpert.com' },
    },
    provider: { '@type': 'Organization', '@id': 'https://www.logiexpert.com/#organization' },
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      {ldSoftware && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSoftware) }} />}
      <SoluzioneDetail slug={slug} />
    </>
  );
}
