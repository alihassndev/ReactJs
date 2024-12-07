import PropTypes from "prop-types";

function List({ items = [], category = "Category" }) {
  const itemlist = items;

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Normal flow
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Flow
  // fruits.sort((a, b) => a.caleroies - b.caleroies); // Numeric Order
  // fruits.sort((a, b) => b.caleroies - a.caleroies); // Reverse Numeric Order

  // const lowCalFruits = fruits.filter((fruit) => fruit.caleroies < 100);

  const listItems = itemlist.map((fruit, index) => {
    // console.log(`Rendering fruit: ${fruit.name}`); // Additional statement
    const displayName = `${fruit.name}`; // Another statement

    return (
      <li
        style={{
          margin: "10px",
        }}
        key={`${fruit.name}-${index}`}
      >
        <b>{displayName}:</b>{" "}
        <span
          style={{
            backgroundColor: "green",
            padding: "3px 5px",
          }}
        >
          {fruit.caleroies}
        </span>
      </li>
    );
  });

  return (
    <>
      <div className="list">
        <h2>{category}</h2>
        <ol>{listItems}</ol>
      </div>
    </>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, caleroies: PropTypes.number })
  ),
  category: PropTypes.string,
};

export default List;
