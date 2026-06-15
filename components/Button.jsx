'use client';

import Icon from './Icon';

// Button — link-styled CTA primitive. Centralises the button treatment repeated
// across heroes, sections and banners. Variants map to the design system surfaces.
//   light   → white on dark (primary on dark backgrounds)
//   red     → brand red on light
//   dark    → near-black on light
//   ghost   → transparent w/ border on dark
//   outline → transparent w/ border on light

const VARIANTS = {
  light:   { background: '#fff', color: '#0D0D12', border: 'none', shadow: '0 1px 2px rgba(0,0,0,0.2)' },
  red:     { background: 'var(--le-red)', color: '#fff', border: 'none', shadow: '0 2px 4px rgba(149,18,43,0.25)' },
  dark:    { background: '#0D0D12', color: '#fff', border: 'none', shadow: 'none' },
  ghost:   { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.28)', shadow: 'none' },
  outline: { background: 'transparent', color: '#0D0D12', border: '1px solid #DFE1E7', shadow: 'none' },
};

export default function Button({
  href = '#',
  variant = 'red',
  icon = 'arrow',
  iconLeft,
  children,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.red;
  return (
    <a href={href} {...rest} style={{
      height: 48, padding: '0 22px',
      display: 'inline-flex', alignItems: 'center', gap: 10,
      background: v.background, color: v.color, border: v.border,
      borderRadius: 6, boxShadow: v.shadow,
      fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15,
      textDecoration: 'none', whiteSpace: 'nowrap',
      transition: 'transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)',
      ...style,
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
    >
      {iconLeft && <Icon name={iconLeft} size={16} color={v.color} />}
      {children}
      {icon && <Icon name={icon} size={16} color={v.color} />}
    </a>
  );
}
