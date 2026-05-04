import "./Portfolio.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import Project from "../../asset/Projects/ProjectData";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="header">Portfolio</div>
      <div className="project-card">
        {Project.map(({ img, info, detail, tool }, index) => {
          return <ProjectCard key={index} img={img} info={info} detail = {detail} tool = {tool}/>;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
