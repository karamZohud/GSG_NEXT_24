import React from "react";
import { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <div
      className={`flex  items-center justify-between p-3 rounded-md border ${
        todo.isUrgent ? "border-red-500" : "border-gray-300"
      }`}
    >
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onToggleComplete(todo.id)}
          className="h-5 w-5 text-blue-500"
        />
        <span
          className={`text-gray-700 ${
            todo.isCompleted ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 text-white p-1 rounded  hover:bg-red-700 transition"
      >
        🗑Delete
      </button>
    </div>
  );
};

export default TodoItem;
