import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newSearch, setNewSearch] = useState("");

  function handleInput(event) {
    setNewTask(event.target.value);
  }

  function handleAdd() {
    if (newTask.trim() === "") {
      alert("Please enter a name before adding.");
    } else {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handleRemove(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function taskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function taskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const filteredTasks = tasks.filter(task =>
    task.toLowerCase().includes(newSearch.toLowerCase())
  );

  return (
    <div className="todo-list">
      <h1>Todo-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Task here.."
          onChange={handleInput}
          value={newTask}
        />
        <button className="addBtn" onClick={handleAdd}>Add</button>
        <br />
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={newSearch}
          onChange={(e) => setNewSearch(e.target.value)}
        />
      </div>
      <ol>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="Remove" onClick={() => handleRemove(index)}>Delete</button>
            <button className="move-up" onClick={() => taskUp(index)}>👆</button>
            <button className="move-down" onClick={() => taskDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
