import PropTypes from "prop-types";

function MovieDetail({ id, image, description }) {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <img
        src={image}
        alt={id}
      />
      <h2>Description</h2>
      <p>{description}</p>
    </div>
  );
}

MovieDetail.PropsTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieDetail;
