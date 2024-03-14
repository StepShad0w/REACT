const WayToTeach = ({ title, description })=>{
  return (
    <li>
      <p className="title">
        <strong>{title}</strong>
        {description}
      </p>
    </li>
  );
};
export default WayToTeach
