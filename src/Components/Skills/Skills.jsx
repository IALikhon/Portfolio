import "./Skills.css";
import SkillsCard from "./Skills-Card/Skills-Card";

const Skills = () => {
  return (
    <div>
      <div id="skills">Skills</div>
      <div className="skills-sec">
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
      </div>
    </div>
  );
};

export default Skills;
