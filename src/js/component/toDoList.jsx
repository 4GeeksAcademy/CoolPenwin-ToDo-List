import React, { useState } from "react";

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
    <div className="todo-list">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Añadir nueva tarea"
      />
      {tasks.map((task, index) => (
        <div key={index} className="todo-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)}
          />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;