import "./Skills-Card.css";
import cssIcon from "../../../asset/Pictures/css.png";

const SkillsCard = () => {
    return (
        <div className="skills-card">
            <img src={cssIcon} alt="" />
            <span>CSS</span>
        </div>
    );
};

export default SkillsCard;