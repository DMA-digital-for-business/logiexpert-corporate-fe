'use client';

import Icon from './Icon';
import { SHOP_URL } from './links';
import { useLanguage } from '../lib/LanguageContext';

// Footer — dark outer + dark-deep inner, category pills + columns

const CONTENT = {
  it: {
    shopHeading: 'Acquista per categoria',
    shopLink: "Vai all'eCommerce B2B",
    categories: ['Stampanti', 'Terminali', 'Lettori', 'POS', 'RFID', 'Sanificabili', 'Consumabili', 'Software', 'Servizi'],
    cols: [
      { title: 'Soluzioni', links: [
        { l: 'Tracciabilità Pallet',  h: '/soluzioni/tracciabilita-pallet' },
        { l: 'Proof of Delivery',     h: '/soluzioni/proof-of-delivery' },
        { l: 'WMS — LogiStock',       h: '/soluzioni/wms' },
        { l: 'AIDC & Mobility',       h: '/soluzioni/aidc-mobility' },
      ]},
      // Settori column removed — hash anchors (/#manifatturiero etc.) non esistono ancora
      { title: 'Azienda', links: [
        { l: 'Chi siamo',           h: '/azienda#chi-siamo' },
        { l: 'Il nostro approccio', h: '/azienda#approccio' },
        { l: 'Contatti',            h: '/contatti' },
        { l: 'Lavora con noi',      h: '/contatti' },
      ]},
      // Legal column removed — pagine legali non ancora disponibili
    ],
    copyright: '© LogiExpert 2026 — Tutti i diritti riservati',
    tagline: 'System integrator · Software house per la logistica digitale',
  },
  en: {
    shopHeading: 'Shop by category',
    shopLink: 'Go to B2B eCommerce',
    categories: ['Printers', 'Terminals', 'Scanners', 'POS', 'RFID', 'Sanitizable', 'Consumables', 'Software', 'Services'],
    cols: [
      { title: 'Solutions', links: [
        { l: 'Pallet Tracking',       h: '/soluzioni/tracciabilita-pallet' },
        { l: 'Proof of Delivery',     h: '/soluzioni/proof-of-delivery' },
        { l: 'WMS — LogiStock',       h: '/soluzioni/wms' },
        { l: 'AIDC & Mobility',       h: '/soluzioni/aidc-mobility' },
      ]},
      // Industries column removed — hash anchors (/#manifatturiero etc.) do not exist yet
      { title: 'Company', links: [
        { l: 'About us',          h: '/azienda#chi-siamo' },
        { l: 'Our approach',      h: '/azienda#approccio' },
        { l: 'Contact',           h: '/contatti' },
        { l: 'Work with us',      h: '/contatti' },
      ]},
      // Legal column removed — legal pages not yet available
    ],
    copyright: '© LogiExpert 2026 — All rights reserved',
    tagline: 'System integrator · Software house for digital logistics',
  },
};

function Footer() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <footer style={{ background: '#0D0D12', padding: '80px 56px', color: '#fff' }}>
      <div style={{ maxWidth: 1328, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, marginBottom: 28, flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, lineHeight: '36px', letterSpacing: '-0.01em', color: '#fff', margin: 0 }}>
            {c.shopHeading}
          </h3>
          <a href={SHOP_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 14, textDecoration: 'none'
          }}>
            {c.shopLink} <Icon name="arrowUR" size={14} color="#fff" />
          </a>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
          {c.categories.map(cat => (
            <a key={cat} href={SHOP_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 16px', borderRadius: 6,
              border: '1px solid rgba(255,255,255,0.18)',
              fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.88)',
              textDecoration: 'none', transition: 'all 200ms var(--ease-out)'
            }}>
              {cat} <span style={{ color: 'rgba(255,255,255,0.4)' }}>›</span>
            </a>
          ))}
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '32px 0' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 36 }}>
          <div>
            <img src="/assets/logo-logiexpert-white.png" style={{ height: 42, marginBottom: 24 }} alt="LogiExpert" />
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, lineHeight: '22px', color: 'rgba(255,255,255,0.7)' }}>
              LogiExpert srl<br/>
              Viale Sarca 336/F, Edificio 16<br/>
              20126 Milano<br/>
              <a href="tel:+390280898867" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>+39 02 80898867</a><br/>
              <a href="mailto:info@logiexpert.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>info@logiexpert.com</a><br/>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>P.IVA/VAT IT09900890964</span>
            </div>
            <div style={{ marginTop: 22, display: 'inline-flex', gap: 8 }}>
              {['link', 'mail', 'phone'].map(n => (
                <div key={n} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Icon name={n} size={16} color="#fff" />
                </div>
              ))}
            </div>
          </div>

          {c.cols.map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14, color: '#fff', marginBottom: 14, letterSpacing: '0.02em' }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map(l => (
                  <a key={l.l} href={l.h} style={{ fontFamily: 'var(--font-display)', fontSize: 14, lineHeight: '22px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                    {l.l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '36px 0 24px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-display)', fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
          <span>{c.copyright}</span>
          <span>{c.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
