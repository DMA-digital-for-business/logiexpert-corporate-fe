'use client';

import Icon from './Icon';
import { SHOP_URL } from './links';
import { useLanguage } from '../lib/LanguageContext';
import { useRoutes } from '../lib/routes';

// Pillars block — the 4 LogiExpert pillars as a horizontal scrolling/grid feature.
// Props-driven (defaults = Homepage copy) so the block can be reused on /azienda.

const DEFAULT_ITEMS = {
  it: [
    {
      eyebrow: '01 — Pilastro',
      title: 'eCommerce B2B',
      body: 'Catalogo digitale di hardware AIDC, mobility, stampa e consumabili. Listini dedicati, condizioni B2B, integrazioni gestionali.',
      icon: 'box',
      cta: 'Vai allo shop',
      href: SHOP_URL,
    },
    {
      eyebrow: '02 — Pilastro',
      title: 'System Integration',
      body: "Integriamo hardware, software e processi: dal magazzino al cliente, dall'ERP al device sul campo. Senza cuciture, su misura.",
      icon: 'link',
      cta: 'Come lavoriamo',
      href: '/azienda',
    },
    {
      eyebrow: '03 — Pilastro',
      title: 'Soluzioni Software',
      body: 'LogiTrace, LogiPod, LogiStock — software proprietari per tracciabilità pallet, proof of delivery e gestione magazzino.',
      icon: 'layers',
      cta: 'Esplora le soluzioni',
      href: '/soluzioni',
    },
    {
      eyebrow: '04 — Pilastro',
      title: 'Servizi',
      body: 'Assistenza, manutenzione, formazione e consulenza specialistica. Garanzia di efficienza nel tempo per ogni installazione.',
      icon: 'cog',
      cta: 'I nostri servizi',
      href: '/contatti',
    },
  ],
  en: [
    {
      eyebrow: '01 — Pillar',
      title: 'B2B eCommerce',
      body: 'Digital catalogue of AIDC hardware, mobility, printing and consumables. Dedicated price lists, B2B terms, ERP integrations.',
      icon: 'box',
      cta: 'Visit the shop',
      href: SHOP_URL,
    },
    {
      eyebrow: '02 — Pillar',
      title: 'System Integration',
      body: 'We integrate hardware, software and processes: from warehouse to customer, from ERP to field device. Seamlessly, tailor-made.',
      icon: 'link',
      cta: 'How we work',
      href: '/en/about',
    },
    {
      eyebrow: '03 — Pillar',
      title: 'Software Solutions',
      body: 'LogiTrace, LogiPod, LogiStock — proprietary software for pallet tracking, proof of delivery and warehouse management.',
      icon: 'layers',
      cta: 'Explore solutions',
      href: '/en/solutions',
    },
    {
      eyebrow: '04 — Pillar',
      title: 'Services',
      body: 'Support, maintenance, training and specialist consulting. Guaranteed long-term efficiency for every installation.',
      icon: 'cog',
      cta: 'Our services',
      href: '/en/contact',
    },
  ],
};

const DEFAULTS = {
  it: {
    overline: 'Il nostro approccio',
    heading: 'Quattro pilastri che lavorano come uno solo.',
    intro: 'Non vendiamo prodotti isolati. Componiamo soluzioni che attraversano hardware, software, integrazione e servizio — partendo dal problema del cliente, non dal nostro catalogo.',
    ctaLabel: "L'approccio LogiExpert",
  },
  en: {
    overline: 'Our approach',
    heading: 'Four pillars working as one.',
    intro: 'We don\'t sell isolated products. We compose solutions that span hardware, software, integration and service — starting from the customer\'s problem, not our catalogue.',
    ctaLabel: 'The LogiExpert approach',
  },
};

function Pillars({
  overline,
  heading,
  intro,
  items,
  cta,
  id,
} = {}) {
  const { lang } = useLanguage();
  const routes = useRoutes();
  const d = DEFAULTS[lang];
  const resolvedItems = items || DEFAULT_ITEMS[lang];
  const resolvedOverline = overline ?? d.overline;
  const resolvedHeading = heading ?? d.heading;
  const resolvedIntro = intro !== undefined ? intro : d.intro;
  const resolvedCta = cta ?? { label: d.ctaLabel, href: routes.about };

  return (
    <section id={id} style={{ background: '#F2F2F2', padding: '120px 56px' }}>
      <div style={{ maxWidth: 1328, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, gap: 32 }}>
          <div style={{ maxWidth: 720 }}>
            <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>{resolvedOverline}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 44, lineHeight: '52px', letterSpacing: '-0.01em', margin: 0, color: '#0D0D12' }}>
              {resolvedHeading}
            </h2>
            {resolvedIntro && (
              <p style={{ marginTop: 18, fontSize: 18, lineHeight: '28px', color: '#36394A', maxWidth: 600 }}>
                {resolvedIntro}
              </p>
            )}
          </div>
          {resolvedCta && (
            <a href={resolvedCta.href} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 14, color: '#0D0D12',
              textDecoration: 'none', whiteSpace: 'nowrap'
            }}>
              {resolvedCta.label} <Icon name="arrow" size={14} />
            </a>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {resolvedItems.map((p) => (
            <a key={p.title} href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                background: '#fff', borderRadius: 18, padding: 28,
                display: 'flex', flexDirection: 'column', minHeight: 380,
                textDecoration: 'none', color: '#0D0D12',
                transition: 'transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
                boxShadow: 'inset 0 0 0 1px #ECEFF3'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 18px 36px -16px rgba(9,25,72,0.18), inset 0 0 0 1px #ECEFF3'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #ECEFF3'; }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 12, background: '#0D0D12',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff'
              }}>
                <Icon name={p.icon} size={24} stroke={1.6} color="#fff" />
              </div>
              <div className="overline" style={{ color: 'var(--le-red)', marginTop: 28, fontSize: 12 }}>{p.eyebrow}</div>
              <h3 style={{ marginTop: 8, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 26, lineHeight: '32px', letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p style={{ marginTop: 12, fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: '22px', color: '#36394A', flex: 1 }}>
                {p.body}
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 18, fontSize: 14, fontWeight: 500, color: '#0D0D12', fontFamily: 'var(--font-ui)' }}>
                {p.cta} <Icon name="arrow" size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pillars;
