export default function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
}) {
  return (
    <div className="todo-item">
      <div
        className={`todo-text ${
          todo.completed ? "completed" : ""
        }`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}