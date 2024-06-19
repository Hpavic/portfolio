import React, { useState } from 'react';
import useShuffledSkills from '../../hooks/useShuffledSkills';
import skillIcons from '../../constants/skillIcons';
import './ProjectCard.css';
import { useLanguage } from '../../LanguageContext';
import { formatDescription } from '../../utils/formatDescription';

const ProjectCard = ({ title, imageUrl, siteUrl, description, skills, workLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shuffledSkills = useShuffledSkills(skills);
  const { translate } = useLanguage();

  return (
    <div className={`project-card ${isOpen ? 'expanded' : ''}`} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="project-content">
        <div className="skills">
          {shuffledSkills.map(skill => (
            <div key={skill} className="skill" style={{ color: `${skillIcons[skill].color}` }}>
              {skillIcons[skill].icon}
              <span className="skill-name">{skillIcons[skill].name}</span>
            </div>
          ))}
        </div>
        <div className={`project-details ${isOpen ? 'expanded' : ''}`}>
          {siteUrl ? 
            <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="title-link">
              <h3>{title}</h3>
            </a>
            :
            <h3 className="title-nolink">{title}</h3>
          }
          {description.length > 0 && (
            <ul className="description-list">
              {description.map((descKey, index) => (
                <li key={index}><span dangerouslySetInnerHTML={{__html: formatDescription(translate(descKey))}} /></li>
              ))}
            </ul>
          )}
          <span className="employee">{translate(workLabel)}</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          type="button" 
          className="toggle-details" 
          aria-label={isOpen ? translate('btnClose') : translate('btnDiscover')}>
          {isOpen ? translate('btnClose') : translate('btnDiscover')}
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;