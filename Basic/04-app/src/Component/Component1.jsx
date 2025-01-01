/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { CounterContext } from "../Context/Context";

const Component1 = () => {
  const value = useContext(CounterContext);
  return <div>{value.counter}</div>;
};

export default Component1;
