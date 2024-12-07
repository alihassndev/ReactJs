import PropTypes from "prop-types";

function Card({
  name = "Guest",
  url = "https://via.placeholder.com/300",
  passion = "Developer",
}) {
  return (
    <>
      <div className="card">
        <img src={url} alt="Profile" />
        <h2>{name}</h2>
        <p>I am {passion} and like to play Football.</p>
      </div>
    </>
  );
}

// Add prop types for validation
Card.propTypes = {
  name: PropTypes.string, // 'name' must be a string and is required
  url: PropTypes.string.isRequired, // 'url' must be a string and is required
  passion: PropTypes.string, // 'passion' must be a string and is required
};

export default Card;
