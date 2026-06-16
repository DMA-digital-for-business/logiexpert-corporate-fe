'use client';

import { useEffect, useRef } from 'react';
import Button from './Button';
import CountUp from './CountUp';
import Icon from './Icon';
import { useLanguage } from '../lib/LanguageContext';
import { useRoutes } from '../lib/routes';

// Hero — dark left panel w/ living amber aurora + animated supply-chain motif,
// photographic right panel w/ floating product chips.

const CONTENT = {
  it: {
    badge: 'System integrator · Software house · Logistica digitale',
    chips: ['Tracciabilità Pallet', 'Proof of Delivery', 'WMS — LogiStock'],
    stats: [
      { v: '30+', l: 'anni di esperienza' },
      { v: '4',   l: 'software proprietari' },
      { v: '3',   l: 'settori verticali' },
    ],
    h1: 'Risolviamo i problemi della logistica, dal magazzino al dato.',
    p: 'Quattro pilastri integrati — eCommerce B2B, System Integration, Soluzioni Software, Servizi — per aziende manifatturiere, logistiche e retail.',
    ctaPrimary: 'Scopri le soluzioni',
    ctaSecondary: 'Richiedi una consulenza',
    caption: 'Magazzino automatizzato, Milano',
  },
  en: {
    badge: 'System integrator · Software house · Digital logistics',
    chips: ['Pallet Tracking', 'Proof of Delivery', 'WMS — LogiStock'],
    stats: [
      { v: '30+', l: 'years of experience' },
      { v: '4',   l: 'proprietary software' },
      { v: '3',   l: 'vertical sectors' },
    ],
    h1: 'We solve logistics challenges, from the warehouse to the data.',
    p: 'Four integrated pillars — B2B eCommerce, System Integration, Software Solutions, Services — for manufacturing, logistics and retail companies.',
    ctaPrimary: 'Explore solutions',
    ctaSecondary: 'Request a consultation',
    caption: 'Automated warehouse, Milan',
  },
};

