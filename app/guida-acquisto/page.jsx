import GuideDoc from '../../screens/GuideDoc';
import { loadGuide } from '../../lib/guideContent';

const BASE = 'https://www.logiexpert.com';
const URL = `${BASE}/guida-acquisto`;

export const metadata = {
  title: 'Come acquistare su LogiExpert — Guida all’acquisto per aziende',
  description:
    'Guida passo-passo all’acquisto online su LogiExpert: registrazione azienda, carrello, richiesta preventivo, metodi di pagamento e monitoraggio dell’ordine nell’area riservata.',
  alternates: { canonical: URL },
  openGraph: {
    url: URL,
    title: 'Come acquistare su LogiExpert — Guida all’acquisto',
    description:
      'Registrazione azienda, carrello, preventivo, pagamenti e tracciamento ordine: tutto quello che ti serve per comprare online su LogiExpert.',
  },
};

const ldBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Guida all’acquisto', item: URL },
  ],
};

export default function GuidaAcquistoPage() {
  const { title, subtitle, body } = loadGuide('guida-acquisto-cliente.md');
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }} />
      <GuideDoc overline="Guida all’acquisto" title={title} subtitle={subtitle} content={body} />
    </>
  );
}
