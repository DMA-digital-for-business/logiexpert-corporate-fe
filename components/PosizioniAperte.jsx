'use client';

import { useMemo, useState } from 'react';
import Icon from './Icon';
import { JOBS_DATA } from '../screens/careersData';

// PosizioniAperte — sezione "Posizioni aperte": filtro per area + accordion.
// `onApply(jobId)` notifica lo screen che l'utente vuole candidarsi a una
// posizione specifica (lo screen pre-compila il form e ci scrolla sopra).

export default function PosizioniAperte({ c, lang, onApply }) {
  const [activeArea, setActiveArea] = useState('all');
  const [openJob, setOpenJob] = useState(null);

  // Aree effettivamente presenti nelle posizioni aperte, nell'ordine di c.areas
  const availableAreas = useMemo(() => {
    const keys = new Set(JOBS_DATA.map((j) => j.areaKey));
    return c.areas.map((label, i) => ({ i, label })).filter((a) => keys.has(a.i));
  }, [c.areas]);

  const visibleJobs = activeArea === 'all'
    ? JOBS_DATA
    : JOBS_DATA.filter((j) => j.areaKey === Number(activeArea));

  return (
    <section id="posizioni" style={{ background: '#F2F2F2', padding: '120px 56px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ marginBottom: 40, maxWidth: 720 }}>
          <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>{c.positionsOverline}</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em', color: '#0D0D12', margin: 0,
          }}>
            {c.positionsHeading}
          </h2>
          <p style={{ marginTop: 16, fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '24px', color: '#36394A' }}>
            {c.positionsIntro}
          </p>
        </div>

        {/* Filtro area */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {[{ i: 'all', label: c.filterAllLabel }, ...availableAreas].map((a) => {
            const key = String(a.i);
            const isActive = activeArea === key;
            return (
              <button key={key} type="button" onClick={() => { setActiveArea(key); setOpenJob(null); }} style={{
                padding: '8px 16px', borderRadius: 9999, cursor: 'pointer',
                border: isActive ? '1px solid var(--le-red)' : '1px solid #DFE1E7',
                background: isActive ? 'var(--le-red)' : '#fff',
                color: isActive ? '#fff' : '#36394A',
                fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14,
                transition: 'all 200ms var(--ease-out)',
              }}>
                {a.label}
              </button>
            );
          })}
        </div>

        {/* Accordion posizioni */}
        {visibleJobs.length === 0 ? (
          <div style={{
            background: '#fff', border: '1px solid #ECEFF3', borderRadius: 12, padding: 32,
            fontFamily: 'var(--font-display)', fontSize: 16, color: '#36394A',
          }}>
            {c.positionsEmpty}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {visibleJobs.map((job) => {
              const isOpen = openJob === job.id;
              return (
                <div key={job.id} style={{
                  border: '1px solid #ECEFF3', borderRadius: 12, background: '#fff',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'none',
                  transition: 'box-shadow 200ms var(--ease-out)', overflow: 'hidden',
                }}>
                  <button type="button" onClick={() => setOpenJob(isOpen ? null : job.id)} style={{
                    width: '100%', background: 'transparent', border: 0, cursor: 'pointer',
                    padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 16, textAlign: 'left',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 19, color: '#0D0D12' }}>
                        {job.title[lang]}
                      </div>
                      <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        <span style={chipStyle}>{c.areas[job.areaKey]}</span>
                        <span style={chipStyle}>{job.location[lang]}</span>
                      </div>
                    </div>
                    <span style={{
                      width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                      background: isOpen ? 'var(--le-red)' : '#F6F8FA',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'background 200ms var(--ease-out)',
                    }}>
                      <Icon name="chevD" size={16} color={isOpen ? '#fff' : '#0D0D12'} stroke={2}
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms var(--ease-out)' }} />
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 24px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                        <div>
                          <div style={detailLabelStyle}>{c.labelResponsibilities}</div>
                          <ul style={detailListStyle}>
                            {job.responsibilities[lang].map((r, i) => <li key={i} style={detailLiStyle}>{r}</li>)}
                          </ul>
                        </div>
                        <div>
                          <div style={detailLabelStyle}>{c.labelRequirements}</div>
                          <ul style={detailListStyle}>
                            {job.requirements[lang].map((r, i) => <li key={i} style={detailLiStyle}>{r}</li>)}
                          </ul>
                        </div>
                      </div>

                      <div style={{
                        marginTop: 24, paddingTop: 20, borderTop: '1px solid #ECEFF3',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
                      }}>
                        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                          <div>
                            <div style={metaLabelStyle}>{c.labelLocation}</div>
                            <div style={metaValueStyle}>{job.location[lang]}</div>
                          </div>
                          <div>
                            <div style={metaLabelStyle}>{c.labelContract}</div>
                            <div style={metaValueStyle}>{job.contract[lang]}</div>
                          </div>
                        </div>
                        <button type="button" onClick={() => onApply(job.id)} style={{
                          display: 'inline-flex', alignItems: 'center', gap: 8,
                          padding: '0 18px', height: 44, cursor: 'pointer', border: 0,
                          background: '#0D0D12', color: '#fff', borderRadius: 6,
                          fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 14,
                        }}>
                          {c.applyToPosition} <Icon name="arrow" size={14} color="#fff" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

// ── Stili condivisi ─────────────────────────────────────────────────────────
const chipStyle = {
  display: 'inline-block', padding: '4px 10px', borderRadius: 9999,
  background: '#F6F8FA', border: '1px solid #ECEFF3',
  fontFamily: 'var(--font-mono)', fontSize: 11, color: '#666D80',
  textTransform: 'uppercase', letterSpacing: '0.04em',
};
const detailLabelStyle = {
  fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--le-red)',
  textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12,
};
const detailListStyle = { margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 };
const detailLiStyle = { fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: '22px', color: '#36394A' };
const metaLabelStyle = {
  fontFamily: 'var(--font-mono)', fontSize: 10, color: '#818898',
  textTransform: 'uppercase', letterSpacing: '0.06em',
};
const metaValueStyle = { marginTop: 4, fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500, color: '#0D0D12' };
