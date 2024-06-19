import ProjectCard from "../../cards/ProjectCard";
import { useLanguage } from "../../../LanguageContext";
import './Projects.css'

const ProjectsSection = ({ projects }) => {
  const { translate } = useLanguage();

  return (
    <section className="section">
      <div className="section-title">
        <h2>{translate('titleProjects')}</h2>
      </div>
      <div className="section-content project-section">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;