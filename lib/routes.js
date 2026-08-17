'use client';

import { useLanguage } from './LanguageContext';

// Central routing hook — always returns the correct path for the current language.
// Use this instead of hardcoding '/soluzioni', '/contatti', etc.
export function useRoutes() {
  const { lang } = useLanguage();
  const en = lang === 'en';
  return {
    home:      en ? '/en'           : '/',
    solutions: en ? '/en/solutions' : '/soluzioni',
    about:     en ? '/en/about'     : '/azienda',
    contact:   en ? '/en/contact'   : '/contatti',
    careers:   en ? '/en/about/careers' : '/azienda/lavora-con-noi',
    thankYou:  en ? '/en/thank-you' : '/grazie',
    privacy:   en ? '/en/privacy-policy' : '/privacy-policy',
    solution:  (slug) => en ? `/en/solutions/${slug}` : `/soluzioni/${slug}`,
  };
}
