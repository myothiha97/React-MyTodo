import { createContext } from "react";

const TodoListsContext = createContext({
  todos: [],
  setTodo: () => {},
  addTodos: () => {},
  sortAll: () => {},
  sortActive: () => {},
  sortCompleted: () => {},
});

export default TodoListsContext;
