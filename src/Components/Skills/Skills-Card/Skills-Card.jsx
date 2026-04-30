import "./Skills-Card.css";

const SkillsCard = ({id, img, skill}) => {
    return (
        <div className="skills-card">
            <img src={img} alt="" />
            <div className="skill-name">{skill}</div>
        </div>
    );
};

export default SkillsCard;