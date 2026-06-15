'use client';

import Icon from './Icon';
import { useLanguage } from '../lib/LanguageContext';

// Sectors — industries we serve (Manifatturiero, Logistica & Trasporti, Retail & Distribuzione).

const DEFAULT_ITEMS = {
  it: [
    {
      title: 'Manifatturiero',
      body: 'Tracciabilità di lotto, gestione del WIP, etichettatura industriale. Per impianti dove ogni stop è un costo.',
      tag: 'Produzione · Lotto · WIP',
      icon: 'factory',
      photo: 'url(/assets/hero-warehouse.jpg)',
      href: '/#manifatturiero',
    },
    {
      title: 'Logistica & Trasporti',
      body: 'Pallet, missioni, picking, POD: la catena dal magazzino alla firma del cliente, senza fogli volanti.',
      tag: 'Pallet · POD · Picking',
      icon: 'truck',
      photo: 'url(/assets/hero-warehouse.jpg)',
      href: '/#logistica',
    },
    {
      title: 'Retail & Distribuzione',
      body: 'Riassortimento, inventari ciclici, store-shipment. Esperienze di vendita coerenti tra back-office e punto cassa.',
      tag: 'Inventario · POS · DC',
      icon: 'retail',
      photo: 'url(/assets/hero-warehouse.jpg)',
      href: '/#retail',
    },
  ],
  en: [
    {
      title: 'Manufacturing',
      body: 'Batch tracking, WIP management, industrial labelling. For plants where every stoppage is a direct cost.',
      tag: 'Production · Batch · WIP',
      icon: 'factory',
      photo: 'url(/assets/hero-warehouse.jpg)',
      href: '/#manifatturiero',
    },
    {
      title: 'Logistics & Transport',
      body: 'Pallets, missions, picking, POD: the chain from warehouse to customer signature, without paper slips.',
      tag: 'Pallet · POD · Picking',
      icon: 'truck',
      photo: 'url(/assets/hero-warehouse.jpg)',
      href: '/#logistica',
    },
    {
      title: 'Retail & Distribution',
      body: 'Replenishment, cycle counts, store-shipment. Consistent sales experiences between back-office and point of sale.',
      tag: 'Inventory · POS · DC',
      icon: 'retail',
      photo: 'url(/assets/hero-warehouse.jpg)',
      href: '/#retail',
    },
  ],
};

const DEFAULTS = {
  it: {
    overline: 'Settori serviti',
    heading: 'Tre verticali, una sola logica di lavoro.',
    intro: 'Partiamo dal settore, identifichiamo i problemi ricorrenti, e li traduciamo in soluzioni e software. La stessa gerarchia in tutto il sito.',
    problemsCta: 'Problemi che risolviamo',
  },
  en: {
    overline: 'Industries served',
    heading: 'Three verticals, one single work logic.',
    intro: 'We start from the sector, identify recurring problems, and translate them into solutions and software. The same hierarchy throughout the site.',
    problemsCta: 'Problems we solve',
  },
};

function Sectors({
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
  const resolvedIntro = intro !== undefined ? intro : d.intro;

  return (
    <section style={{ background: '#fff', padding: '120px 56px' }}>
      <div style={{ maxWidth: 1328, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, gap: 32 }}>
          <div style={{ maxWidth: 720 }}>
            <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>{resolvedOverline}</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 40, lineHeight: '48px', letterSpacing: '-0.01em', margin: 0, color: '#0D0D12' }}>
              {resolvedHeading}
            </h2>
          </div>
          {resolvedIntro && (
            <p style={{ maxWidth: 380, fontSize: 16, lineHeight: '24px', color: '#36394A', margin: 0 }}>
              {resolvedIntro}
            </p>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {resolvedItems.map(s => (
            <a key={s.title} href={s.href} style={{
              borderRadius: 18, overflow: 'hidden', position: 'relative',
              minHeight: 460, display: 'block', textDecoration: 'none',
              background: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.85) 100%), ${s.photo} center/cover no-repeat`,
              filter: 'saturate(0.85)',
              color: '#fff',
              transition: 'transform 200ms var(--ease-out)'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; }}>
              <div style={{ position: 'absolute', inset: 0, padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{
                  display: 'inline-flex', alignSelf: 'flex-start',
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(8px)',
                  alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.22)'
                }}>
                  <Icon name={s.icon} size={22} color="#fff" stroke={1.6} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.78)', marginBottom: 12 }}>
                    {s.tag}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 32, lineHeight: '40px', letterSpacing: '-0.01em', margin: 0, color: '#fff' }}>
                    {s.title}
                  </h3>
                  <p style={{ marginTop: 12, fontSize: 16, lineHeight: '24px', color: 'rgba(255,255,255,0.9)' }}>
                    {s.body}
                  </p>
                  <div style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 500 }}>
                    <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationThickness: '1.5px' }}>
                      {d.problemsCta}
                    </span>
                    <Icon name="arrow" size={14} color="#fff" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sectors;
