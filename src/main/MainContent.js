import React from 'react';
import ProjectsSection from '../components/sections/projects/Projects';
import LanguageToggle from '../components/buttons/LanguageToggle';
import workProjects from '../data/workProjects.json';
import useShuffledProjects from '../hooks/useShuffledProjects'
import ShuffleSkills from '../components/buttons/ShuffleSkills';
import AboutMeSection from '../components/sections/aboutMe/AboutMe';
import CareerSection from '../components/sections/career/Career';
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