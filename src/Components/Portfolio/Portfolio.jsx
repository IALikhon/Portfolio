import "./Portfolio.css";
// import Project from "../../asset/Projects/ProjectData";

const Portfolio = () => {
    return (
      <div id="Portfolio">
        <div className="header">Portfolio</div>
        <div className="project-card">
          <img
            className="project-img"
            src="src/asset/Projects/ProjectImg/CambridgeRental.png"
            alt=""
          />

          <img
            className="project-img"
            src="src/asset/Projects/ProjectImg/CambridgeRental.png"
            alt=""
          />

          <img
            className="project-img"
            src="src/asset/Projects/ProjectImg/CambridgeRental.png"
            alt=""
          />
        </div>
      </div>
    );
};

export default Portfolio;