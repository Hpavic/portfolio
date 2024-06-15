import React, { createContext, useContext, useState, useEffect } from 'react';
import en from './localization/en.json';
import hr from './localization/hr.json';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('appLanguage') || 'en');
  const translations = { en, hr };

  const translate = key => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    localStorage.setItem('appLanguage', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
