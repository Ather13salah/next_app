"use client";
import Task from "./components/Task";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Error from "./components/Error";
export default function Home() {

  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const addTask = () => {
    if (task == "") {
      setError(true);
      return;
    }
    const newTask = { id: uuid(), task: task};
    let copyTodos = [...todos, newTask];

    setTodos(copyTodos);
    setTask("");
  };
  return (
    <div className="main">
      <div>
        <h1 className="title">To Do list </h1>
      </div>
      <div className="input-area">
        <input
          className="task-input"
          placeholder="Enter the Task"
          type="text"
          value={task}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      {error && <Error setError={setError} />}
      {todos.length>0 ? <Task todos={todos} setTodos={setTodos}/>:<p className="no-task">No Tasks</p>}
      
    </div>
  );
}
