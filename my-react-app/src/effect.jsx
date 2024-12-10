import { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  return (
    <>
      <div className="mount">
        <h1 style={{ color: color }}>Hello -&gt; {count}</h1>
        <button onClick={() => setCount((p) => p + 1)}>Increase</button>
        <button onClick={() => setCount((p) => p - 1)}>Decrease</button>
        <button
          onClick={() => {
            setColor((p) => (p === "green" ? "red" : "green"));
          }}
        >
          Change Color
        </button>
      </div>
    </>
  );
}

export default Effect;
