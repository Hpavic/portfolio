import { useState } from 'react';
import careerData from '../../../data/careerData.json'
import { useLanguage } from "../../../LanguageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SkeletonLoader from '../../skeleton/SkeletonLoader';
import fetchData from '../../../utils/fetchData';
import './Career.css'
import MimicSkeleton from '../../buttons/MimicSkeleton';

const CareerSection = () => {
    const { translate } = useLanguage();
    const [data, setData] = useState(careerData.events);
    const [isLoading, setLoading] = useState(false);

    const handleFetchData = async () => {
      setLoading(true);
      const url = `${process.env.PUBLIC_URL}/data/publicCareerData.json`;
      try {
          await fetchData(
              url,
              (fetchedData) => {
                  setData(fetchedData.events);
              },
              (error) => {
                  console.log('Error fetching data:', error);
              },
              3000
          );
      } catch (error) {
          console.error('Error after fetchData:', error);
      } finally {
          setLoading(false);
      }
    };
     
    return (
      <section className="section career-section">
        <div className="section-title">
          <h2>{translate('titlePath')}</h2>
          <MimicSkeleton onClick={handleFetchData} />
        </div>
        <div className="section-content">
          {isLoading ? (
                <SkeletonLoader count={careerData.events.length} />
            ) : (
              <div className="timeline">
                {data.map((event, index) => (
                  <div className="timeline-container" key={index}>
                      <p className="timeline-date">{event.date}</p>
                      <div className="timeline-content">
                          <div className="timeline-event">
                              {event.badge && <div className="badge">{translate(event.badge)}</div>}
                              {event.type === "career" ? (
                              <>
                                  <p>{event.company}</p>
                                  <p>{event.role}</p>
                                  {event.imageUrl ? (
                                    <img src={`${process.env.PUBLIC_URL}${event.imageUrl}`}  alt={event.imageUrl} className="company-pic" />
                                  ) : ('')}
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
          )}
        </div>
      </section>
    );
  }
  
  export default CareerSection;