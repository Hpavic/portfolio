import React, { useState, useRef } from 'react';
import { useLanguage } from '../../LanguageContext';
import languages from '../../constants/languages';
import useOutsideClick from '../../hooks/useOutsideClick';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, setLanguage, translate } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  useOutsideClick(toggleRef, () => setIsOpen(false));

  return (
    <div ref={toggleRef} className="language-container">
      <button className="language-btn"
          onClick={() => setIsOpen(!isOpen)}
          title={translate('changeLanguage')}
          aria-label={translate('changeLanguage')}
          type='button'
          style={{ backgroundImage: `url(${languages[language].flagImage})` }}>
      </button>
      <div className={`language-btn-inner ${isOpen ? 'visible' : ''}`}>
        {Object.keys(languages).map(lang => (
          <button
            key={lang}
            className={`language-btn ${lang === language ? 'hidden' : ''}`}
            onClick={() => toggleLanguage(lang)}
            title={translate(`languageNameIn${languages[lang].name}`)}
            aria-label={translate(`languageNameIn${languages[lang].name}`)}
            type="button"
            style={{ backgroundImage: `url(${languages[lang].flagImage})` }}>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggle;
