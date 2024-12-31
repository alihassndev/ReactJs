/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext(null);

const [count, setCount] = useState(0);

export const CounterProvider = (props) => {
  return (
    <CounterContext.Provider value={{ count }}>
      {props.children}
    </CounterContext.Provider>
  );
};
