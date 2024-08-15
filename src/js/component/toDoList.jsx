import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { text: "Tarea 1", completed: false },
    { text: "Tarea 2", completed: false },
    { text: "Tarea 3", completed: false },
  ]);
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

  const countIncompleteTasks = () => {
    return tasks.filter((task) => !task.completed).length;
  };

  return (
    <div className="text-center">
      <div className="container">
        <h1>toDos</h1>
        <div className="todo-list">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Añadir nueva tarea"
          />
          {tasks.length === 0 && (
            <div
              className="alert alert-danger d-flex align-items-center mt-3"
              role="alert"
            >
              <i className="fa-solid fa-triangle-exclamation"></i>
              <div className="ms-1">No hay tareas, añadir tareas</div>
            </div>
          )}
          <ul>
            {tasks.map((task, index) => (
              <li key={index} className="todo-item ">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <span
                  className="todo-text"
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
                <button
                  type="button"
                  style={{ border: "none", background: "none" }}
                  className="col-1 btn btn-outline-light"
                  onClick={() => deleteTask(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
          <div className="footer">
            <span>{countIncompleteTasks()} items left</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
