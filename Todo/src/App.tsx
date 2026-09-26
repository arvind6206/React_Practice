import React, { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Filter = "all" | "active" | "completed";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const [filter, setFilter] = useState<Filter>("all");

  const [editingId, setEditingId] = useState<number | null>(null);

  const [editText, setEditText] = useState("");

  function handleAdd() {
    if (!text.trim()) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setText("");
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //toggle todo
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  };

  const handleEditStart = (id: number) => {
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
      return;
    }

    setEditingId(todo.id);
    setEditText(todo.text);
  };

  //save edit
  const handleSaveEdit = () => {
    if (!editText.trim()) {
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.id === editingId
          ? {
              ...todo,
              text: editText.trim(),
            }
          : todo,
      ),
    );
    setEditingId(null);
    setEditText("");
  };

  //cancel edit

  const handleEditCancel = () => {
    setEditingId(null);
    setEditText("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  //derived values
  const total = todos.length;

  const completed = todos.filter((todo) => todo.completed).length;

  //reduce practice

  const completedCountUsingReduce = todos.reduce((count, todo) => {
    return todo.completed ? count + 1 : count;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 px-14 py-10">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Todo App
        </h1>

        <div className="mb-6 flex gap-2">
          <input
            type="text"
            value={text}
            placeholder="Enter todo..."
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAdd();
              }
            }}
            className="flex-1 rounded-lg border border-gray-300 px-4 
            outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            onClick={handleAdd}
            className="rounded-lg bg-blue-500 px-5 py-2 font-medium text-white hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <div className="mb-6 flex justify-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-lg px-4 py-2 font-medium ${
              filter === "all"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("active")}
            className={`rounded-lg px-4 py-2 font-medium ${
              filter === "active"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Active
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`rounded-lg px-4 py-2 font-medium ${
              filter === "completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Completed
          </button>
        </div>

        <div className="mb-6 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-gray-100 p-3 text-center">
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-2xl font-bold text-green-600">{completed}</p>
          </div>

          <div className="rounded-lg bg-green-50 p-3 text-center">
            <p className="text-sm text-gray-500">Completed</p>
            <p className="text-2xl font-bold text-green-600">{completed}</p>
          </div>

          <div className="rounded-lg bg-yellow-50 p-3 text-center">
            <p className="text-sm text-gray-500">Remaining</p>
            <p className="text-2xl font-bold text-yellow-600">
              {total - completed}
            </p>
          </div>
        </div>

        <div className="spce-y-3">
          {filteredTodos.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-300 p-8 text-center">
              <p className="text-gray-500">No Todos found.</p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white
                p-4 shadow-sm"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                  className="h-5 w-5 cursor-pointer accent-blue-500"
                />

                {editingId === todo.id ? (
                  <>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="flex-1 rounded-md border border-gray-300 px-3 py-2 outline-none
                        focus:border-blue-500"
                    />

                    <button
                      onClick={handleSaveEdit}
                      className="rounded-md bg-green-500 px-3 py-2 text-sm font-medium text-white hover:bg-green-600"
                    >
                      Save
                    </button>

                    <button
                      onClick={handleEditCancel}
                      className="rounded-md bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <span
                      className={`flex-1 ${
                        todo.completed
                          ? "text-gray-400 line-through"
                          : "text-gray-800"
                      }`}
                    >
                      {todo.text}
                    </span>

                    <button
                      onClick={() => handleEditStart(todo.id)}
                      className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-medium text-white hover:bg-yellow-500"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="rounded-md bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            ))
          )}
        </div>
        <div className="mt-6 border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500">
            Completed using reduce():{" "}
            <span className="font-semibold text-gray-800">
              {completedCountUsingReduce}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
