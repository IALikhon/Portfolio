import "./ProjectCard.css";

const ProjectCard = ({ img, info, tool }) => {
  return (
    <div className="project">
      <img className="project-img" src={img} alt="" />
      <div className="project-info">
        <div className="project-title">{info}</div>
        <div className="tool">
          {tool.map((item, index) => (
            <span key={index} className="tool-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
