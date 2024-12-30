import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <>
      <div className="w-[30vw] bg-white text-black flex flex-col gap-10 items-start p-10 rounded-2xl">
        <h1 className="font-bold text-2xl">Todo</h1>

        <div className="w-full flex flex-col gap-3">
          <TodoItem content="Brush" />
          <TodoItem content="Eat" />
          <TodoItem content="Code" />
          <TodoItem content="Play" />
          <TodoItem content="Sleep" />
        </div>

        <button className="bg-gray-300 w-full">Add Todo</button>
      </div>
    </>
  );
}

export default TodoList;
