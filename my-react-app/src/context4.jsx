import { useContext } from "react";
import { userContext } from "./context";

function Context4() {
  const value = useContext(userContext);
  return (
    <>
      <div className="context-box">
        <h1>Component D</h1>
        <h2>Bye {value}</h2>
      </div>
    </>
  );
}

export default Context4;
