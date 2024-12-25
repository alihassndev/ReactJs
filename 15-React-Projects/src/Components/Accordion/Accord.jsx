import { useState } from "react";
import Data from "./data";

function Accord() {
  const [selected, setSelected] = useState([]); // Tracks selected questions
  const [multiSelected, setMultiSelected] = useState(false); // Tracks mode

  const handleSelection = (index) => {
    if (multiSelected) {
      setSelected(
        (prevSelected) =>
          prevSelected.includes(index)
            ? prevSelected.filter((i) => i !== index) // Deselect if already selected
            : [...prevSelected, index] // Select if not selected
      );
    } else {
      setSelected(
        (prevSelected) => (prevSelected[0] === index ? [] : [index]) // Toggle for single selection
      );
    }
  };

  const toggleMultiSelection = () => {
    setMultiSelected((prev) => !prev);
    setSelected([]); // Clear selection when mode changes
  };

  return (
    <>
      <div className="text-white w-[70vw] mx-auto bg-gray-800 px-16 py-12 my-10">
        <h1 className="text-4xl font-bold text-center">Accordion with React</h1>

        {/* Toggle Multi/Single Selection Mode */}
        <div className="w-full flex justify-center items-center my-5">
          <button
            onClick={toggleMultiSelection}
            className="bg-blue-600 px-3 py-2 rounded-lg"
          >
            {multiSelected
              ? "Enable Single Selection"
              : "Enable Multi Selection"}
          </button>
        </div>

        {/* Accordion Content */}
        <div>
          {Data.map((item, index) => (
            <div
              onClick={() => handleSelection(index)}
              className="bg-gray-700 px-10 py-5 my-3 cursor-pointer"
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

              {/* Answer Section */}
              <div>
                <p
                  className={`${
                    selected.includes(index) ? "flex" : "hidden"
                  } transition-all duration-300`}
                >
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
