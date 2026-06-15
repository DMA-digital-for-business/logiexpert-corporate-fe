'use client';

import Icon from './Icon';
import { useLanguage } from '../lib/LanguageContext';

// StatsBlock — credentials / key-figures strip on a light surface.

const DEFAULT_ITEMS = {
  it: [
    { value: '20+', label: 'Anni nella distribuzione', desc: 'Conoscenza delle dinamiche di mercato e delle logiche commerciali del settore.' },
    { value: '30+', label: 'Anni lato vendor AIDC', desc: 'Esperienza diretta su barcode, RFID e mobility, e sull’evoluzione dei principali brand.' },
    { value: '4', label: 'Software proprietari', desc: 'LogiTrace, LogiPod, LogiDealer, LogiStock — sviluppati internamente, non OEM di terze parti.' },
    { value: 'Italia', label: 'Presenza capillare', desc: 'Figure senior e junior sul territorio per tempi di risposta rapidi e relazioni continuative.' },
  ],
  en: [
    { value: '20+', label: 'Years in distribution', desc: 'Knowledge of market dynamics and commercial logic of the sector.' },
    { value: '30+', label: 'Years as AIDC vendor', desc: 'Direct experience in barcode, RFID and mobility, and the evolution of major brands.' },
    { value: '4', label: 'Proprietary software', desc: 'LogiTrace, LogiPod, LogiDealer, LogiStock — developed in-house, not third-party OEM.' },
    { value: 'Italy', label: 'Nationwide presence', desc: 'Senior and junior profiles across the territory for fast response times and ongoing relationships.' },
  ],
};

const DEFAULTS = {
  it: {
    overline: 'Competenze ed esperienza',
    heading: 'Un patrimonio di competenze costruito in trent’anni.',
  },
  en: {
    overline: 'Expertise & experience',
    heading: 'A wealth of expertise built over thirty years.',
  },
};

function StatsBlock({
  id,
  overline,
  heading,
  intro,
  items,
} = {}) {
  const { lang } = useLanguage();
  const d = DEFAULTS[lang];
  const resolvedItems = items || DEFAULT_ITEMS[lang];
  const resolvedOverline = overline ?? d.overline;
  const resolvedHeading = heading ?? d.heading;

  return (
    <section id={id} style={{ background: '#fff', padding: '120px 56px' }}>
      <div style={{ maxWidth: 1328, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, gap: 32, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 720 }}>
            <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>{resolvedOverline}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em', margin: 0, color: '#0D0D12' }}>
              {resolvedHeading}
            </h2>
          </div>
          {intro && (
            <p style={{ maxWidth: 420, fontSize: 16, lineHeight: '24px', color: '#36394A', margin: 0 }}>
              {intro}
            </p>
          )}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: `repeat(${resolvedItems.length}, 1fr)`,
          borderTop: '1px solid #DFE1E7'
        }}>
          {resolvedItems.map((s, i) => (
            <div key={s.label} style={{
              padding: '36px 28px 0 0',
              borderRight: i < resolvedItems.length - 1 ? '1px solid #DFE1E7' : 'none',
              paddingLeft: i > 0 ? 28 : 0,
              display: 'flex', flexDirection: 'column', gap: 12
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 56, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--le-red)'
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18,
                lineHeight: '24px', color: '#0D0D12'
              }}>
                {s.label}
              </div>
              <p style={{
                fontFamily: 'var(--font-display)', fontSize: 14, lineHeight: '21px',
                color: '#36394A', margin: 0
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBlock;
