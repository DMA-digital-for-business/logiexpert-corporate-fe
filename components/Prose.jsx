import { Fragment } from 'react';

// Prose — a small, dependency-free Markdown renderer for long-form guide pages.
// Supports the subset used by the LogiExpert guides: h1–h3, paragraphs, horizontal
// rules, blockquotes, unordered / ordered / task lists, GFM pipe tables and the
// inline marks **bold**, [link](url) and `code`. Styling matches the site tokens.

// ── Inline marks ────────────────────────────────────────────────────────────
const INLINE = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))|(`(.+?)`)/g;

function renderInline(text, keyPrefix = 'i') {
  const nodes = [];
  let last = 0;
  let m;
  let n = 0;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const key = `${keyPrefix}-${n++}`;
    if (m[1]) {
      nodes.push(<strong key={key} style={{ fontWeight: 600, color: '#0D0D12' }}>{m[2]}</strong>);
    } else if (m[3]) {
      const external = /^https?:\/\//.test(m[5]);
      nodes.push(
        <a key={key} href={m[5]} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}
          style={{ color: 'var(--le-red)', textDecoration: 'underline', textUnderlineOffset: 2 }}>
          {m[4]}
        </a>
      );
    } else if (m[6]) {
      nodes.push(
        <code key={key} style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.88em',
          background: '#F2F2F2', border: '1px solid #ECEFF3', borderRadius: 5, padding: '1px 6px', color: '#0D0D12',
        }}>{m[7]}</code>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

// ── Block-level parsing ─────────────────────────────────────────────────────
const isTableSep = (l) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l);
const splitRow = (l) => l.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(c => c.trim());

export default function Prose({ content = '' }) {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;
  let key = 0;
  const k = () => `b-${key++}`;

  while (i < lines.length) {
    let line = lines[i];

    // blank
    if (line.trim() === '') { i++; continue; }

    // horizontal rule
    if (/^\s*---+\s*$/.test(line) || /^\s*\*\s*\*\s*\*\s*$/.test(line)) {
      blocks.push(<hr key={k()} style={{ border: 0, borderTop: '1px solid #ECEFF3', margin: '36px 0' }} />);
      i++; continue;
    }

    // heading
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      const text = h[2].trim();
      if (level === 1) {
        blocks.push(<h2 key={k()} style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 32, lineHeight: '40px', letterSpacing: '-0.012em', color: '#0D0D12', margin: '8px 0 12px' }}>{renderInline(text, k())}</h2>);
      } else if (level === 2) {
        blocks.push(<h3 key={k()} style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, lineHeight: '32px', letterSpacing: '-0.01em', color: '#0D0D12', margin: '40px 0 12px' }}>{renderInline(text, k())}</h3>);
      } else {
        blocks.push(<h4 key={k()} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, lineHeight: '26px', color: '#0D0D12', margin: '28px 0 10px' }}>{renderInline(text, k())}</h4>);
      }
      i++; continue;
    }

    // blockquote (highlighted callout)
    if (/^\s*>/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) {
        buf.push(lines[i].replace(/^\s*>\s?/, ''));
        i++;
      }
      blocks.push(
        <blockquote key={k()} style={{
          margin: '20px 0', padding: '18px 22px',
          background: '#FEEFF2', borderLeft: '3px solid var(--le-red)', borderRadius: 10,
          fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '25px', color: '#36394A',
        }}>
          {buf.map((b, bi) => (
            <p key={bi} style={{ margin: bi === 0 ? 0 : '10px 0 0' }}>{renderInline(b, `${k()}`)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    // table
    if (line.includes('|') && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const header = splitRow(line);
      i += 2; // skip header + separator
      const rows = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        rows.push(splitRow(lines[i]));
        i++;
      }
      blocks.push(
        <div key={k()} style={{ overflowX: 'auto', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-display)', fontSize: 15 }}>
            <thead>
              <tr>
                {header.map((c, ci) => (
                  <th key={ci} style={{ textAlign: 'left', padding: '12px 14px', background: '#0D0D12', color: '#fff', fontWeight: 500, whiteSpace: 'nowrap' }}>
                    {renderInline(c, `th-${k()}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} style={{ background: ri % 2 ? '#F6F8FA' : '#fff' }}>
                  {r.map((c, ci) => (
                    <td key={ci} style={{ padding: '12px 14px', borderBottom: '1px solid #ECEFF3', color: '#36394A', lineHeight: '22px', verticalAlign: 'top' }}>
                      {renderInline(c, `td-${k()}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // task list
    if (/^\s*[-*]\s+\[[ xX]\]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+\[[ xX]\]\s+/.test(lines[i])) {
        const mm = lines[i].match(/^\s*[-*]\s+\[([ xX])\]\s+(.*)$/);
        items.push({ checked: mm[1].toLowerCase() === 'x', text: mm[2] });
        i++;
      }
      blocks.push(
        <ul key={k()} style={{ listStyle: 'none', margin: '16px 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {items.map((it, ii) => (
            <li key={ii} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '24px', color: '#36394A' }}>
              <span aria-hidden="true" style={{
                flexShrink: 0, marginTop: 2, width: 20, height: 20, borderRadius: 5,
                border: it.checked ? '1px solid var(--le-red)' : '1px solid #DFE1E7',
                background: it.checked ? 'var(--le-red)' : '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: 13, fontWeight: 700,
              }}>{it.checked ? '✓' : ''}</span>
              <span>{renderInline(it.text, `tk-${k()}`)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ''));
        i++;
      }
      blocks.push(
        <ol key={k()} style={{ margin: '16px 0', paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((it, ii) => (
            <li key={ii} style={{ fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '25px', color: '#36394A', paddingLeft: 4 }}>
              {renderInline(it, `ol-${k()}`)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // unordered list
    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i]) && !/^\s*[-*]\s+\[[ xX]\]/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ''));
        i++;
      }
      blocks.push(
        <ul key={k()} style={{ margin: '16px 0', paddingLeft: 4, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((it, ii) => (
            <li key={ii} style={{ display: 'flex', gap: 12, fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '25px', color: '#36394A' }}>
              <span aria-hidden="true" style={{ flexShrink: 0, marginTop: 9, width: 6, height: 6, borderRadius: '50%', background: 'var(--le-red)' }} />
              <span>{renderInline(it, `ul-${k()}`)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // paragraph — gather until blank or a block starter
    const para = [];
    while (
      i < lines.length && lines[i].trim() !== '' &&
      !/^\s*---+\s*$/.test(lines[i]) &&
      !/^(#{1,6})\s+/.test(lines[i]) &&
      !/^\s*>/.test(lines[i]) &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !(lines[i].includes('|') && i + 1 < lines.length && isTableSep(lines[i + 1]))
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={k()} style={{ fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '26px', color: '#36394A', margin: '14px 0' }}>
        {para.map((pl, pi) => (
          <Fragment key={pi}>
            {pi > 0 && <br />}
            {renderInline(pl, `p-${k()}`)}
          </Fragment>
        ))}
      </p>
    );
  }

  return <div>{blocks}</div>;
}
