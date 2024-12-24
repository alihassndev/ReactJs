import { useState } from "react";
import DATA from "./DATA";
import "./accordion.css";

function Accordion() {
  const [selected, setSelected] = useState([]); // Array for multi-selection
  const [isMultiSelect, setIsMultiSelect] = useState(false); // Mode toggle

  const toggleSelect = (index) => {
    if (isMultiSelect) {
      // Multi-selection mode
      if (selected.includes(index)) {
        // Remove the index if it's already selected
        setSelected(selected.filter((i) => i !== index));
      } else {
        // Add the index to the array
        setSelected([...selected, index]);
      }
    } else {
      // Single-selection mode
      setSelected(selected.includes(index) ? [] : [index]);
    }
  };

  const toggleMode = () => {
    setIsMultiSelect(!isMultiSelect);
    setSelected([]); // Reset selections when switching modes
  };

  return (
    <div className="accord">
      <h1>Accordion with React</h1>

      {/* Mode Toggle Button */}
      <button
        onClick={toggleMode}
        className="bg-purple-600 text-white py-2 px-4 rounded-lg mb-10"
      >
        {isMultiSelect ? "Disable Multi-Selection" : "Enable Multi-Selection"}
      </button>

      <div className="accordion">
        {DATA && DATA.length > 0 ? (
          DATA.map((item, index) => (
            <div className="box" key={index}>
              <div className="title" onClick={() => toggleSelect(index)}>
                <h4>{item.question}</h4>
                <span
                  className={`${
                    selected.includes(index)
                      ? "ri-subtract-line"
                      : "ri-add-line"
                  }`}
                ></span>
              </div>

              {selected.includes(index) && ( // Conditionally render content
                <div className="active">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div>No DATA Found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
