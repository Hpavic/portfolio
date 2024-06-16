import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../LanguageContext'
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleRef]);

  return (
    <div ref={toggleRef} className="language-container">
        <button className='language-btn'
            onClick={() => setIsOpen(!isOpen)}
            title={language === 'en' ? "Change language" : "Promijeni jezik"}
            aria-label={language === 'en' ? "Change language" : "Promijeni jezik"}
            type='button'
            style={{ backgroundImage: `url(${language === 'en' ? '/images/en_flag.svg' : '/images/hr_flag.svg'})` }}>
        </button>
        <div className={`language-btn-inner ${isOpen ? 'visible' : ''}`}>
            <button
                className="language-btn"
                onClick={() => toggleLanguage(language === 'en' ? 'hr' : 'en')}
                title={language === 'en' ? "Croatian" : "Engleski"}
                aria-label={language === 'en' ? "Croatian" : "Engleski"}
                type="button"
                style={{
                    backgroundImage: `url('/images/${language === 'en' ? 'hr_flag.svg' : 'en_flag.svg'}')`
                }}>
            </button>
        </div>
    </div>
  );
};

export default LanguageToggle;