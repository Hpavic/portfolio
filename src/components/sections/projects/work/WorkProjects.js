import WorkProjectCard from "../../../cards/WorkProjectCard";

import { useLanguage } from "../../../../LanguageContext";
import './WorkProjects.css'

const WorkProjectsSection = ({ projects }) => {
  const { translate } = useLanguage();

  return (
    <section className="section">
      <div className="section-title">
        <h2>{translate('titleProjects')}</h2>
      </div>
      <div className="section-content">
        {projects.map(project => (
          <WorkProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default WorkProjectsSection;