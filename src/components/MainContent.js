import React from 'react';
import Education from './sections/education/Education';
import './MainContent.css';
import WorkProjectsSection from './sections/projects/work/WorkProjects';

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="section">
        <h2>About Me</h2>
        <p>Brief description about yourself.</p>
      </section>

      <WorkProjectsSection />
      
      <section className="section">
        <h2>Contact</h2>
        <p>How to reach you.</p>
      </section>

      <Education/>
    </main>
  );
}

export default MainContent;