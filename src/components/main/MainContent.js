import React, { useState, useCallback  } from 'react';
import Education from '../sections/education/Education';
import WorkProjectsSection from '../sections/projects/work/WorkProjects';
import LanguageToggle from '../buttons/LanguageToggle';
import workProjects from '../../data/workProjects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { shuffleArray } from '../../utils/arrayUtils';
import './MainContent.css';

const MainContent = () => {
  const [projects, setProjects] = useState(workProjects);

  const shuffleSkillsInProjects = useCallback(() => {
    const shuffledProjects = projects.map(project => ({
      ...project,
      skills: project.skills ? shuffleArray([...project.skills]) : []
    }));
    setProjects(shuffledProjects);
  }, [projects]);

  return (
    <main className="main-content">
      <LanguageToggle />
      <button onClick={shuffleSkillsInProjects} className="shuffle-button">
        <FontAwesomeIcon icon={faShuffle} />
      </button>
      <WorkProjectsSection projects={projects} />
      <Education/>
    </main>
  );
}

export default MainContent;