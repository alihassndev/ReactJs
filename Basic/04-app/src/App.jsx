import "./App.css";
import Counter from "./Components/Counter";
import { useContext } from "react";
import { CounterContext } from "./Context/Counter";

function App() {
  const counterState = useContext(CounterContext);

  console.log(counterState);

  return (
    <>
      <div className="flex flex-col gap-10">
        <h1>Count is 0</h1>

        <div className="flex flex-col gap-3">
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
