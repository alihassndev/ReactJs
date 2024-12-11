import Context3 from "./context3";
import { useContext } from "react";
import { userContext } from "./context";

function Context2() {
  const value = useContext(userContext);
  return (
    <div className="context-box">
      <h1>Component B</h1>
      <h2>Hello Again {value}</h2>
      <Context3 />
    </div>
  );
}

export default Context2;
