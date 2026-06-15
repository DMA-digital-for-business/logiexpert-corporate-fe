'use client';

import { useRef } from 'react';

// Spotlight — wraps a (usually dark) grid and paints a soft red radial glow that
// follows the cursor. Pure CSS variables, no re-render on move. Content is layered
// above the glow.

export default function Spotlight({ children, style, className = '' }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      className={`le-spotlight ${className}`}
      onMouseMove={handleMove}
      style={style}
    >
      <div className="le-spotlight__glow" />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
