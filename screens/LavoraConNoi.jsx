'use client';

import { useState } from 'react';
import CandidaturaForm from '../components/CandidaturaForm';
import PosizioniAperte from '../components/PosizioniAperte';
import FAQ from '../components/FAQ';
import StatsBlock from '../components/StatsBlock';
import Icon from '../components/Icon';
import { SPONTANEOUS } from '../lib/candidature';
import { useLanguage } from '../lib/LanguageContext';
import { useRoutes } from '../lib/routes';
import { CAREERS_COPY, CAREERS_STATS } from './careersData';

// LavoraConNoi — pagina "Lavora con noi" / "Careers" (sottopagina di Azienda).
// Composizione long-scroll: hero, valori, numeri, posizioni aperte, form, FAQ.
// Coordina il flusso "candidati" tra accordion/hero e form (preset + scroll).

export default function LavoraConNoi() {
  const { lang } = useLanguage();
  const routes = useRoutes();
  const c = CAREERS_COPY[lang];

  // Ogni richiesta di candidatura è un nuovo oggetto, così il form ri-sincronizza
  // la posizione anche se si riclicca sulla stessa.
  const [preset, setPreset] = useState(null);

  const goToForm = (position) => {
    setPreset({ position });
    const el = document.getElementById('candidati');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const heroLines = c.heroTitle.split('\n');

  return (
    <main data-screen-label="LavoraConNoi" style={{ background: '#fff' }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="le-clip" style={{
        background: '#0D0D12', color: '#fff', padding: '88px 56px 72px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="le-glow" style={{
          position: 'absolute', left: '-10%', top: '10%', width: '70%', height: '140%',
          background: 'radial-gradient(60% 60% at 30% 50%, rgba(205,22,50,0.45) 0%, rgba(0,0,0,0) 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 1328, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--font-ui)', fontSize: 13, color: 'rgba(255,255,255,0.6)',
          }}>
            <a href={routes.home} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{c.breadcrumbHome}</a>
            <Icon name="chevR" size={12} color="rgba(255,255,255,0.4)" />
            <a href={routes.about} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{c.breadcrumbAbout}</a>
            <Icon name="chevR" size={12} color="rgba(255,255,255,0.4)" />
            <span style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>{c.breadcrumbCurrent}</span>
          </div>

          <div style={{ marginTop: 40, maxWidth: 900 }}>
            <div className="overline" style={{ color: 'var(--le-red)' }}>{c.overline}</div>
            <h1 style={{
              marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: 60, lineHeight: '68px', letterSpacing: '-0.014em', color: '#fff',
              margin: '16px 0 0',
            }}>
              {heroLines[0]}<br />{heroLines[1]}
            </h1>
            <p style={{
              marginTop: 22, fontFamily: 'var(--font-display)',
              fontSize: 18, lineHeight: '28px', color: 'rgba(255,255,255,0.82)', maxWidth: 720,
            }}>
              {c.heroSubhead}
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#posizioni" style={{
                padding: '0 22px', height: 48, display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'var(--le-red)', color: '#fff', borderRadius: 6, textDecoration: 'none',
                fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15,
              }}>
                {c.heroCtaPrimary} <Icon name="arrow" size={16} color="#fff" />
              </a>
              <button type="button" onClick={() => goToForm(SPONTANEOUS)} style={{
                padding: '0 22px', height: 48, display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'transparent', color: '#fff', borderRadius: 6, cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.4)',
                fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15,
              }}>
                {c.heroCtaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERCHÉ LOGIEXPERT ────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1328, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, gap: 32 }}>
            <div style={{ maxWidth: 720 }}>
              <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>{c.valuesOverline}</div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em', color: '#0D0D12', margin: 0,
              }}>
                {c.valuesHeading}
              </h2>
            </div>
            <p style={{ maxWidth: 420, fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '24px', color: '#36394A', margin: 0 }}>
              {c.valuesIntro}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {c.values.map((v) => (
              <div key={v.title} style={{
                background: '#F6F8FA', borderRadius: 18, padding: 32,
                display: 'flex', flexDirection: 'column', gap: 18, minHeight: 240,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12, background: '#0D0D12',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={v.icon} size={22} color="#fff" stroke={1.6} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 500,
                  fontSize: 20, lineHeight: '26px', letterSpacing: '-0.005em', color: '#0D0D12', margin: 0,
                }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: '22px', color: '#36394A', margin: 0 }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NUMERI ───────────────────────────────────────────────────────── */}
      <StatsBlock
        overline={c.statsOverline}
        heading={c.statsHeading}
        items={CAREERS_STATS[lang]}
      />

      {/* ── POSIZIONI APERTE ─────────────────────────────────────────────── */}
      <PosizioniAperte c={c} lang={lang} onApply={goToForm} />

      {/* ── FORM DI CANDIDATURA ──────────────────────────────────────────── */}
      <CandidaturaForm c={c} lang={lang} routes={routes} preset={preset} />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FAQ items={c.faq.map((f) => ({ q: f.q, a: f.a }))} />
    </main>
  );
}
