import { notFound } from 'next/navigation';
import SoluzioneDetail from '../../../../screens/SoluzioneDetail';
import { SOLUZIONI_DATA } from '../../../../screens/soluzioniData';

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SOLUZIONI_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = SOLUZIONI_DATA[slug];
  if (!data) return {};
  const { title, pitch } = data.en;
  const url   = `https://www.logiexpert.com/en/solutions/${slug}`;
  const itUrl = `https://www.logiexpert.com/soluzioni/${slug}`;
  return {
    title,
    description: pitch,
    alternates: {
      canonical: url,
      languages: {
        'it':        itUrl,
        'en':        url,
        'x-default': itUrl,
      },
    },
    openGraph: {
      url,
      locale: 'en_GB',
      title: `${title} — LogiExpert`,
      description: pitch,
    },
  };
}

export default async function EnSoluzioneDetailPage({ params }) {
  const { slug } = await params;
  const data = SOLUZIONI_DATA[slug];

  if (!data) {
    notFound();
  }

  const { title, pitch, software, faq } = data.en;
  const url = `https://www.logiexpert.com/en/solutions/${slug}`;

  const ldBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',      item: 'https://www.logiexpert.com/en' },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://www.logiexpert.com/en/solutions' },
      { '@type': 'ListItem', position: 3, name: title,       item: url },
    ],
  };

  const ldFaq = faq?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null;

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
      {ldFaq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />}
      {ldSoftware && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSoftware) }} />}
      <SoluzioneDetail slug={slug} />
    </>
  );
}
