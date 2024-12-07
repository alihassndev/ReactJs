// import { useState } from "react";
import Me from "./myComponent";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount((prev) => prev + 1);
  // };

  // const reset = () => {
  //   setCount(0);
  // };

  // const decrement = () => {
  //   setCount((prev) => prev - 1);
  // };

  return (
    <>
      {/* <div className="canvas">
        <h1>Hello Counter</h1>

        <p className="output">{count}</p>

        <div className="buttons">
          <button id="d" onClick={decrement}>
            Decrement
          </button>
          <button id="r" onClick={reset}>
            Reset
          </button>
          <button id="i" onClick={increment}>
            Increment
          </button>
        </div>
      </div> */}

      <Me />
    </>
  );
}

export default App;
