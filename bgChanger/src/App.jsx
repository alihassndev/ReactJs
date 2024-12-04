import { useState } from "react";

function App() {
  const [color, setColor] = useState("Bisque");
  return (
    <>
      <div
        className="w-full h-screen overflow-hidden flex justify-center items-end duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="w-[75vw] bg-[#0099ff] p-5 rounded-[5rem] flex justify-evenly items-center mb-16">
          <span
            onClick={() => setColor("white")}
            className="cursor-pointer bg-white px-5 py-2 rounded-lg text-xl text-black"
          >
            White
          </span>
          <span
            onClick={() => setColor("black")}
            className="cursor-pointer bg-black px-5 py-2 rounded-lg text-xl text-white"
          >
            Black
          </span>
          <span
            onClick={() => setColor("green")}
            className="cursor-pointer bg-[green] px-5 py-2 rounded-lg text-xl text-white"
          >
            Green
          </span>
          <span
            onClick={() => setColor("blue")}
            className="cursor-pointer bg-[blue] px-5 py-2 rounded-lg text-xl text-white"
          >
            Blue
          </span>
          <span
            onClick={() => setColor("red")}
            className="cursor-pointer bg-red-500 px-5 py-2 rounded-lg text-xl text-white"
          >
            Red
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
