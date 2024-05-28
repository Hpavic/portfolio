import WorkProjectCard from "../../../cards/WorkProjectCard";
import workProjects from '../../../../data/workProjects.json';

const WorkProjectsSection = () => {
  return (
    <div className="section project-section">
      {workProjects.map(project => (
        <WorkProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}

export default WorkProjectsSection;