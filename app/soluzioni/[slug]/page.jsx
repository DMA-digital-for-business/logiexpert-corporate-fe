import { notFound } from 'next/navigation';
import SoluzioneDetail from '../../../screens/SoluzioneDetail';
import { SOLUZIONI_DATA } from '../../../screens/soluzioniData';

export function generateStaticParams() {
  return Object.keys(SOLUZIONI_DATA).map((slug) => ({ slug }));
}

export default async function SoluzioneDetailPage({ params }) {
  const { slug } = await params;

  if (!SOLUZIONI_DATA[slug]) {
    notFound();
  }

  return <SoluzioneDetail slug={slug} />;
}
