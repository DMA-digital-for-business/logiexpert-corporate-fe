'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Header from './Header';
import ScrollReveal from './ScrollReveal';

function getActiveMenu(pathname) {
  if (pathname === '/soluzioni' || pathname.startsWith('/soluzioni/') ||
      pathname === '/en/solutions' || pathname.startsWith('/en/solutions/')) {
    return 'soluzioni';
  }
  if (pathname === '/contatti' || pathname === '/en/contact') {
    return 'contatti';
  }
  if (pathname === '/azienda' || pathname.startsWith('/azienda/') ||
      pathname === '/en/about' || pathname.startsWith('/en/about/')) {
    return 'azienda';
  }
  return 'home';
}

export default function SiteShell({ children }) {
  const pathname = usePathname();

  return (
    <div style={{ background: '#F2F2F2', minHeight: '100vh' }}>
      <Header active={getActiveMenu(pathname)} />
      {/* Re-run reveal observers on every client navigation */}
      <ScrollReveal key={pathname} />
      {children}
      <Footer />
    </div>
  );
}
