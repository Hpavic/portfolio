import careerData from '../../../data/careerData.json'
import { useLanguage } from "../../../LanguageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Career.css'

const CareerSection = () => {
    const { translate } = useLanguage();
  
    return (
      <section className="section career-section">
        <div className="section-title">
          <h2>{translate('titlePath')}</h2>
        </div>
        <div className="section-content">
          <div className="timeline">
            {careerData.events.map((event, index) => (
                <div className="timeline-container" key={index}>
                    <p className="timeline-date">{event.date}</p>
                    <div className="timeline-content">
                        <div className="timeline-event">
                            {event.badge && <div className="badge">{translate(event.badge)}</div>}
                            {event.type === "career" ? (
                            <>
                                <p>{event.company}</p>
                                <p>{event.role}</p>
                            </>
                            ) : (
                            <>
                                <p>{event.description}</p>
                                <p>{event.detail}</p>
                            </>
                            )}
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} size='2x' className="timeline-arrow" />
                    </div>
                </div>
            ))}
            <div className="timeline-container">
                <div className="timeline-content">
                    <div className="timeline-event">
                        <span className="timeline-question">?</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default CareerSection;