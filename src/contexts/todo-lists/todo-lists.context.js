import { createContext } from "react";

const TodoListsContext = createContext({
  todos: [],
  setTodo: () => {},
  addTodos: () => {},
  sortAll: () => {},
  sortActive: () => {},
  sortCompleted: () => {},
  removeTodo: () => {},
  removeCompletedTodos: () => {},
});

export default TodoListsContext;
