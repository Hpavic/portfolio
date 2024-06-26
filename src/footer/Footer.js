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
            <div className="container-ref">
                <span>Images by 
                    <a href="https://www.freepik.com/free-vector/hand-drawn-skeleton-cartoon-illustration_49661111.htm#query=skeleton%20svg&position=1&from_view=keyword&track=ais_user&uuid=ffcadd21-c5c2-4b5d-b241-ca151e08af09" 
                        target="_blank"
                        rel="noopener noreferrer"> Freepik
                    </a> and 
                    <a href="https://flagpedia.net" 
                        target="_blank"
                        rel="noopener noreferrer"> Flagpedia
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
