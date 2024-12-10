import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const changeInput = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask(""); // Clear the input field after adding the task
    }
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        [updatedTasks[index - 1], updatedTasks[index]] = [
          updatedTasks[index],
          updatedTasks[index - 1],
        ];
        return updatedTasks;
      });
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        [updatedTasks[index + 1], updatedTasks[index]] = [
          updatedTasks[index],
          updatedTasks[index + 1],
        ];
        return updatedTasks;
      });
    }
  };

  return (
    <>
      <div className="todo">
        <div className="first">
          <h1>To-Do List</h1>

          <div className="input">
            <input
              type="text"
              placeholder="Enter task..."
              value={newTask}
              onChange={changeInput}
            />
            <button className="add" onClick={addTask}>
              Add
            </button>
          </div>
        </div>

        <div className="content">
          <h2>Today&apos;s Tasks</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <div className="btns">
                  <button
                    className="btn"
                    onClick={() => deleteTask(index)}
                    style={{ color: "red" }}
                  >
                    Remove
                  </button>
                  <button className="btn" onClick={() => moveTaskUp(index)}>
                    👆
                  </button>
                  <button className="btn" onClick={() => moveTaskDown(index)}>
                    👇
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
