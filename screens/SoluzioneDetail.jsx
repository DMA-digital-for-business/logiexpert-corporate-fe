'use client';

import FAQ from '../components/FAQ';
import Icon from '../components/Icon';
import LeadForm from '../components/LeadForm';
import { useLanguage } from '../lib/LanguageContext';

// SoluzioneDetail — 3rd-level page: /soluzioni/<slug>

import { SOLUZIONI_DATA } from './soluzioniData';

const UI = {
  it: {
    notFound: 'Soluzione non trovata',
    backToSolutions: 'Torna alle soluzioni',
    solutionsLabel: 'Soluzioni',
    defaultStatsLabel: 'Funzionalità chiave',
    problemSection: '01 · Il problema',
    problemsH2: 'Problemi che risolviamo.',
    softwareSection: '02 · Il software',
    featuresSection: '03 · Funzionalità',
    featuresH2pre: 'Quello che trovi dentro',
    caseSection: '04 · Caso d\'uso',
    caseMetricsLabel: 'I numeri',
    intSection: '05 · System Integration',
    intH2: 'Si integra con tutto quello che già usi.',
    intP: 'espone API REST documentate e dispone di connettori standard per i principali sistemi in uso nel mercato italiano.',
    sectorsSection: '06 · Settori che adottano questa soluzione',
    sectorsH2: 'Dove la usano i nostri clienti.',
    sectorsCta: 'Vai al settore',
    softwareBulletsLabel: 'Cosa fa, in 5 punti',
  },
  en: {
    notFound: 'Solution not found',
    backToSolutions: 'Back to solutions',
    solutionsLabel: 'Solutions',
    defaultStatsLabel: 'Key capabilities',
    problemSection: '01 · The problem',
    problemsH2: 'Problems we solve.',
    softwareSection: '02 · The software',
    featuresSection: '03 · Features',
    featuresH2pre: 'What you find inside',
    caseSection: '04 · Case study',
    caseMetricsLabel: 'The numbers',
    intSection: '05 · System Integration',
    intH2: 'Integrates with everything you already use.',
    intP: 'exposes documented REST APIs and has standard connectors for the main systems used in the Italian market.',
    sectorsSection: '06 · Sectors adopting this solution',
    sectorsH2: 'Where our customers use it.',
    sectorsCta: 'Go to sector',
    softwareBulletsLabel: 'What it does, in 5 points',
  },
};

