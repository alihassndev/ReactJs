import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#FFFFFF");

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className="colorContainer">
        <h1>Color Picker</h1>

        <div
          className="colorDisplay"
          style={{
            backgroundColor: color,
            color: color == "#ffffff" ? "black" : "white",
            width: "fit-content",
          }}
        >
          <p className="selectedColor">
            <span className="text">Selected Color:</span> {color.toUpperCase()}
          </p>
        </div>
        <div className="color">
          <label htmlFor="pick">Select a Color: </label>
          <input
            type="color"
            value={color}
            name="pick"
            id="pick"
            onChange={changeColor}
          />
        </div>
      </div>
    </>
  );
}

export default App;
