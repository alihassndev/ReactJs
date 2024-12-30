import "./App.css";
// import Counter from "./Components/Counter";
import TodoList from "./Components/Todo";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="font-bold">Todo App</h1>
        <TodoList />
        {/* <Counter /> */}
      </div>
    </>
  );
}

export default App;
