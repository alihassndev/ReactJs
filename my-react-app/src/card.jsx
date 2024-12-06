import PropTypes from "prop-types";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.url} alt="Profile" />
        <h2>{props.name}</h2>
        <p>I am {props.passion} and like to play Football.</p>
      </div>
    </>
  );
}

// Add prop types for validation
Card.propTypes = {
  name: PropTypes.string.isRequired, // 'name' must be a string and is required
  url: PropTypes.string.isRequired, // 'url' must be a string and is required
  passion: PropTypes.string.isRequired, // 'passion' must be a string and is required
};

Card.defaultProps = {
  name: "Guest",
  url: "https://via.placeholder.com/300",
  passion: "Developer",
};

export default Card;
