'use client';

import Icon from './Icon';
import Spotlight from './Spotlight';
import { useLanguage } from '../lib/LanguageContext';
import { useRoutes } from '../lib/routes';

// Approach / How we work — numbered steps on a dark surface.

const DEFAULT_STEPS = {
  it: [
    { n: '01', title: 'Settore', body: 'Partiamo dal contesto: produzione, magazzino o punto vendita. Capire dove si crea il problema è il primo lavoro.' },
    { n: '02', title: 'Problemi che risolviamo', body: 'Mappiamo i punti di rottura — perdita di tracciabilità, fogli volanti, picking inefficiente, errori di consegna.' },
    { n: '03', title: 'Soluzione', body: 'Componiamo la risposta: tracciabilità pallet, proof of delivery, gestione magazzino. Mai un singolo strumento.' },
    { n: '04', title: 'Software & Hardware', body: 'LogiTrace, LogiPod o LogiStock — integrati ai device giusti, manutenuti dal nostro team.' },
  ],
  en: [
    { n: '01', title: 'Sector', body: 'We start from the context: production, warehouse or point of sale. Understanding where the problem arises is our first task.' },
    { n: '02', title: 'Problems we solve', body: 'We map the breakdown points — traceability loss, paper slips, inefficient picking, delivery errors.' },
    { n: '03', title: 'Solution', body: 'We compose the response: pallet tracking, proof of delivery, warehouse management. Never a single tool.' },
    { n: '04', title: 'Software & Hardware', body: 'LogiTrace, LogiPod or LogiStock — integrated with the right devices, maintained by our team.' },
  ],
};

const DEFAULTS = {
  it: {
    overline: 'Il nostro approccio',
    heading: 'Settore → Problema → Soluzione → Software.',
    intro: 'È la gerarchia che ordina tutto il sito e tutto il nostro modo di lavorare. Non vendiamo cataloghi: ricostruiamo la catena che porta dal tuo problema reale al software che lo risolve.',
    ctaLabel: 'Approfondisci il metodo',
  },
  en: {
    overline: 'Our approach',
    heading: 'Sector → Problem → Solution → Software.',
    intro: 'This is the hierarchy that orders the entire site and our entire way of working. We don\'t sell catalogues: we rebuild the chain from your real problem to the software that solves it.',
    ctaLabel: 'Learn more about our method',
  },
};

function Approach({
  overline,
  heading,
  intro,
  steps,
  cta,
} = {}) {
  const { lang } = useLanguage();
  const routes = useRoutes();
  const d = DEFAULTS[lang];
  const resolvedSteps = steps || DEFAULT_STEPS[lang];
  const resolvedOverline = overline ?? d.overline;
  const resolvedHeading = heading ?? d.heading;
  const resolvedIntro = intro !== undefined ? intro : d.intro;
  const resolvedCta = cta ?? { label: d.ctaLabel, href: routes.about };

  return (
    <section className="le-clip" style={{ background: '#0D0D12', color: '#fff', padding: '120px 56px', position: 'relative', overflow: 'hidden' }}>
      <div className="le-glow" style={{
        position: 'absolute', left: '-12%', top: '-30%', width: '55%', height: '180%',
        background: 'radial-gradient(60% 60% at 30% 50%, rgba(205,22,50,0.4) 0%, rgba(0,0,0,0) 60%)',
        pointerEvents: 'none'
      }} />
      <div style={{ maxWidth: 1328, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'flex-start', marginBottom: 64 }}>
          <div>
            <div className="overline" style={{ color: 'var(--le-red)' }}>{resolvedOverline}</div>
            <h2 style={{ marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 44, lineHeight: '52px', letterSpacing: '-0.012em', color: '#fff' }}>
              {resolvedHeading}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 18, lineHeight: '28px', color: 'rgba(255,255,255,0.78)', margin: 0, maxWidth: 620 }}>
              {resolvedIntro}
            </p>
            {resolvedCta && (
              <a href={resolvedCta.href} style={{
                marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '12px 22px', height: 48, borderRadius: 6,
                background: '#fff', color: '#0D0D12', fontFamily: 'var(--font-ui)',
                fontWeight: 500, fontSize: 14, textDecoration: 'none'
              }}>
                {resolvedCta.label} <Icon name="arrow" size={14} />
              </a>
            )}
          </div>
        </div>

        <Spotlight style={{ borderRadius: 18, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${resolvedSteps.length}, 1fr)`, gap: 1, background: 'rgba(255,255,255,0.08)' }}>
            {resolvedSteps.map((s, i) => (
              <div key={s.n} data-reveal-child style={{
                padding: 32, background: '#0D0D12',
                display: 'flex', flexDirection: 'column', gap: 14, minHeight: 240,
                '--reveal-i': i
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--le-red)',
                  letterSpacing: '0.06em'
                }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, lineHeight: '28px', color: '#fff' }}>
                  {s.title}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: '22px', color: 'rgba(255,255,255,0.7)' }}>
                  {s.body}
                </div>
              </div>
            ))}
          </div>
        </Spotlight>
      </div>
    </section>
  );
}

export default Approach;
