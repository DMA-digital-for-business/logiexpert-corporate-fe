'use client';

import Icon from '../components/Icon';
import { useLanguage } from '../lib/LanguageContext';
import { useRoutes } from '../lib/routes';

// Grazie — pagina di conferma invio, riusata da tutti i form del sito
// (candidature, contatti, lead). Long-scroll minimale, hero scuro standard.

const COPY = {
  it: {
    overline: 'Grazie',
    title: 'Abbiamo ricevuto la tua richiesta.',
    body: 'Ti ricontatteremo al più presto. Nel frattempo, puoi continuare a esplorare LogiExpert.',
    ctaPrimary: 'Torna alla home',
    ctaSecondary: 'Scopri le soluzioni',
  },
  en: {
    overline: 'Thank you',
    title: 'We have received your request.',
    body: 'We will get back to you as soon as possible. In the meantime, feel free to keep exploring LogiExpert.',
    ctaPrimary: 'Back to home',
    ctaSecondary: 'Explore our solutions',
  },
};

export default function Grazie() {
  const { lang } = useLanguage();
  const routes = useRoutes();
  const c = COPY[lang];

  return (
    <main data-screen-label="Grazie" style={{ background: '#fff' }}>
      <section className="le-clip" style={{
        background: '#0D0D12', color: '#fff', padding: '120px 56px 128px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="le-glow" style={{
          position: 'absolute', left: '50%', top: '-20%', width: '60%', height: '160%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(50% 50% at 50% 50%, rgba(205,22,50,0.35) 0%, rgba(0,0,0,0) 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <div style={{
            width: 72, height: 72, borderRadius: 20, margin: '0 auto 28px',
            background: 'rgba(205,22,50,0.16)', border: '1px solid rgba(205,22,50,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon name="check" size={32} color="var(--le-red)" stroke={2} />
          </div>
          <div className="overline" style={{ color: 'var(--le-red)' }}>{c.overline}</div>
          <h1 style={{
            marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 48, lineHeight: '56px', letterSpacing: '-0.014em', color: '#fff', margin: '16px 0 0',
          }}>
            {c.title}
          </h1>
          <p style={{
            marginTop: 20, fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: '28px',
            color: 'rgba(255,255,255,0.82)',
          }}>
            {c.body}
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={routes.home} style={{
              padding: '0 22px', height: 48, display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'var(--le-red)', color: '#fff', borderRadius: 6, textDecoration: 'none',
              fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15,
            }}>
              {c.ctaPrimary} <Icon name="arrow" size={16} color="#fff" />
            </a>
            <a href={routes.solutions} style={{
              padding: '0 22px', height: 48, display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'transparent', color: '#fff', borderRadius: 6, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.4)',
              fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15,
            }}>
              {c.ctaSecondary}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
