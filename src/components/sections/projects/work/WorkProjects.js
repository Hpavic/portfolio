import WorkProjectCard from "../../../cards/WorkProjectCard";
import workProjects from '../../../../data/workProjects.json';
import './WorkProjects.css'

const WorkProjectsSection = () => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Projects I worked on</h2>
      </div>
      <div className="section-content">
        {workProjects.map(project => (
          <WorkProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default WorkProjectsSection;