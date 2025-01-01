import { useState } from "react";
import "./App.css";
import Counter from "./Component/Counter";
import { CounterContext } from "./Context/Context";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <CounterContext.Provider value={{ counter, setCounter }}>
        <div className="flex flex-col gap-10">
          <Counter />

          <div className="flex flex-col gap-5">
            <p>Count is {counter}</p>
            <button
              className="bg-white text-black"
              onClick={() => {
                setCounter((prev) => prev + 1);
              }}
            >
              Increment
            </button>
          </div>
        </div>
      </CounterContext.Provider>
    </>
  );
}

export default App;
