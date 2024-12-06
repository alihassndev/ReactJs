import { useState, useEffect, useRef } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCountRef.current}</h2>
      <button onClick={() => setCount((count) => ++count)}>Increment</button>
    </div>
  );
}

export default PreviousValue;
