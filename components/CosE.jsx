'use client';

import { Fragment } from 'react';
import Icon from './Icon';
import { useLanguage } from '../lib/LanguageContext';

// CosE — SEO definition block for /soluzioni.

const CONTENT = {
  it: {
    overline: "Cos'è una soluzione di logistica digitale integrata",
    h2: 'Una soluzione non è un software.\nÈ un software che risolve un problema in un settore.',
    p1: <>Una <strong>soluzione di logistica digitale integrata</strong> è la combinazione coordinata di un <strong>software</strong> (gestionale o verticale), uno o più <strong>dispositivi hardware</strong> (terminali, stampanti, lettori), un <strong>processo operativo</strong> definito e un servizio di <strong>system integration</strong> che cuce il tutto al sistema informativo esistente.</>,
    p2: <>In LogiExpert ogni soluzione viene costruita seguendo una gerarchia esplicita: partiamo dal <strong>settore</strong> di riferimento, isoliamo il <strong>problema</strong> ricorrente, individuiamo la <strong>soluzione</strong> di business, e la realizziamo con un <strong>software proprietario</strong> — <em>LogiTrace</em>, <em>LogiPod</em> o <em>LogiStock</em>.</>,
    chainLabel: 'La gerarchia, applicata a un caso reale',
    chain: [
      { label: 'Azienda',   value: 'LogiExpert',        sub: 'System integrator' },
      { label: 'Settore',   value: 'Logistica & Trasporti', sub: 'es. flotta di consegna' },
      { label: 'Problema',  value: 'POD su carta',       sub: 'fogli persi, fatture in ritardo' },
      { label: 'Soluzione', value: 'Proof of Delivery digitale', sub: 'firma + foto + GPS' },
      { label: 'Software',  value: 'LogiPod',            sub: 'sviluppato da LogiExpert' },
    ],
    footer: <>Lo stesso schema vale per <strong>Tracciabilità Pallet → LogiTrace</strong>,{' '}<strong>Warehouse Management → LogiStock</strong> e{' '}<strong>AIDC &amp; Mobility → hardware partner</strong>. Cambia il settore, cambia il problema — la struttura della risposta resta la stessa.</>,
    footerCta: 'Come integriamo',
  },
  en: {
    overline: 'What is an integrated digital logistics solution',
    h2: 'A solution is not a software.\nIt is software that solves a problem in a specific sector.',
    p1: <>An <strong>integrated digital logistics solution</strong> is the coordinated combination of a <strong>software</strong> (ERP or vertical), one or more <strong>hardware devices</strong> (terminals, printers, scanners), a defined <strong>operational process</strong> and a <strong>system integration</strong> service that connects everything to the existing information system.</>,
    p2: <>At LogiExpert every solution is built following an explicit hierarchy: we start from the reference <strong>sector</strong>, isolate the recurring <strong>problem</strong>, identify the business <strong>solution</strong>, and implement it with a <strong>proprietary software</strong> — <em>LogiTrace</em>, <em>LogiPod</em> or <em>LogiStock</em>.</>,
    chainLabel: 'The hierarchy, applied to a real case',
    chain: [
      { label: 'Company',   value: 'LogiExpert',          sub: 'System integrator' },
      { label: 'Sector',    value: 'Logistics & Transport', sub: 'e.g. delivery fleet' },
      { label: 'Problem',   value: 'Paper POD',            sub: 'lost slips, delayed invoices' },
      { label: 'Solution',  value: 'Digital Proof of Delivery', sub: 'signature + photo + GPS' },
      { label: 'Software',  value: 'LogiPod',              sub: 'developed by LogiExpert' },
    ],
    footer: <>The same pattern applies to <strong>Pallet Tracking → LogiTrace</strong>,{' '}<strong>Warehouse Management → LogiStock</strong> and{' '}<strong>AIDC &amp; Mobility → hardware partner</strong>. The sector changes, the problem changes — the structure of the answer remains the same.</>,
    footerCta: 'How we integrate',
  },
};

function CosE() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <section style={{ background: '#F2F2F2', padding: '120px 56px' }}>
      <div style={{ maxWidth: 1328, margin: '0 auto' }}>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80,
          alignItems: 'flex-start', marginBottom: 64
        }}>
          <div>
            <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
              {c.overline}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em',
              color: '#0D0D12', margin: 0
            }}>
              {c.h2.split('\n').map((line, i) => (
                i === 0 ? <span key={i}>{line}<br/></span> : <span key={i}>{line}</span>
              ))}
            </h2>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: '30px', color: '#36394A' }}>
            <p style={{ margin: 0 }}>{c.p1}</p>
            <p style={{ margin: '22px 0 0' }}>{c.p2}</p>
          </div>
        </div>

        {/* Visual chain */}
        <div style={{
          background: '#fff', borderRadius: 24, padding: '40px 32px',
          boxShadow: 'inset 0 0 0 1px #ECEFF3'
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, color: '#666D80',
            letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 28
          }}>
            {c.chainLabel}
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)',
            alignItems: 'stretch', gap: 0
          }}>
            {c.chain.map((item, i) => {
              const isLast = i === c.chain.length - 1;
              return (
                <Fragment key={item.label}>
                  <div style={{ gridColumn: 'span 1' }}>
                    <div style={{
                      padding: 18, borderRadius: 14,
                      background: isLast ? 'var(--le-red)' : '#F6F8FA',
                      color: isLast ? '#fff' : '#0D0D12',
                      height: '100%',
                      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                      minHeight: 144,
                      boxShadow: isLast ? '0 6px 18px -8px rgba(205,22,50,0.5)' : 'none'
                    }}>
                      <div style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        color: isLast ? 'rgba(255,255,255,0.78)' : '#666D80'
                      }}>
                        {String(i + 1).padStart(2, '0')} · {item.label}
                      </div>
                      <div>
                        <div style={{
                          fontFamily: 'var(--font-display)', fontWeight: 500,
                          fontSize: 18, lineHeight: '24px', letterSpacing: '-0.005em'
                        }}>
                          {item.value}
                        </div>
                        <div style={{
                          marginTop: 6, fontFamily: 'var(--font-display)',
                          fontSize: 12, lineHeight: '16px',
                          color: isLast ? 'rgba(255,255,255,0.78)' : '#666D80'
                        }}>
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  </div>
                  {!isLast && (
                    <div style={{
                      gridColumn: 'span 1',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--le-red)'
                    }}>
                      <Icon name="arrow" size={20} color="var(--le-red)" stroke={2} />
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>

          <div style={{
            marginTop: 32, paddingTop: 24, borderTop: '1px dashed #DFE1E7',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 14, lineHeight: '22px',
              color: '#36394A', maxWidth: 720
            }}>
              {c.footer}
            </div>
            <a href="/#sysint" style={{
              flexShrink: 0,
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '0 18px', height: 44,
              background: '#0D0D12', color: '#fff', borderRadius: 6,
              fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 14, textDecoration: 'none'
            }}>
              {c.footerCta} <Icon name="arrow" size={14} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CosE;
