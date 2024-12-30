import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-white text-black p-5 rounded-2xl text-lg">
        <h2>Counter -&gt; {count}</h2>
        <p>Counter is -&gt; {count % 2 === 0 ? "even" : "odd"}</p>

        {/* Correctly wrap the setCount calls */}
        <button
          className="bg-white border border-gray-500 m-5 p-3"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-white border border-gray-500 m-5 p-3"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;
