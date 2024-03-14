export default WayToTeach = ({ title, description }) => {
  return (
    <li>
      <p>
        <strong>{title}</strong>
        {description}
      </p>
    </li>
  );
};
