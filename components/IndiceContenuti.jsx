'use client';

// IndiceContenuti — styled table of contents for the guide pages. Takes a flat
// list of { level, text, id } (from lib/toc extractToc) and renders anchor links
// that jump to the matching heading ids emitted by <Prose>.

export default function IndiceContenuti({ items = [], title = 'Indice dei contenuti' }) {
  if (!items.length) return null;

  return (
    <nav aria-label={title} style={{
      margin: '0 0 44px', padding: '26px 28px',
      background: '#F6F8FA', border: '1px solid #ECEFF3', borderRadius: 14,
    }}>
      <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>{title}</div>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, counterReset: 'toc' }}>
        {items.map((it) => {
          const sub = it.level >= 3;
          return (
            <li key={it.id} style={{ margin: 0 }}>
              <a href={`#${it.id}`} style={{
                display: 'flex', alignItems: 'baseline', gap: 10,
                padding: sub ? '5px 8px 5px 26px' : '8px 8px',
                borderRadius: 8, textDecoration: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: sub ? 14.5 : 16,
                fontWeight: sub ? 400 : 500,
                color: sub ? '#5A6072' : '#0D0D12',
                lineHeight: '22px',
                transition: 'background 160ms var(--ease-out), color 160ms var(--ease-out)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--le-red)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = sub ? '#5A6072' : '#0D0D12'; }}
              >
                <span aria-hidden="true" style={{
                  flexShrink: 0, marginTop: sub ? 7 : 8,
                  width: sub ? 4 : 6, height: sub ? 4 : 6, borderRadius: '50%',
                  background: sub ? '#C6CBD4' : 'var(--le-red)',
                }} />
                <span>{it.text}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
