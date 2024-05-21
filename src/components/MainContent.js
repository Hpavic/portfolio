import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="section">
        <h2>About Me</h2>
        <p>Brief description about yourself.</p>
      </section>
      <section className="section">
        <h2>Projects</h2>
        <p>List of projects with brief descriptions.</p>
      </section>
      <section className="section">
        <h2>Contact</h2>
        <p>How to reach you.</p>
      </section>
    </main>
  );
}

export default MainContent;