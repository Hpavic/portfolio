import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './DownloadCV.css';

const DownloadCV = () => {
    const { translate } = useLanguage();

    return (
        <div className="download-cv-button-container">
            <a href="https://drive.google.com/uc?export=download&id=1U8F_nWKPn0IOYoodAjy4H1JIXQjYddz5"
               download="CV_Hrvoje_Pavic.pdf"
               className="button-download-cv"
               title={translate('btnCV')}
               aria-label={translate('btnCV')}>
                CV
            </a>
        </div>
    );
};

export default DownloadCV;