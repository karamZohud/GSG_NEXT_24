import { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem.tsx";

export interface Todo {
  id: number;
  title: string;
  isUrgent: boolean;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handleAddTodo = () => {
    if (!title.trim()) {
      alert("Task title cannot be empty!");
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title,
      isUrgent,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setIsUrgent(false);
  };

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const createdCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const urgentCount = todos.filter((todo) => todo.isUrgent).length;

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-start py-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Todo App
        </h1>

        {/* Form Section */}
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type todo title..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
          />
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isUrgent}
                onChange={(e) => setIsUrgent(e.target.checked)}
                className="h-4 w-4 text-red-500"
              />
              <span className="text-sm text-gray-600">Mark as Urgent</span>
            </label>
            <button
              onClick={handleAddTodo}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Add Todo
            </button>
          </div>
        </div>

        {/* Counters Section */}
        <div className="flex justify-between mb-4">
          <div className="bg-gray-100 p-4 rounded-md text-center w-1/3">
            <p className="text-lg font-semibold text-gray-700">{createdCount}</p>
            <p className="text-sm text-gray-500">Created</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md text-center w-1/3">
            <p className="text-lg font-semibold text-gray-700">{completedCount}</p>
            <p className="text-sm text-gray-500">Completed</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md text-center w-1/3">
            <p className="text-lg font-semibold text-gray-700">{urgentCount}</p>
            <p className="text-sm text-gray-500">Urgent</p>
          </div>
        </div>

        {/* Todo List Section */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li key={todo.id} className="bg-gray-50 p-3 rounded-md shadow">
              <TodoItem
                todo={todo}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDeleteTodo}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
