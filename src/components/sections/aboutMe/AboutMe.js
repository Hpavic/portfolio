import { useLanguage } from "../../../LanguageContext";
import { formatDescription } from "../../../utils/formatDescription";
import './AboutMe.css'

const AboutMeSection = () => {
  const { translate } = useLanguage();

  return (
    <section className="section about-me-section">
      <div className="section-title">
        <h2>{translate('titleAboutMe')}</h2>
      </div>
      <div className="section-content">
        <div className="about-me">{translate('msgAboutMe1')}</div>
        <div className="about-me">{translate('msgAboutMe2')}</div>
        <div className="about-me current-occupation" dangerouslySetInnerHTML={{__html: formatDescription(translate('msgOccupation'))}} />
      </div>
    </section>
  );
}

export default AboutMeSection;