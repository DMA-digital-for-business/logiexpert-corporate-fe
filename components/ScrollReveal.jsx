'use client';

import { useEffect } from 'react';

// ScrollReveal — global, mount once in SiteShell.
// Auto-reveals every `main > section` as it scrolls into view. Progressive
// enhancement: only runs when JS is available and reduced-motion is off, so the
// markup itself never hides content. Above-the-fold sections are revealed in the
// same paint to avoid any flash.

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = Array.from(document.querySelectorAll('main > section'));
    if (!sections.length) return;

    document.body.classList.add('reveal-enabled');

    const vh = window.innerHeight;
    const deferred = [];

    sections.forEach((el) => {
      if (el.dataset.reveal === 'off') return;
      el.setAttribute('data-reveal', '');
      // Reveal anything already in (or near) the viewport synchronously — no flash.
      if (el.getBoundingClientRect().top < vh * 0.9) {
        el.classList.add('is-visible');
      } else {
        deferred.push(el);
      }
    });

    if (!deferred.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    deferred.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
