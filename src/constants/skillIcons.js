import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faNpm, faAngular, faSass } from '@fortawesome/free-brands-svg-icons';

const skillIcons = {
  HTML: { icon: <FontAwesomeIcon icon={faHtml5} />, name: "HTML", color: "#e44d26" },
  CSS: { icon: <FontAwesomeIcon icon={faCss3Alt} />, name: "CSS", color: "#ffffff" },
  JavaScript: { icon: <FontAwesomeIcon icon={faJsSquare} />, name: "JavaScript", color: "#f0db4f" },
  React: { icon: <FontAwesomeIcon icon={faReact} />, name: "React", color: "#4ad5ff" },
  CSharp: { name: "C#", color: "#1e9e25" },
  TypeScript: { icon: <div className="typescript-logo" />, name: "TypeScript", color: "#2d79c7"},
  ASPNETCore: { icon: <div className="asp-net-background" />, name:"ASP.NET Core", color:"#c4c4c4" },
  EntityFramework: { name: "Entity Framework", color: "#a4a4a4"},
  MVC: { name: "MVC", color: "#b4b4b4" },
  RazorPages: { name: "Razor Pages", color: "#d4d4d4"},
  Redux: { icon: <FontAwesomeIcon icon={faReact} />, name: "Redux", color: "#764abc" },
  NodeJS: { icon: <FontAwesomeIcon icon={faNodeJs} />, name: "Node.js", color: "#68a063" },
  Express: { icon: <FontAwesomeIcon icon={faNpm} />, name: "Express", color: "#ffffff" },
  Puppeteer: { name: "Puppeteer", color: "#40B5A4" },
  HtmlAgilityPack: { name: "HtmlAgilityPack", color: "#e34f26" },
  Angular: { icon: <FontAwesomeIcon icon={faAngular} />, name: "Angular", color: "#b40eb7"},
  SASS: { icon: <FontAwesomeIcon icon={faSass} />, name: "SASS", color: "#ce5c8c" },
  RestAPI : { name: "REST", color: "#51ad5c"},
  RxJS: { name: "RxJS", color: "#d81b60"}
};

export default skillIcons;