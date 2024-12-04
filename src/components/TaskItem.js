import React, { useState } from "react";

const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);

  const handleSave = () => {
    onEdit(task.id, editedText, editedDueDate);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center gap-4">
      {isEditing ? (
        <div className="flex w-full gap-2">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-grow p-2 rounded-lg border"
          />
          <input
            type="date"
            value={editedDueDate}
            onChange={(e) => setEditedDueDate(e.target.value)}
            className="p-2 rounded-lg border"
          />
        </div>
      ) : (
        <div className="flex items-center gap-2 flex-1">
          <span
            className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
            onClick={() => onToggle(task.id)}
          >
            {task.text}
          </span>
          {task.dueDate && (
            <span className="text-sm text-gray-500">{task.dueDate}</span>
          )}
        </div>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
