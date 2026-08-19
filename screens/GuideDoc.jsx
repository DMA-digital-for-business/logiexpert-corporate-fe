'use client';

import Icon from '../components/Icon';
import Prose from '../components/Prose';
import { useRoutes } from '../lib/routes';
import { useLanguage } from '../lib/LanguageContext';

// GuideDoc — shared long-form layout for the purchase-process guides.
// Renders a dark hero (overline + title + optional badge/subtitle) and a white
// body with the Markdown content. Used by both the public customer guide and the
// internal operating manual.

export default function GuideDoc({ overline, title, subtitle, badge, notice, content }) {
  const routes = useRoutes();
  const { lang } = useLanguage();
  const back = lang === 'en' ? 'Back to home' : 'Torna alla home';

  return (
    <main data-screen-label="GuideDoc" style={{ background: '#fff' }}>
      <section className="le-clip" style={{
        background: '#0D0D12', color: '#fff', padding: '88px 56px 72px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="le-glow" style={{
          position: 'absolute', left: '-10%', top: '10%', width: '70%', height: '140%',
          background: 'radial-gradient(60% 60% at 30% 50%, rgba(205,22,50,0.4) 0%, rgba(0,0,0,0) 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative' }}>
          {badge && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18,
              padding: '6px 12px', borderRadius: 9999,
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
              fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
              color: '#fff', textTransform: 'uppercase',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--le-red)' }} />
              {badge}
            </span>
          )}
          <div className="overline" style={{ color: 'var(--le-red)' }}>{overline}</div>
          <h1 style={{
            marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 44, lineHeight: '52px', letterSpacing: '-0.014em', color: '#fff', margin: '16px 0 0',
          }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{
              marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: '20px',
              color: 'rgba(255,255,255,0.7)',
            }}>
              {subtitle}
            </p>
          )}
        </div>
      </section>

      <section style={{ background: '#fff', padding: '64px 56px 120px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {notice && (
            <div style={{
              display: 'flex', gap: 12, alignItems: 'flex-start',
              margin: '0 0 32px', padding: '16px 20px', borderRadius: 12,
              background: '#FFF8E6', border: '1px solid #F2E2B0',
              fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: '23px', color: '#6B5A16',
            }}>
              <span aria-hidden="true" style={{ fontSize: 18, lineHeight: '23px' }}>⚠️</span>
              <span>{notice}</span>
            </div>
          )}

          <Prose content={content} />

          <a href={routes.home} style={{
            marginTop: 48,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            height: 48, padding: '0 22px', background: '#0D0D12', color: '#fff', borderRadius: 6,
            fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15, textDecoration: 'none',
          }}>
            {back} <Icon name="arrow" size={16} color="#fff" />
          </a>
        </div>
      </section>
    </main>
  );
}
