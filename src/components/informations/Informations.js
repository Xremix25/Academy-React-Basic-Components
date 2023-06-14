const Informations = ({ image, title, description }) => {
  return (
    <div className="container">
      <img src={image} alt="TODO: TITLE" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default Informations;
