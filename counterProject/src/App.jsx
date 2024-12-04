import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5;

  const Increase = () => {
    ++counter;
    setCounter(counter);
    ++counter;
    ++counter;
    ++counter;
    ++counter;
    // alternate of above if that not works then directly do it with call back
    // setCounter(prevCounter => prevCounter+1)
    setCounter(counter);
    console.log(`click! counter: ${counter}`);
  };

  if (isNaN(counter)) counter = 0;
  if (counter < 0) {
    counter = `value don't less than 0`;
    return (
      <>
        {counter}
        <br /> <br />
        <button onClick={Increase}>Increase Value {counter}</button>
      </>
    );
  }

  const Decrease = () => {
    --counter;
    setCounter(counter);
    console.log(`click! counter: ${counter}`);
  };

  return (
    <>
      <h1>React First Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={Increase}>Increase Value {counter}</button>
      <br /> <br />
      <button onClick={Decrease}>Decrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
