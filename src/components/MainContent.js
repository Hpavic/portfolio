import React from 'react';
import Education from './sections/education/Education';
import './MainContent.css';
import WorkProjectsSection from './sections/projects/work/WorkProjects';

const MainContent = () => {
  return (
    <main className="main-content">
      <WorkProjectsSection />
      <Education/>
    </main>
  );
}

export default MainContent;