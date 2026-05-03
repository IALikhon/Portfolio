import "./ProjectCard.css";

const ProjectCard = ({ img, info }) => {
  return (
    <div className="project">
      <img className="project-img" src={img} alt="" />
      <div className="project-info">{info}</div>
    </div>
  );
};

export default ProjectCard;
