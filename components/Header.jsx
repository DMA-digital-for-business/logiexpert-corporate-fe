'use client';

import { useState } from 'react';
import Icon from './Icon';
import { SHOP_URL } from './links';
import { useLanguage } from '../lib/LanguageContext';

// Header — corporate site. No hello-bar, no search. Slim utility bar (lang + support + shop link)
// on top, white main row below with logo / centered nav / Contattaci CTA.

const NAV_LABELS = {
  it: { soluzioni: 'Soluzioni', sysint: 'System Integration', servizi: 'Servizi', ecommerce: 'eCommerce B2B', azienda: 'Azienda', contatti: 'Contatti' },
  en: { soluzioni: 'Solutions', sysint: 'System Integration', servizi: 'Services', ecommerce: 'B2B eCommerce', azienda: 'Company', contatti: 'Contact' },
};
const UTIL_LABELS = {
  it: { supporto: 'Supporto', aree: 'Aree riservate clienti', shop: 'Shop B2B' },
  en: { supporto: 'Support', aree: 'Customer portal', shop: 'B2B Shop' },
};

function UtilityBar() {
  const { lang, setLanguage } = useLanguage();
  const u = UTIL_LABELS[lang];
  return (
    <div style={{
      height: 36, background: '#0D0D12', color: 'rgba(255,255,255,0.78)',
      padding: '0 56px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
      gap: 28, fontFamily: 'var(--font-ui)', fontSize: 13
    }}>
      <a href="#supporto" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', textDecoration: 'none'
      }}>
        <Icon name="phone" size={13} color="#fff" /> {u.supporto}
      </a>
      <a href="/contatti" style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none' }}>
        {u.aree}
      </a>
      <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        color: '#fff', textDecoration: 'none'
      }}>
        {u.shop} <Icon name="arrowUR" size={13} color="#fff" />
      </a>

      <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.18)' }} />

      {/* Language switcher — segmented toggle wired to LanguageContext */}
      <div role="tablist" aria-label="Language" style={{
        position: 'relative', display: 'inline-flex', alignItems: 'center',
        padding: 2, borderRadius: 9999,
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)'
      }}>
        <span aria-hidden="true" style={{
          position: 'absolute', top: 2, bottom: 2, width: 'calc(50% - 2px)',
          left: lang === 'it' ? 2 : 'calc(50% + 0px)',
          background: '#fff', borderRadius: 9999,
          transition: 'left 220ms var(--ease-out)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
        }} />
        {[['it', 'IT'], ['en', 'EN']].map(([code, label]) => (
          <button key={code} role="tab" aria-selected={lang === code}
            onClick={() => setLanguage(code)} style={{
              position: 'relative', zIndex: 1,
              minWidth: 30, padding: '4px 10px',
              border: 0, cursor: 'pointer', borderRadius: 9999,
              background: 'transparent',
              color: lang === code ? '#0D0D12' : 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 11,
              letterSpacing: '0.08em',
              transition: 'color 200ms var(--ease-out)'
            }}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Header({ active = 'home' }) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const nl = NAV_LABELS[lang];
  const nav = [
    { id: 'soluzioni',  label: nl.soluzioni },
    { id: 'sysint',     label: nl.sysint },
    { id: 'servizi',    label: nl.servizi },
    { id: 'ecommerce',  label: nl.ecommerce },
    { id: 'azienda',    label: nl.azienda },
    { id: 'contatti',   label: nl.contatti },
  ];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', boxShadow: '0 1px 0 #ECEFF3' }}>
      <UtilityBar />

      <div style={{
        height: 140, padding: '0 56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/logo-logiexpert.png" style={{ height: 100 }} alt="LogiExpert" />
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {nav.map(n => {
            const href =
              n.id === 'soluzioni' ? '/soluzioni'
              : n.id === 'contatti' ? '/contatti'
              : n.id === 'azienda' ? '/azienda'
              : n.id === 'ecommerce' ? SHOP_URL
              : `/#${n.id}`;
            const ext = href.startsWith('http');

            return (
            <a key={n.id} href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener noreferrer' : undefined} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '10px 16px', borderRadius: 6,
              fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 15,
              color: active === n.id ? 'var(--le-red)' : '#0D0D12',
              background: active === n.id ? '#FEEFF2' : 'transparent',
              textDecoration: 'none', transition: 'all 200ms var(--ease-out)'
            }}
            onMouseEnter={e => { if (active !== n.id) e.currentTarget.style.background = '#F6F8FA'; }}
            onMouseLeave={e => { if (active !== n.id) e.currentTarget.style.background = 'transparent'; }}
            >
              {n.label}
              <Icon name="chevD" size={12} color={active === n.id ? 'var(--le-red)' : '#666D80'} stroke={2} />
            </a>
          )})}
        </nav>

        {/* Mobile hamburger — hidden on desktop via CSS */}
        <button className="le-burger" onClick={() => setOpen(true)} aria-label={lang === 'en' ? 'Open menu' : 'Apri menu'} style={{
          display: 'none', background: 'transparent', border: 0, cursor: 'pointer',
          width: 44, height: 44, alignItems: 'center', justifyContent: 'center'
        }}>
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="#0D0D12" strokeWidth="1.8" strokeLinecap="round">
            <line x1="1" y1="1" x2="21" y2="1"/>
            <line x1="1" y1="7" x2="21" y2="7"/>
            <line x1="1" y1="13" x2="21" y2="13"/>
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div onClick={() => setOpen(false)} style={{
          position: 'fixed', inset: 0, background: 'rgba(13,13,18,0.5)',
          zIndex: 100, animation: 'fadeUp 200ms var(--ease-out)'
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '88%', maxWidth: 360,
            background: '#fff', padding: '24px 22px',
            display: 'flex', flexDirection: 'column', gap: 8
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <img src="/assets/logo-logiexpert.png" style={{ height: 40 }} alt="LogiExpert" />
              <button onClick={() => setOpen(false)} aria-label={lang === 'en' ? 'Close menu' : 'Chiudi menu'} style={{
                width: 36, height: 36, border: '1px solid #ECEFF3', borderRadius: 8,
                background: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" stroke="#0D0D12" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="1" y1="1" x2="13" y2="13"/>
                  <line x1="13" y1="1" x2="1" y2="13"/>
                </svg>
              </button>
            </div>
            {nav.map(n => {
              const href =
                n.id === 'soluzioni' ? '/soluzioni'
                : n.id === 'contatti' ? '/contatti'
                : n.id === 'azienda' ? '/azienda'
                : n.id === 'ecommerce' ? SHOP_URL
                : `/#${n.id}`;
              const ext = href.startsWith('http');

              return (
              <a key={n.id} href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener noreferrer' : undefined} onClick={() => setOpen(false)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px 14px', borderRadius: 8,
                fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18,
                color: active === n.id ? 'var(--le-red)' : '#0D0D12',
                background: active === n.id ? '#FEEFF2' : 'transparent',
                textDecoration: 'none', borderBottom: '1px solid #F2F2F2'
              }}>
                {n.label}
                <Icon name="chevR" size={14} color={active === n.id ? 'var(--le-red)' : '#666D80'} stroke={2} />
              </a>
            )})}
          </div>
        </div>
      )}
    </header>
  );
}

export { UtilityBar };
export default Header;
