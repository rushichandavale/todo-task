import React, { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import TaskItem from "../components/TaskItem";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || []; 
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks)); // Store tasks in localStorage
    }
  }, [tasks]);

  const addTask = (text, dueDate) => {
    const newTask = {
      id: Date.now(),
      text,
      dueDate, 
      completed: false,
    };
    setTasks([...tasks, newTask]); 
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); 
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  const editTask = (id, newText, newDueDate) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText, dueDate: newDueDate } : task
      )
    );
  };

  return (
    <div className="min-h-screen rounded-xl bg-gradient-to-b from-purple-600 to-purple-300 py-10 px-4 sm:px-10">
      <div className="flex flex-col items-center space-y-6">
        {/* Search Section */}
        <div className="flex w-full max-w-xl items-center gap-4 sm:gap-6">
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow p-3 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="p-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
            aria-label="Search"
          >
            🔍
          </button>
        </div>

        {/* Add Task Section */}
        <div className="flex w-full max-w-xl gap-4 sm:gap-6">
          <AddTask onAdd={addTask} /> {/* Add Task Form */}
        </div>

        {/* Task List Section */}
        <div className="relative z-10 w-full max-w-xl mt-6">
          <ul className="space-y-4">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transform transition-all"
              >
                <TaskItem
                  task={task}
                  onToggle={toggleTask}
                  onEdit={editTask}
                  onDelete={deleteTask}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
