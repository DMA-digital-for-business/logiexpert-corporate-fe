'use client';

import { useEffect, useRef, useState } from 'react';

// CountUp — animates the numeric part of a label (e.g. "30+", "20+", "4") from 0
// to its real value when it scrolls into view. Non-numeric prefixes/suffixes
// (like "+" or "Italia") are preserved verbatim. Reduced-motion shows the final
// value immediately. Values must be real — this only animates, never invents.

export default function CountUp({ value, duration = 1200, style }) {
  const match = String(value).match(/^(\D*)(\d[\d.]*)(.*)$/);
  const ref = useRef(null);
  const [display, setDisplay] = useState(match ? match[1] + '0' + match[3] : value);
  const done = useRef(false);

  useEffect(() => {
    if (!match) return; // nothing numeric to animate
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefix = match[1];
    const target = parseFloat(match[2]);
    const decimals = (match[2].split('.')[1] || '').length;
    const suffix = match[3];

    const settle = () => setDisplay(prefix + target.toFixed(decimals) + suffix);

    if (reduce) { settle(); return; }

    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setDisplay(prefix + (target * eased).toFixed(decimals) + suffix);
        if (t < 1) requestAnimationFrame(tick);
        else settle();
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return <span ref={ref} style={style}>{match ? display : value}</span>;
}
