import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext';
import './MimicSkeleton.css';

const MimicSkeleton = ({ onClick }) => {
    const { translate } = useLanguage();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [statusKey, setStatusKey] = useState('');

    const handleClick = async () => {
        setButtonDisabled(true);
        setStatusKey('txtFetchingApi');
        try {
            await onClick();
            setStatusKey('txtDataFetched');
        } catch (error) {
            setStatusKey('txtFetchError');
        } finally {
            setButtonDisabled(false);
        }
    };

    const buttonStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/skeleton.svg)`,
        opacity: buttonDisabled ? 0.5 : 1,
        cursor: buttonDisabled ? 'not-allowed' : 'pointer'
    };

    return (
        <div className="skeleton-button-container">
            {statusKey && <div className="status-text">{translate(statusKey)}</div>}
            <button 
                onClick={handleClick} 
                disabled={buttonDisabled}
                className="mimic-skeleton-btn"
                title={translate('btnSkeleton')}
                aria-label={translate('btnSkeleton')}
                type='button'
                style={buttonStyle}>
            </button>
        </div>
    );
};

export default MimicSkeleton;