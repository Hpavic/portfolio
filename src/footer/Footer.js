import React from 'react';
import { useLanguage } from '../LanguageContext';
import socialIcons from '../constants/socialIcons';
import ToTopButton from '../components/buttons/ToTopButton';

import './Footer.css';

const Footer = () => {
    const { translate } = useLanguage();
    
    return (
        <footer className="footer">
            <h2>{translate('titleFooter')}</h2>
            <div className="container">
                {Object.keys(socialIcons).map(key => (
                    <a key={key}
                       href={socialIcons[key].url}
                       target="_blank"
                       rel="noopener noreferrer"
                       style={{ color: socialIcons[key].color }}>
                        {socialIcons[key].icon}
                        <span>{socialIcons[key].label}</span>
                    </a>
                ))}
            </div>
            <ToTopButton />
        </footer>
    );
};

export default Footer;
