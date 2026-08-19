'use client';

import { useRef, useState } from 'react';
import Icon from './Icon';
import { SHOP_URL } from './links';
import { useLanguage } from '../lib/LanguageContext';

// Header — corporate site. No hello-bar, no search. Slim utility bar (lang + support + shop link)
// on top, white main row below with logo / centered nav / Contattaci CTA.
//
// Nav items that own real sub-pages carry a `children` array and render a dropdown
// (desktop hover panel / mobile accordion) with a chevron. Items without sub-pages
// (external Shop, Contatti) render as a plain link with no chevron.

const NAV_LABELS = {
  it: { soluzioni: 'Soluzioni', ecommerce: 'eCommerce B2B', azienda: 'Azienda', contatti: 'Contatti' },
  en: { soluzioni: 'Solutions', ecommerce: 'B2B eCommerce', azienda: 'Company', contatti: 'Contact' },
};
const UTIL_LABELS = {
  it: { supporto: 'Supporto', aree: 'Aree riservate clienti', shop: 'Shop B2B' },
  en: { supporto: 'Support', aree: 'Customer portal', shop: 'B2B Shop' },
};

// Sub-page menus, per language. Each entry is a reachable page or in-page section.
const SUBMENUS = {
  it: {
    soluzioni: [
      { label: 'Tutte le soluzioni',        href: '/soluzioni' },
      { label: 'Tracciabilità Pallet & Asset', href: '/soluzioni/tracciabilita-pallet' },
      { label: 'Proof of Delivery',         href: '/soluzioni/proof-of-delivery' },
      { label: 'Warehouse Management (WMS)', href: '/soluzioni/wms' },
      { label: 'AIDC & Mobility',           href: '/soluzioni/aidc-mobility' },
    ],
    azienda: [
      { label: 'Chi siamo',           href: '/azienda#chi-siamo' },
      { label: 'Il nostro approccio', href: '/azienda#approccio' },
      { label: 'Lavora con noi',      href: '/azienda/lavora-con-noi' },
    ],
  },
  en: {
    soluzioni: [
      { label: 'All solutions',              href: '/en/solutions' },
      { label: 'Pallet & Asset Traceability', href: '/en/solutions/tracciabilita-pallet' },
      { label: 'Digital Proof of Delivery',  href: '/en/solutions/proof-of-delivery' },
      { label: 'Warehouse Management (WMS)',  href: '/en/solutions/wms' },
      { label: 'AIDC & Mobility',            href: '/en/solutions/aidc-mobility' },
    ],
    azienda: [
      { label: 'About us',     href: '/en/about#chi-siamo' },
      { label: 'Our approach', href: '/en/about#approccio' },
      { label: 'Work with us', href: '/en/about/careers' },
    ],
  },
};

