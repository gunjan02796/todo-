import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
}) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}