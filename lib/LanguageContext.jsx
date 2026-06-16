'use client';

import { createContext, useContext } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const LanguageContext = createContext({ lang: 'it', setLanguage: () => {} });

const IT_TO_EN = {
  '/':          '/en',
  '/soluzioni': '/en/solutions',
  '/azienda':   '/en/about',
  '/contatti':  '/en/contact',
};

const EN_TO_IT = {
  '/en':            '/',
  '/en/solutions':  '/soluzioni',
  '/en/about':      '/azienda',
  '/en/contact':    '/contatti',
};

function getAlternateUrl(pathname, targetLang) {
  if (targetLang === 'en') {
    if (IT_TO_EN[pathname]) return IT_TO_EN[pathname];
    if (pathname.startsWith('/soluzioni/'))
      return '/en/solutions/' + pathname.slice('/soluzioni/'.length);
    return '/en';
  }
  if (EN_TO_IT[pathname]) return EN_TO_IT[pathname];
  if (pathname.startsWith('/en/solutions/'))
    return '/soluzioni/' + pathname.slice('/en/solutions/'.length);
  return '/';
}

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const router   = useRouter();
  const lang     = pathname.startsWith('/en') ? 'en' : 'it';

  const setLanguage = (newLang) => {
    if (newLang === lang) return;
    router.push(getAlternateUrl(pathname, newLang));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
