import React from 'react';
import ProjectsSection from '../sections/projects/Projects';
import LanguageToggle from '../buttons/LanguageToggle';
import workProjects from '../../data/workProjects.json';
import useShuffledProjects from '../../hooks/useShuffledProjects'
import ShuffleSkills from '../buttons/ShuffleSkills';
import AboutMeSection from '../sections/aboutMe/AboutMe';
import CareerSection from '../sections/career/Career';
import './MainContent.css';

const MainContent = () => {
  const [projects, shuffleSkillsInProjects] = useShuffledProjects(workProjects);

  return (
    <main className="main-content">
      <div className="button-menu">
        <LanguageToggle />
        <ShuffleSkills onClick={shuffleSkillsInProjects} />
      </div>
      <ProjectsSection projects={projects} />
      <AboutMeSection />
      <CareerSection />
    </main>
  );
}

export default MainContent;