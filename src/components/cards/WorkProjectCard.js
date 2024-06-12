import React, { useState } from 'react';
import useShuffledSkills from '../../hooks/useShuffledSkills';
import skillIcons from '../../constants/skillIcons';
import './WorkProjectCard.css';

const WorkProjectCard = ({ title, imageUrl, siteUrl, description, skills }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shuffledSkills = useShuffledSkills(skills);

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
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Visit Site
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="toggle-details">
          {isOpen ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default WorkProjectCard;