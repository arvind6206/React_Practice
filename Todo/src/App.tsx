import React, { useState } from "react";

interface Todo {
  text: string;
  completed: boolean;
}

const App = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Add Todo
  function handleAdd() {
    if (text.trim() === "") return;

    const newTodo: Todo = {
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  }

  // Check / Uncheck Todo
  function handleCheck(index: number) {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo,
    );

    setTodos(updatedTodos);
  }

  // Remove checked Todos
  function handleRemove() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  return (
    <div className="ml-80 mt-15">
      <h1 className="text-3xl font-bold">Todo App</h1>

      {/* Input */}
      <div>
        <input
          className="mt-5 border border-slate-700 p-1"
          type="text"
          placeholder="Add a new Todo..."
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
      </div>

      {/* Add Button */}
      <button
        onClick={handleAdd}
        className="mt-5 p-1 border border-blue-500 rounded-md"
      >
        Add
      </button>

      {/* Todo List */}
      <div className="mt-5">
        {todos.map((todo, index) => (
          <div key={index} className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheck(index)}
            />

            <p className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.text}
            </p>
          </div>
        ))}
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="mt-5 p-1 border border-red-500 rounded-md"
      >
        Remove Completed
      </button>
    </div>
  );
};

export default App;
