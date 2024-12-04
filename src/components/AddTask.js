import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text, dueDate); 
      setText(""); 
      setDueDate(""); 
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 sm:gap-6 transition-all duration-300"
    >
      <input
        type="text"
        className="w-full sm:w-80 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)} 
      />
      <input
        type="date"
        className="w-full sm:w-32 p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)} 
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
