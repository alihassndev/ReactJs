// import { useState } from "react";
import "./App.css";
// import Counter from "./Components/Counter";
// import Timer from "./Components/Timer";
// import TodoList from "./Components/Todo";

function App() {
  // const [isVisible, setVisible] = useState(true);

  // useEffect(() => {
  //   console.log(`App Component is Mounting ...`);
  // }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        {/* <h1 className="font-bold">Todo App</h1> */}
        {/* <button
          className="border px-3 py-1.5"
          onClick={() => setVisible(!isVisible)}
        >
          {isVisible ? "Hide" : "Show"}
        </button> */}
        {/* <TodoList /> */}
        {/* {isVisible ? <Counter /> : <p>Strict Mode ...</p>} */}
        {/* <Timer /> */}
      </div>
    </>
  );
}

export default App;
