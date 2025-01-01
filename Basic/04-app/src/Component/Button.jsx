/* eslint-disable no-unused-vars */
import React from "react";
import Component1 from "./Component1";
import { useContext } from "react";
import { CounterContext } from "../Context/Context";

const Button = () => {
  const value = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => value.setCounter((prev) => prev + 1)}
        className="bg-white text-black"
      >
        Click Me{" "}
        <span>
          <Component1 />
        </span>
      </button>
    </div>
  );
};

export default Button;
