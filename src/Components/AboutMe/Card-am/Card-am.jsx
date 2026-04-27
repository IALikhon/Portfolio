import "./Card-am.css";

const CardAM = ({icon, head, detail}) => {
  return (
    <div className="card">
      {icon = icon}
      <p>{head}</p>
      <p> {detail} </p>
    </div>
  );
};

export default CardAM;