export default function SoluzioneDetail({ slug = 'tracciabilita-pallet' }) {
  const { lang } = useLanguage();
  const ui = UI[lang];
  const rawData = SOLUZIONI_DATA[slug];
  if (!rawData) {
    return (
      <main style={{ padding: '120px 56px', textAlign: 'center' }}>
        <h1>{ui.notFound}</h1>
        <a href="/soluzioni">{ui.backToSolutions}</a>
      </main>
    );
  }

  const { icon, slug: urlSlug } = rawData;
  const langData = rawData[lang] || rawData.it;
  const { title, eyebrow, pitch, intro, statsLabel, stats, problems, software, features, sectors, integrations, caseStudy, faq } = langData;
  const resolvedStatsLabel = statsLabel || ui.defaultStatsLabel;

  return (
    <main data-screen-label={`Soluzione · ${title}`} style={{ background: '#fff' }}>

      {/* HERO */}
      <section style={{
        background: '#0D0D12', color: '#fff', padding: '88px 56px 80px',
        position: 'relative', overflow: 'hidden'
      }}>
        <div className="le-glow" style={{
          position: 'absolute', left: '-15%', top: '10%', width: '70%', height: '130%',
          background: 'radial-gradient(60% 60% at 30% 50%, rgba(205,22,50,0.45) 0%, rgba(0,0,0,0) 60%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: 1328, margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
            fontFamily: 'var(--font-ui)', fontSize: 13, color: 'rgba(255,255,255,0.6)'
          }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</a>
            <Icon name="chevR" size={12} color="rgba(255,255,255,0.4)" />
            <a href="/soluzioni" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{ui.solutionsLabel}</a>
            <Icon name="chevR" size={12} color="rgba(255,255,255,0.4)" />
            <span style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>{title}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'flex-end', marginTop: 40 }}>
            <div>
              <div className="overline" style={{ color: 'var(--le-red)' }}>{eyebrow}</div>
              <h1 style={{
                marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 60, lineHeight: '68px', letterSpacing: '-0.014em',
                color: '#fff', maxWidth: 900
              }}>
                {title}.
              </h1>
              <p style={{
                marginTop: 22, fontFamily: 'var(--font-display)',
                fontSize: 20, lineHeight: '30px', color: 'rgba(255,255,255,0.82)', maxWidth: 720
              }}>
                {pitch}
              </p>

              <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="/contatti" style={{
                  height: 48, padding: '0 22px', display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'var(--le-red)', color: '#fff', borderRadius: 6,
                  fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15,
                  textDecoration: 'none', boxShadow: '0 2px 4px rgba(149,18,43,0.25)'
                }}>
                  {lang === 'en' ? 'Request a demo' : 'Richiedi una demo'} {software.name} <Icon name="arrow" size={16} color="#fff" />
                </a>
                <a href={`#${software.name.toLowerCase()}`} style={{
                  height: 48, padding: '0 22px', display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'transparent', color: '#fff', borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.28)',
                  fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15, textDecoration: 'none'
                }}>
                  {lang === 'en' ? 'Discover' : 'Scopri'} {software.name}
                </a>
              </div>
            </div>

            {/* Stats card on dark */}
            <div style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 18, padding: 28
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 18
              }}>
                {resolvedStatsLabel}
              </div>
              {stats.map((s, i) => (
                <div key={s.l} style={{
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                  padding: '14px 0',
                  borderTop: i > 0 ? '1px solid rgba(255,255,255,0.10)' : 'none'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 500,
                    fontSize: 38, lineHeight: 1, color: 'var(--le-red)', letterSpacing: '-0.02em'
                  }}>
                    {s.v}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 13, lineHeight: '18px',
                    color: 'rgba(255,255,255,0.8)', textAlign: 'right', maxWidth: 160
                  }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + PROBLEMI */}
      <section style={{ background: '#fff', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1328, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, marginBottom: 64 }}>
            <div>
              <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
                {ui.problemSection}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em',
                color: '#0D0D12', margin: 0
              }}>
                {ui.problemsH2}
              </h2>
            </div>
            <p style={{
              fontFamily: 'var(--font-display)', fontSize: 19, lineHeight: '30px',
              color: '#36394A', margin: 0, alignSelf: 'flex-end', maxWidth: 700
            }}>
              {intro}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {problems.map((p, i) => (
              <div key={p.t} style={{
                background: '#F6F8FA', borderRadius: 18, padding: 32,
                display: 'flex', gap: 22
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  boxShadow: 'inset 0 0 0 1px #ECEFF3'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--le-red)', fontWeight: 600
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 500,
                    fontSize: 20, lineHeight: '26px', letterSpacing: '-0.005em',
                    color: '#0D0D12', margin: 0
                  }}>
                    {p.t}
                  </h3>
                  <p style={{
                    marginTop: 10, fontFamily: 'var(--font-display)',
                    fontSize: 15, lineHeight: '22px', color: '#36394A', margin: '10px 0 0'
                  }}>
                    {p.b}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOFTWARE — 3° livello, in evidenza */}
      <section id={software.name.toLowerCase()} style={{ background: '#0D0D12', color: '#fff', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1328, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
                {ui.softwareSection}
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '8px 14px', borderRadius: 9999,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.16)',
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: 20
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--le-red)' }} />
                {software.label}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 64, lineHeight: '72px', letterSpacing: '-0.014em',
                color: '#fff', margin: 0
              }}>
                {software.name}
              </h2>
              <p style={{
                marginTop: 22, fontFamily: 'var(--font-display)',
                fontSize: 18, lineHeight: '28px', color: 'rgba(255,255,255,0.82)', margin: '22px 0 0', maxWidth: 600
              }}>
                {software.desc}
              </p>
              <div style={{
                marginTop: 24, display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '8px 14px', borderRadius: 8,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                fontFamily: 'var(--font-mono)', fontSize: 12, color: 'rgba(255,255,255,0.78)'
              }}>
                <Icon name="cube" size={12} color="var(--le-red)" />
                {software.sku}
              </div>
            </div>

            <div style={{
              background: '#fff', borderRadius: 18, padding: 32, color: '#0D0D12',
              boxShadow: '0 24px 64px -24px rgba(205,22,50,0.4)'
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, color: '#666D80',
                letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20
              }}>
                {ui.softwareBulletsLabel}
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {software.bullets.map((b, i) => (
                  <li key={b} style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    paddingBottom: 14, borderBottom: i < software.bullets.length - 1 ? '1px solid #ECEFF3' : 'none'
                  }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: 6, background: '#FEEFF2', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Icon name="check" size={13} color="var(--le-red)" stroke={2.5} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: '22px', color: '#0D0D12' }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FUNZIONALITÀ */}
      <section style={{ background: '#fff', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1328, margin: '0 auto' }}>
          <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
            {ui.featuresSection}
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em',
            color: '#0D0D12', margin: '0 0 48px', maxWidth: 720
          }}>
            {ui.featuresH2pre} {software.name}.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {features.map(f => (
              <div key={f.t} style={{
                padding: 28, borderRadius: 14,
                background: '#F6F8FA', minHeight: 200,
                display: 'flex', flexDirection: 'column', gap: 16
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, background: '#0D0D12',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Icon name={f.icon} size={20} color="#fff" stroke={1.6} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 500,
                  fontSize: 18, lineHeight: '24px', color: '#0D0D12', margin: 0
                }}>
                  {f.t}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-display)', fontSize: 14, lineHeight: '21px',
                  color: '#36394A', margin: 0
                }}>
                  {f.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY — opzionale */}
      {caseStudy && (
      <section style={{ background: '#F2F2F2', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1328, margin: '0 auto' }}>
          <div style={{
            background: '#fff', borderRadius: 24, padding: 64,
            display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64,
            position: 'relative', overflow: 'hidden'
          }}>
            <div>
              <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
                {ui.caseSection}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, color: '#666D80',
                letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 20
              }}>
                {caseStudy.logo}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em',
                color: '#0D0D12', margin: 0
              }}>
                {caseStudy.headline}
              </h2>
              <p style={{
                marginTop: 22, fontFamily: 'var(--font-display)',
                fontSize: 17, lineHeight: '26px', color: '#36394A', margin: '22px 0 0', maxWidth: 580
              }}>
                {caseStudy.body}
              </p>
            </div>
            <div style={{
              background: '#0D0D12', color: '#fff', borderRadius: 18, padding: 32,
              display: 'flex', flexDirection: 'column', gap: 22
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.08em', textTransform: 'uppercase'
              }}>
                {ui.caseMetricsLabel}
              </div>
              {caseStudy.metrics.map((m, i) => (
                <div key={m.l} style={{
                  paddingTop: i > 0 ? 18 : 0,
                  borderTop: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 500,
                    fontSize: 44, lineHeight: 1, color: 'var(--le-red)', letterSpacing: '-0.02em'
                  }}>
                    {m.v}
                  </div>
                  <div style={{
                    marginTop: 6, fontFamily: 'var(--font-display)', fontSize: 13, color: 'rgba(255,255,255,0.78)'
                  }}>
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* INTEGRAZIONI */}
      <section style={{ background: '#fff', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1328, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'flex-start' }}>
            <div>
              <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
                {ui.intSection}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 36, lineHeight: '44px', letterSpacing: '-0.012em',
                color: '#0D0D12', margin: 0
              }}>
                {ui.intH2}
              </h2>
              <p style={{
                marginTop: 18, fontFamily: 'var(--font-display)',
                fontSize: 16, lineHeight: '24px', color: '#36394A', margin: '18px 0 0', maxWidth: 360
              }}>
                {software.name} {ui.intP}
              </p>
            </div>
            <div style={{ borderTop: '1px solid #DFE1E7' }}>
              {integrations.map(i => (
                <div key={i.t} style={{
                  padding: '24px 0', borderBottom: '1px solid #DFE1E7',
                  display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, alignItems: 'baseline'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--le-red)',
                    letterSpacing: '0.06em', textTransform: 'uppercase'
                  }}>
                    {i.t}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: 17, lineHeight: '26px', color: '#0D0D12'
                  }}>
                    {i.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SETTORI CHE LA USANO */}
      <section style={{ background: '#F2F2F2', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1328, margin: '0 auto' }}>
          <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
            {ui.sectorsSection}
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 36, lineHeight: '44px', letterSpacing: '-0.012em',
            color: '#0D0D12', margin: '0 0 40px', maxWidth: 720
          }}>
            {ui.sectorsH2}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {sectors.map(s => (
              <a key={s.t} href={s.href} style={{
                padding: 28, borderRadius: 14, background: '#fff',
                display: 'flex', flexDirection: 'column', gap: 14,
                textDecoration: 'none', color: '#0D0D12',
                boxShadow: 'inset 0 0 0 1px #ECEFF3',
                transition: 'all 200ms var(--ease-out)'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 32px -16px rgba(0,0,0,0.15), inset 0 0 0 1px #ECEFF3'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #ECEFF3'; }}>
                <div className="overline" style={{ color: '#666D80' }}>{s.tag}</div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 500,
                  fontSize: 24, lineHeight: '30px', letterSpacing: '-0.005em', margin: 0
                }}>
                  {s.t}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-display)', fontSize: 14, lineHeight: '21px',
                  color: '#36394A', margin: 0, flex: 1
                }}>
                  {s.b}
                </p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500, marginTop: 6
                }}>
                  {ui.sectorsCta} <Icon name="arrow" size={13} color="#0D0D12" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faq} />

      {/* LEAD */}
      <LeadForm />
    </main>
  );
}
