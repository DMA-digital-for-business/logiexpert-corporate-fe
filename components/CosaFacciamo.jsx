'use client';

import Icon from './Icon';
import { useLanguage } from '../lib/LanguageContext';

// CosaFacciamo — SEO/AI optimization block.

const DEFAULT_FACTS = {
  it: [
    {
      label: 'Cosa siamo',
      body: (
        <>
          <strong>LogiExpert</strong> è un <strong>system integrator</strong> e una{' '}
          <strong>software house</strong> specializzata in soluzioni di{' '}
          <strong>logistica digitale integrata</strong> per il mercato B2B italiano.
          Sviluppiamo software proprietario, integriamo hardware AIDC e mobility,
          eroghiamo servizi di assistenza e formazione su tutto il ciclo logistico.
        </>
      ),
    },
    {
      label: 'Cosa facciamo',
      body: (
        <>
          Progettiamo e implementiamo sistemi di <strong>tracciabilità pallet</strong>,{' '}
          <strong>proof of delivery digitale</strong>, <strong>warehouse management</strong>{' '}
          e <strong>identificazione automatica (AIDC)</strong>. Integriamo i nostri
          software — <em>LogiTrace</em>, <em>LogiPod</em>, <em>LogiDealer</em>, <em>LogiStock</em> — con
          i principali ERP e gestionali già in uso.
        </>
      ),
    },
    {
      label: 'Per chi lavoriamo',
      body: (
        <>
          Serviamo Responsabili Logistica, Operations Manager e IT Manager nei settori{' '}
          <strong>Manifatturiero</strong>, <strong>Logistica &amp; Trasporti</strong> e{' '}
          <strong>Retail &amp; Distribuzione</strong>. Lavoriamo con aziende di ogni
          dimensione — da meno di 50 a oltre 1.000 dipendenti — che gestiscono più
          magazzini, flotte di consegna o reti di punti vendita distribuiti.
        </>
      ),
    },
    {
      label: 'Come lavoriamo',
      body: (
        <>
          La nostra metodologia segue la gerarchia <strong>Settore → Problema → Soluzione → Software</strong>:
          partiamo dal contesto operativo del cliente, mappiamo i punti di rottura,
          componiamo la risposta tecnologica e la integriamo con l'hardware adeguato.
          Non vendiamo cataloghi: ricostruiamo la catena end-to-end.
        </>
      ),
    },
  ],
  en: [
    {
      label: 'What we are',
      body: (
        <>
          <strong>LogiExpert</strong> is a <strong>system integrator</strong> and{' '}
          <strong>software house</strong> specializing in{' '}
          <strong>integrated digital logistics solutions</strong> for the Italian B2B market.
          We develop proprietary software, integrate AIDC and mobility hardware, and
          provide support and training services across the entire logistics cycle.
        </>
      ),
    },
    {
      label: 'What we do',
      body: (
        <>
          We design and implement <strong>pallet tracking</strong> systems,{' '}
          <strong>digital proof of delivery</strong>, <strong>warehouse management</strong>{' '}
          and <strong>automatic identification (AIDC)</strong>. We integrate our
          software — <em>LogiTrace</em>, <em>LogiPod</em>, <em>LogiDealer</em>, <em>LogiStock</em> — with
          the major ERPs and management systems already in use.
        </>
      ),
    },
    {
      label: 'Who we work with',
      body: (
        <>
          We serve Logistics Managers, Operations Managers and IT Managers in the{' '}
          <strong>Manufacturing</strong>, <strong>Logistics &amp; Transport</strong> and{' '}
          <strong>Retail &amp; Distribution</strong> sectors. We work with companies of all
          sizes — from fewer than 50 to over 1,000 employees — managing multiple
          warehouses, delivery fleets or distributed retail networks.
        </>
      ),
    },
    {
      label: 'How we work',
      body: (
        <>
          Our methodology follows the hierarchy <strong>Sector → Problem → Solution → Software</strong>:
          we start from the customer's operational context, map the breakdown points,
          compose the technological response and integrate it with the right hardware.
          We don't sell catalogues: we rebuild the end-to-end chain.
        </>
      ),
    },
  ],
};

const DEFAULT_TRUST = {
  it: {
    icon: 'shield',
    body: 'Oltre 30 anni di esperienza tra distribuzione e vendor AIDC, con una struttura commerciale distribuita sul territorio italiano.',
  },
  en: {
    icon: 'shield',
    body: 'Over 30 years of experience in distribution and AIDC vendor sectors, with a commercial team distributed across Italy.',
  },
};

const DEFAULTS = {
  it: {
    overline: 'Chi è LogiExpert',
    heading: 'Cosa facciamo, detto in modo chiaro.',
  },
  en: {
    overline: 'Who is LogiExpert',
    heading: 'What we do, stated clearly.',
  },
};

function CosaFacciamo({
  id,
  overline,
  heading,
  lead,
  facts,
  trust,
} = {}) {
  const { lang } = useLanguage();
  const d = DEFAULTS[lang];
  const resolvedFacts = facts || DEFAULT_FACTS[lang];
  const resolvedTrust = trust !== undefined ? trust : DEFAULT_TRUST[lang];
  const resolvedOverline = overline ?? d.overline;
  const resolvedHeading = heading ?? d.heading;

  return (
    <section id={id} style={{
      background: '#F2F2F2',
      padding: '120px 56px',
      borderTop: '1px solid #ECEFF3'
    }}>
      <div style={{ maxWidth: 1328, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'flex-start' }}>
          <div style={{ position: 'sticky', top: 140 }}>
            <div className="overline" style={{ color: '#0D0D12', marginBottom: 16 }}>
              {resolvedOverline}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: 44, lineHeight: '52px', letterSpacing: '-0.012em',
              color: '#0D0D12', margin: 0
            }}>
              {resolvedHeading}
            </h2>
            {lead && (
              <p style={{
                marginTop: 18, fontFamily: 'var(--font-display)',
                fontSize: 17, lineHeight: '26px', color: '#36394A', maxWidth: 380
              }}>
                {lead}
              </p>
            )}

            {resolvedTrust && (
              <div style={{
                marginTop: 36, padding: 22, borderRadius: 12,
                background: '#fff', boxShadow: 'inset 0 0 0 1px #ECEFF3',
                display: 'flex', alignItems: 'center', gap: 14
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 8, background: '#0D0D12',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Icon name={resolvedTrust.icon} size={18} color="#fff" />
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 13, lineHeight: '18px', color: '#36394A'
                }}>
                  {resolvedTrust.body}
                </div>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {resolvedFacts.map((f, i) =>
              <div key={f.label} style={{
                padding: '32px 0',
                borderTop: '1px solid #DFE1E7',
                display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32,
                ...(i === resolvedFacts.length - 1 ? { borderBottom: '1px solid #DFE1E7' } : {})
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12, color: '#0D0D12',
                  letterSpacing: '0.06em', textTransform: 'uppercase', paddingTop: 4
                }}>
                  {String(i + 1).padStart(2, '0')} · {f.label}
                </div>
                <p style={{
                  fontFamily: 'var(--font-display)', fontSize: 19, lineHeight: '30px',
                  color: '#0D0D12', margin: 0
                }}>
                  {f.body}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CosaFacciamo;