function Hero() {
  const { lang } = useLanguage();
  const routes = useRoutes();
  const c = CONTENT[lang];
  const videoRef = useRef(null);

  // Load + autoplay the hero video only on desktop and only when the user has
  // not requested reduced motion. On mobile/tablet (or reduced-motion) we never
  // set `src`, so the 10 MB file is never downloaded — the <video> just shows
  // its poster (the same warehouse image used before). This keeps the LCP fast
  // and avoids burning mobile data on a decorative background.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const desktop = window.matchMedia('(min-width: 901px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    const sync = () => {
      const shouldPlay = desktop.matches && !reduced.matches;
      if (shouldPlay) {
        if (!v.src) {
          v.src = '/assets/header_video.mp4';
          v.load();
        }
        v.muted = true;
        v.play().catch(() => {});
      } else if (v.src) {
        // Switched to mobile / reduced-motion after load → fall back to poster.
        v.pause();
      }
    };

    sync();
    desktop.addEventListener('change', sync);
    reduced.addEventListener('change', sync);
    return () => {
      desktop.removeEventListener('change', sync);
      reduced.removeEventListener('change', sync);
    };
  }, []);

  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 640, background: '#101010', position: 'relative' }}>
      {/* Left — dark + animated amber aurora */}
      <div className="le-clip" style={{ position: 'relative', overflow: 'hidden', padding: '88px 56px 64px' }}>
        <div className="le-aurora" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(120% 110% at 0% 100%, #FFE9C5 0%, #B0220C 18%, rgba(176,34,12,0) 50%, rgba(0,0,0,0) 100%)',
          opacity: 0.85
        }} />
        {/* faint animated supply-chain flow motif */}
        <svg viewBox="0 0 520 160" aria-hidden="true" style={{
          position: 'absolute', left: -20, bottom: 28, width: 520, height: 160,
          pointerEvents: 'none', opacity: 0.5
        }}>
          <path d="M10 120 C 120 120, 120 40, 230 40 S 410 120, 510 120"
            fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"
            strokeDasharray="6 10" className="le-flow-line" />
          {[10, 230, 510].map((cx, i) => (
            <circle key={cx} cx={cx} cy={i === 1 ? 40 : 120} r="4"
              fill={i === 2 ? 'var(--le-red)' : 'rgba(255,255,255,0.55)'} />
          ))}
        </svg>

        <div style={{ position: 'relative', maxWidth: 560, color: '#fff' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px',
            background: 'rgba(255,255,255,0.08)', borderRadius: 9999, marginBottom: 28,
            fontFamily: 'var(--font-display)', fontSize: 13, color: '#fff',
            border: '1px solid rgba(255,255,255,0.18)'
          }}>
            <span className="le-pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFBD4C' }} />
            {c.badge}
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 56, lineHeight: '64px',
            letterSpacing: '-0.012em', color: '#fff', margin: 0, textWrap: 'balance'
          }}>
            {c.h1}
          </h1>
          <p style={{
            marginTop: 22, fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: '28px',
            color: 'rgba(255,255,255,0.78)', maxWidth: 480, margin: '22px 0 0', textWrap: 'pretty'
          }}>
            {c.p}
          </p>

          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button href={routes.solutions} variant="light">{c.ctaPrimary}</Button>
            <Button href={routes.contact} variant="ghost" icon={null}>{c.ctaSecondary}</Button>
          </div>

          <div style={{ marginTop: 56, display: 'flex', gap: 36, color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-display)', fontSize: 14 }}>
            {c.stats.map((s) => (
              <div key={s.l}>
                <CountUp value={s.v} style={{ color: '#fff', fontWeight: 500, fontSize: 28, lineHeight: 1, display: 'block' }} />
                <div style={{ marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — looping hero video w/ floating overlay chips */}
      <div className="le-clip" style={{
        position: 'relative', overflow: 'hidden', background: '#101010'
      }}>
        {/* Background video — poster paints instantly, src is attached by JS on
            desktop only (see useEffect). objectFit:cover fills the panel. */}
        <video
          ref={videoRef}
          poster="/assets/hero-warehouse.jpg"
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          style={{
            position: 'absolute', inset: 0, zIndex: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            pointerEvents: 'none'
          }}
        />
        {/* Overlay — left horizontal fade blends the video edge into the dark
            text panel (no hard seam), plus a bottom-right vignette for caption
            legibility. */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background:
            'linear-gradient(90deg, #101010 0%, rgba(16,16,16,0.88) 9%, rgba(16,16,16,0.45) 26%, rgba(16,16,16,0) 48%), ' +
            'radial-gradient(120% 120% at 100% 100%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)'
        }} />
        <div className="le-aurora" style={{
          position: 'absolute', right: '-15%', top: '-15%', width: '70%', height: '70%', zIndex: 2,
          pointerEvents: 'none',
          background: 'radial-gradient(circle, rgba(205,22,50,0.35) 0%, rgba(205,22,50,0) 65%)'
        }} />
        <div style={{ position: 'absolute', zIndex: 3, left: 36, top: 56, right: 36, display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
          {c.chips.map((t, i) => (
            <div key={t} className="le-float" style={{
              padding: '10px 16px', background: 'rgba(255,255,255,0.92)', borderRadius: 9999,
              fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14, color: '#0D0D12',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 8px 20px -8px rgba(0,0,0,0.4)',
              transform: `translateX(${i * 10}px)`,
              display: 'inline-flex', alignItems: 'center', gap: 10,
              '--float-dur': `${5.5 + i * 0.8}s`, animationDelay: `${i * 0.4}s`
            }}>
              <span className="le-pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--le-red)' }} />
              {t}
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', zIndex: 3, right: 36, bottom: 36, color: '#fff', maxWidth: 320, textAlign: 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end', fontFamily: 'var(--font-display)', fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
            <span style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.6)' }} />
            {c.caption}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
