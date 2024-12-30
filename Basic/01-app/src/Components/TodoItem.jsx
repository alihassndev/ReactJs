import { useState } from "react";

/* eslint-disable react/prop-types */
function TodoItem(props) {
  const [checked, setChecked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const handleClick = () => {
    setCompleted(true);
    completed ? setChecked((prev) => !prev) : setChecked(false);
  };
  return (
    <>
      <div className="w-full flex justify-between items-center text-lg py-2 px-4 border-b border-gray-200">
        <div className="flex justify-center items-center gap-3">
          {/* Styled Radio Button */}
          {completed && checked ? (
            <></>
          ) : (
            <label
              onClick={handleClick}
              className="relative flex items-center cursor-pointer"
            >
              <input type="radio" className="peer hidden" />
              <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-gray-500 peer-checked:bg-gray-500 flex justify-center items-center transition-all">
                <div className="w-2.5 h-2.5 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
              </div>
            </label>
          )}
          <p className="text-gray-700">{props.content}</p>
        </div>

        <span className="ri-more-fill text-2xl font-bold text-gray-400 cursor-pointer hover:text-gray-600 transition-all"></span>
      </div>
    </>
  );
}

export default TodoItem;
