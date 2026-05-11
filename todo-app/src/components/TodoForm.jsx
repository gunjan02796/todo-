import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}