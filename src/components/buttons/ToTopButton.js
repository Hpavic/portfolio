import React from 'react';
import { useLanguage } from '../../LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './ToTopButton.css';

const ToTopButton = () => {
    const { translate } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    return (
        <div className="button-container">
            <button 
                onClick={scrollToTop} 
                type='button' 
                className="floating-btn" 
                title={translate('btnToTop')}
                aria-label={translate('btnToTop')}>
                <FontAwesomeIcon icon={faArrowUp}/>
            </button>
        </div>
    );
};

export default ToTopButton;
