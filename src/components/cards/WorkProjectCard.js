import './WorkProjectCard.css';

const WorkProjectCard = ({ title, imageUrl, siteUrl, description }) => {
    return (
      <div className="project-card">
        <img src={imageUrl} alt={`${title} screenshot`} className="project-image"/>
        <h3>{title}</h3>
        <p>{description || "Description of what I worked on for this project."}</p>
        <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="project-link">Visit Site</a>
      </div>
    );
}

export default WorkProjectCard;