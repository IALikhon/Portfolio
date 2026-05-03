import "./Skills.css";
import SkillsCard from "./Skills-Card/Skills-Card";
import skillsData from "../../asset/Data/SkillsData";

const Skills = () => {
  return (
    <div id="skills">
      <div className="heading">Skills</div>
      <div className="skills-sec">

        {skillsData.map(({ id, img, skill }) => {
          return (<SkillsCard key={id} img={img} skill={skill} />);
        })}
        
      </div>
    </div>
  );
};

export default Skills;
