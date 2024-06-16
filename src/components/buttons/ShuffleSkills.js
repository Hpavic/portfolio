import React from 'react';
import { useLanguage } from '../../LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import './ShuffleSkills.css';

const ShuffleSkills = ({ onClick }) => {
    const { translate } = useLanguage();

    return (
        <button 
            className="shuffle-button" 
            onClick={onClick} 
            type='button' 
            title={translate('shuffleSkills')}
            aria-label={translate('shuffleSkills')}>
            <FontAwesomeIcon icon={faShuffle} size={'2x'}/>
        </button>
    );
};

export default ShuffleSkills;