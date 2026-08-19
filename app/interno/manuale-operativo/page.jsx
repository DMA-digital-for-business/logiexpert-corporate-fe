import GuideDoc from '../../../screens/GuideDoc';
import { loadGuide } from '../../../lib/guideContent';

// Internal operating manual — NOT public. noindex/nofollow, excluded from the sitemap
// and not linked anywhere. Access is gated by HTTP Basic Auth in middleware.ts for the
// /interno/* path (credentials in INTERNAL_DOCS_USER / INTERNAL_DOCS_PASSWORD).

export const metadata = {
  title: 'Manuale operativo — Gestione ordini e preventivi B2B (uso interno)',
  description: 'Documento riservato a uso interno LogiExpert.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: null },
};

export default function ManualeOperativoPage() {
  const { title, subtitle, body } = loadGuide('manuale-operativo-interno.md');
  return (
    <GuideDoc
      overline="Uso interno · Procedura"
      title={title}
      subtitle={subtitle}
      badge="Documento riservato"
      notice="Documento a uso interno LogiExpert, non pubblicato e non indicizzato. Non condividere questo link all’esterno. Versione bozza: i segnaposto [CONTENUTO MANCANTE] vanno risolti prima dell’avvio."
      content={body}
    />
  );
}
