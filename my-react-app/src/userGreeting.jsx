import { useState } from "react";
import PropTypes from "prop-types";

function UserGreeting({ isLoggedIn = false, username = "Guest" }) {
  const [clicked, setClicked] = useState(false);

  if (isLoggedIn && clicked) {
    return <h1>Welcome, {username}!</h1>;
  }

  return (
    <button onClick={() => setClicked((prev) => !prev)} className="button">
      Click
    </button>
  );
}

// PropTypes validation
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default UserGreeting;
