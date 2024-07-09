import React from 'react';
import { useLanguage } from '../../LanguageContext';
import './DownloadCV.css';

const DownloadCV = () => {
    const { translate, language } = useLanguage();
    
    const croId = "1ceOmGR9hq8sVqu0Hra8iaLjIzEfpezAA";
    const engId = "1JFpvjJSvech_ey8B6Mj21sIIgHNWlxXB";
    
    const fileId = language === 'hr' ? croId : engId;
    const fileName = language === 'hr' ? "CV_Hrvoje_Pavic_HR.pdf" : "CV_Hrvoje_Pavic_EN.pdf";

    return (
        <div className="download-cv-button-container">
            <a href={`https://drive.google.com/uc?export=download&id=${fileId}`}
               download={fileName}
               className="button-download-cv"
               title={translate('btnCV')}
               aria-label={translate('btnCV')}>
                CV
            </a>
        </div>
    );
};

export default DownloadCV;