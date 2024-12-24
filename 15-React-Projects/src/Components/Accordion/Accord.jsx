import { useState } from "react";
import Data from "./data";

function Accord() {
  const [selected, setSelected] = useState([]);
  const [multiSelected, setMultiSelected] = useState(false);

  const handle = (index) => {
    if (multiSelected) {
      if (selected.includes(index)) {
        selected.filter((i) => i !== index);
      } else {
        setSelected([...selected, index]);
      }
    } else {
      setSelected(selected === index ? [] : [index]);
    }
  };

  const multi = () => {
    setMultiSelected((prev) => !prev);
  };

  return (
    <>
      <div className="text-white w-[70vw] mx-auto bg-gray-800 px-16 py-12 my-10">
        <h1 className="text-4xl font-bold text-center">Accordion with React</h1>

        <div className="w-full flex justify-center items-center my-5">
          <button onClick={multi} className="bg-blue-600 px-3 py-2 rounded-lg">
            {multiSelected ? "Enable SingleSelection" : "Enable MultiSelection"}
          </button>
        </div>

        <div>
          {Data.map((item, index) => (
            <div
              onClick={() => handle(index)}
              className="bg-gray-700 px-10 py-5 my-3"
              key={index}
            >
              <div className="flex justify-between text-xl">
                <h3 className="font-semibold">{item.question}</h3>
                <span
                  className={
                    selected.includes(index)
                      ? "ri-subtract-line"
                      : "ri-add-line"
                  }
                ></span>
              </div>

              <div>
                <p className={selected.includes(index) ? "flex" : "hidden"}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accord;
