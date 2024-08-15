import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="text-center">
    <div class="container">
      <h1>toDos</h1>
      <div class="todo-list">
      <input
        type="text"

        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Añadir nueva tarea"
      />
      <ul>

      {tasks.map((task, index) => (
        <li key={index} className="todo-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)}
            />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
          <button className="delete-icon" onClick={() => deleteTask(index)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
        
      ))}
      </ul>
      <div class="footer">
                <span>4 items left</span>
            </div>
    </div>
    </div>
    </div>
  );
};

export default ToDoList;