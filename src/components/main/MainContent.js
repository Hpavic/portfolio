import React from 'react';
import Education from '../sections/education/Education';
import WorkProjectsSection from '../sections/projects/work/WorkProjects';
import LanguageToggle from '../buttons/LanguageToggle';
import workProjects from '../../data/workProjects.json';
import useShuffledProjects from '../../hooks/useShuffledProjects'
import ShuffleSkills from '../buttons/ShuffleSkills';
import './MainContent.css';

const MainContent = () => {
  const [projects, shuffleSkillsInProjects] = useShuffledProjects(workProjects);

  return (
    <main className="main-content">
      <div className="button-menu">
        <LanguageToggle />
        <ShuffleSkills onClick={shuffleSkillsInProjects} />
      </div>
      <WorkProjectsSection projects={projects} />
      <Education/>
    </main>
  );
}

export default MainContent;