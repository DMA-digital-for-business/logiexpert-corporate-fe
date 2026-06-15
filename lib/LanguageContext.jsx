'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export const LanguageContext = createContext({
  lang: 'it',
  setLanguage: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('it');

  useEffect(() => {
    const saved = localStorage.getItem('le_lang');
    if (saved === 'en') setLang('en');
  }, []);

  const setLanguage = (l) => {
    setLang(l);
    localStorage.setItem('le_lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