function UtilityBar() {
  const { lang, setLanguage } = useLanguage();
  const u = UTIL_LABELS[lang];
  const contattiHref = lang === 'en' ? '/en/contact' : '/contatti';
  return (
    <div style={{
      height: 36, background: '#0D0D12', color: 'rgba(255,255,255,0.78)',
      padding: '0 56px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
      gap: 28, fontFamily: 'var(--font-ui)', fontSize: 13
    }}>
      <a href="tel:+390280898867" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', textDecoration: 'none'
      }}>
        <Icon name="phone" size={13} color="#fff" /> {u.supporto}
      </a>
      <a href={contattiHref} style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none' }}>
        {u.aree}
      </a>
      <a href={SHOP_URL} target="_self" rel="noopener noreferrer" style={{
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

// Desktop nav item — with optional hover dropdown for items that own sub-pages.
function DesktopNavItem({ item, active }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const isActive = active === item.id;
  const hasChildren = item.children && item.children.length > 0;
  const accent = isActive ? 'var(--le-red)' : '#0D0D12';

  // Small close delay so quick mouse travel across the panel doesn't dismiss it.
  const openNow = () => { if (hasChildren) { clearTimeout(closeTimer.current); setOpen(true); } };
  const closeSoon = () => { if (hasChildren) { clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setOpen(false), 120); } };

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <a
        href={item.href}
        target={item.ext ? '_blank' : undefined}
        rel={item.ext ? 'noopener noreferrer' : undefined}
        aria-haspopup={hasChildren ? 'true' : undefined}
        aria-expanded={hasChildren ? open : undefined}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '10px 16px', borderRadius: 6,
          fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 15,
          color: accent,
          background: isActive ? '#FEEFF2' : open ? '#F6F8FA' : 'transparent',
          textDecoration: 'none', transition: 'all 200ms var(--ease-out)'
        }}
        onMouseEnter={e => { if (!isActive && !hasChildren) e.currentTarget.style.background = '#F6F8FA'; }}
        onMouseLeave={e => { if (!isActive && !hasChildren) e.currentTarget.style.background = 'transparent'; }}
      >
        {item.label}
        {hasChildren && (
          <Icon name="chevD" size={12} color={isActive ? 'var(--le-red)' : '#666D80'} stroke={2}
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms var(--ease-out)' }} />
        )}
      </a>

      {hasChildren && open && (
        // Outer wrapper touches the trigger (top:100%) and carries an 8px transparent
        // top padding as a hover "bridge" — so moving the cursor onto the panel never
        // crosses a dead zone that would dismiss it.
        <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: 8, zIndex: 60 }}>
          <div style={{
            minWidth: 268,
            background: '#fff', border: '1px solid #ECEFF3', borderRadius: 12,
            boxShadow: '0 12px 32px rgba(13,13,18,0.12)', padding: 8,
            animation: 'fadeUp 160ms var(--ease-out)'
          }}>
          {item.children.map(c => (
            <a key={c.href} href={c.href} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
              padding: '11px 12px', borderRadius: 8,
              fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14.5,
              color: '#0D0D12', textDecoration: 'none',
              transition: 'background 160ms var(--ease-out), color 160ms var(--ease-out)'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F6F8FA'; e.currentTarget.style.color = 'var(--le-red)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0D0D12'; }}
            >
              {c.label}
              <Icon name="chevR" size={13} color="#C6CBD4" stroke={2} />
            </a>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Mobile nav item — plain link, or an accordion when it owns sub-pages.
function MobileNavItem({ item, active, onNavigate }) {
  const [open, setOpen] = useState(false);
  const isActive = active === item.id;
  const hasChildren = item.children && item.children.length > 0;
  const accent = isActive ? 'var(--le-red)' : '#0D0D12';

  const rowStyle = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '16px 14px', borderRadius: 8,
    fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18,
    color: accent, background: isActive ? '#FEEFF2' : 'transparent',
    textDecoration: 'none', borderBottom: '1px solid #F2F2F2',
    width: '100%', border: 0, cursor: 'pointer', textAlign: 'left'
  };

  if (!hasChildren) {
    return (
      <a href={item.href} target={item.ext ? '_blank' : undefined} rel={item.ext ? 'noopener noreferrer' : undefined}
        onClick={onNavigate} style={rowStyle}>
        {item.label}
        <Icon name="chevR" size={14} color={isActive ? 'var(--le-red)' : '#666D80'} stroke={2} />
      </a>
    );
  }

  return (
    <div>
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} style={{ ...rowStyle, background: open ? '#F6F8FA' : rowStyle.background }}>
        {item.label}
        <Icon name="chevD" size={14} color={isActive ? 'var(--le-red)' : '#666D80'} stroke={2}
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms var(--ease-out)' }} />
      </button>
      {open && (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '4px 0 8px' }}>
          {item.children.map(c => (
            <a key={c.href} href={c.href} onClick={onNavigate} style={{
              padding: '12px 14px 12px 26px', fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: 15.5, color: '#36394A', textDecoration: 'none'
            }}>
              {c.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Header({ active = 'home' }) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const nl = NAV_LABELS[lang];
  const isEn = lang === 'en';
  const homeHref = isEn ? '/en' : '/';
  const sm = SUBMENUS[lang];

  const nav = [
    { id: 'soluzioni', label: nl.soluzioni, href: isEn ? '/en/solutions' : '/soluzioni', children: sm.soluzioni },
    { id: 'ecommerce', label: nl.ecommerce, href: SHOP_URL, ext: true },
    { id: 'azienda',   label: nl.azienda,   href: isEn ? '/en/about' : '/azienda', children: sm.azienda },
    { id: 'contatti',  label: nl.contatti,  href: isEn ? '/en/contact' : '/contatti' },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', boxShadow: '0 1px 0 #ECEFF3' }}>
      <UtilityBar />

      <div style={{
        height: 100, padding: '0 56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24
      }}>
        <a href={homeHref} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/logo-logiexpert.png" style={{ height: 150 }} alt="LogiExpert" />
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {nav.map(n => (
            <DesktopNavItem key={n.id} item={n} active={active} />
          ))}
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
            display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto'
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
            {nav.map(n => (
              <MobileNavItem key={n.id} item={n} active={active} onNavigate={() => setOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export { UtilityBar };
export default Header;
