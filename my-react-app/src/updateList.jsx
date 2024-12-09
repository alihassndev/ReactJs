import { useState } from "react";

function UpdateList() {
  const [foods, setFood] = useState(["Apple", "Orange", "Banana"]);
  const [message, setMessage] = useState("");

  // Function to capitalize the input value
  const capitalize = (value) => {
    return value
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const addFood = (e) => {
    e.preventDefault();
    const foodToAdd = capitalize(e.target.elements.addFood.value);
    if (foodToAdd && !foods.includes(foodToAdd)) {
      setFood([...foods, foodToAdd]); // Add food immutably
      setMessage(`${foodToAdd} added to the list!`);
    } else {
      setMessage("Food is already in the list or empty input.");
    }
    e.target.reset();
  };

  const removeFood = (e) => {
    e.preventDefault();
    const foodToRemove = capitalize(e.target.elements.removeFood.value);
    if (foods.includes(foodToRemove)) {
      setFood(foods.filter((food) => food !== foodToRemove)); // Remove food immutably
      setMessage(`${foodToRemove} removed from the list!`);
    } else {
      setMessage("Food not found in the list.");
    }
    e.target.reset();
  };

  return (
    <>
      <div className="updateList">
        <h1>List of Foods</h1>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>

        <form onSubmit={addFood}>
          <label htmlFor="addFood">Add Food:</label>
          <input type="text" id="addFood" name="addFood" />
          <button type="submit">Add</button>
        </form>
        <br />
        <form onSubmit={removeFood}>
          <label htmlFor="removeFood">Remove Food:</label>
          <input type="text" id="removeFood" name="removeFood" />
          <button type="submit">Remove</button>
        </form>

        <p>{message}</p>
      </div>
    </>
  );
}

export default UpdateList;
