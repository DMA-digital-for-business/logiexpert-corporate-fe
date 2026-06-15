'use client';

import Icon from './Icon';
import { useLanguage } from '../lib/LanguageContext';

// Software showcase — LogiTrace / LogiPod / LogiDealer / LogiStock.

const DEFAULT_ITEMS = {
  it: [
    {
      name: 'LogiTrace',
      label: 'Tracciabilità Pallet & Asset',
      body: 'Tracciabilità di pallet, UDC e asset riutilizzabili. Buoni asset, riconciliazione e compensazione tra gli attori della filiera.',
      icon: 'pallet',
      tone: 'dark',
      href: '/soluzioni/tracciabilita-pallet',
    },
    {
      name: 'LogiPod',
      label: 'Proof of Delivery digitale',
      body: 'Firma elettronica, foto della consegna, geolocalizzazione. POD strutturati che chiudono il giro fattura.',
      icon: 'send',
      tone: 'red',
      href: '/soluzioni/proof-of-delivery',
    },
    {
      name: 'LogiStock',
      label: 'Warehouse Management System',
      body: 'WMS proprietario per magazzini complessi. Ubicazioni, missioni, picking guidato da terminale.',
      icon: 'database',
      tone: 'dark',
      href: '/soluzioni/wms',
    },
    {
      name: 'LogiDealer',
      label: 'Gestione concessionari · In evoluzione',
      body: 'Soluzione per la gestione di reti di concessionari e canali distributivi. Contattaci per maggiori informazioni.',
      icon: 'building',
      tone: 'light',
      href: '/contatti',
    },
  ],
  en: [
    {
      name: 'LogiTrace',
      label: 'Pallet & Asset Tracking',
      body: 'Tracking of pallets, LDUs and reusable assets. Asset notes, reconciliation and compensation between supply chain actors.',
      icon: 'pallet',
      tone: 'dark',
      href: '/soluzioni/tracciabilita-pallet',
    },
    {
      name: 'LogiPod',
      label: 'Digital Proof of Delivery',
      body: 'Electronic signature, delivery photo, geolocation. Structured PODs that close the invoice cycle.',
      icon: 'send',
      tone: 'red',
      href: '/soluzioni/proof-of-delivery',
    },
    {
      name: 'LogiStock',
      label: 'Warehouse Management System',
      body: 'Proprietary WMS for complex warehouses. Locations, missions, terminal-guided picking.',
      icon: 'database',
      tone: 'dark',
      href: '/soluzioni/wms',
    },
    {
      name: 'LogiDealer',
      label: 'Dealer network management · In development',
      body: 'Solution for managing dealer networks and distribution channels. Contact us for more information.',
      icon: 'building',
      tone: 'light',
      href: '/contatti',
    },
  ],
};

const DEFAULTS = {
  it: {
    overline: 'Software LogiExpert',
    heading: 'Quattro prodotti proprietari per chiudere il ciclo logistico.',
    intro: 'Sviluppati internamente, integrati con i nostri hardware, manutenuti dal nostro team — non da terze parti.',
    discoverLabel: 'Scopri',
  },
  en: {
    overline: 'LogiExpert Software',
    heading: 'Four proprietary products to close the logistics cycle.',
    intro: 'Developed in-house, integrated with our hardware, maintained by our team — not by third parties.',
    discoverLabel: 'Discover',
  },
};

function SoftwareTrio({
  overline,
  heading,
  intro,
  items,
  cta = null,
} = {}) {
  const { lang } = useLanguage();
  const d = DEFAULTS[lang];
  const resolvedItems = items || DEFAULT_ITEMS[lang];
  const resolvedOverline = overline ?? d.overline;
  const resolvedHeading = heading ?? d.heading;
  const resolvedIntro = intro !== undefined ? intro : d.intro;

  return (
    <section style={{ background: '#F2F2F2', padding: '120px 56px' }}>
      <div style={{ maxWidth: 1328, margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          gap: 32, marginBottom: 48, flexWrap: 'wrap'
        }}>
          <div style={{ maxWidth: 780 }}>
            <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>{resolvedOverline}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 40, lineHeight: '48px', letterSpacing: '-0.01em', margin: 0, color: '#0D0D12' }}>
              {resolvedHeading}
            </h2>
            {resolvedIntro && (
              <p style={{ marginTop: 18, fontSize: 18, lineHeight: '28px', color: '#36394A' }}>
                {resolvedIntro}
              </p>
            )}
          </div>
          {cta && (
            <a href={cta.href} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 14, color: '#0D0D12',
              textDecoration: 'none', whiteSpace: 'nowrap'
            }}>
              {cta.label} <Icon name="arrow" size={14} />
            </a>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {resolvedItems.map(s => {
            const bg = s.tone === 'red' ? '#CD1632' : s.tone === 'dark' ? '#0D0D12' : '#fff';
            const fg = s.tone === 'red' || s.tone === 'dark' ? '#fff' : '#0D0D12';
            const sub = s.tone === 'red' || s.tone === 'dark' ? 'rgba(255,255,255,0.78)' : '#36394A';
            return (
              <a key={s.name} href={s.href} style={{
                background: bg, color: fg,
                borderRadius: 18, padding: 32,
                display: 'flex', flexDirection: 'column', minHeight: 360, textDecoration: 'none',
                transition: 'transform 200ms var(--ease-out)'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: 'rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.18)',
                  ...(s.tone === 'light' ? { background: '#0D0D12', border: 0 } : {})
                }}>
                  <Icon name={s.icon} size={26} color={fg} stroke={1.6} />
                </div>
                <div style={{ marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: sub }}>
                  {s.label}
                </div>
                <h3 style={{
                  marginTop: 8, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 36,
                  lineHeight: '40px', letterSpacing: '-0.012em', color: fg
                }}>
                  {s.name}
                </h3>
                <p style={{ marginTop: 16, fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '24px', color: sub, flex: 1 }}>
                  {s.body}
                </p>
                <div style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 500 }}>
                  {d.discoverLabel} {s.name} <Icon name="arrow" size={14} color={fg} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SoftwareTrio;
