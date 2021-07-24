// import "./todo-menu.styles.scss";
import React, { useState } from "react";
import TodoListsContext from "../../contexts/todo-lists/todo-lists.context";
import MenuContent from "../menu-content/menu-content.component";

const TodoMenu = () => {
  const [todoType, setTodoType] = useState(null);
  const [todos, setTodos] = useState([]);
  const [totalTodos, setTotalTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const addTodos = (data) => {
    setTodos([...todos, data]);
    setTotalTodos([...totalTodos, data]);
  };
  const setTodo = (newTodos) => {
    setTodos([...newTodos]);
  };
  const sortAll = () => {
    setTodos([...totalTodos]);
    setTodoType("all");
  };
  const sortActive = (sortActiveTodos) => {
    setActiveTodos([...sortActiveTodos]);
    setTodoType("active");
  };
  const sortCompleted = (sortCompletedTodos) => {
    setCompletedTodos([...sortCompletedTodos]);
    setTodoType("completed");
  };

  const evalRenderTodos = (type) => {
    if (type === "active") {
      return activeTodos;
    } else if (type === "completed") {
      return completedTodos;
    } else {
      return todos;
    }
  };

  return (
    <div className="todo-menu">
      <TodoListsContext.Provider
        value={{
          todos,
          addTodos,
          setTodo,
          sortAll,
          sortActive,
          sortCompleted,
        }}
      >
        <MenuContent
          todoLists={evalRenderTodos(todoType)}
          type={todoType}
        ></MenuContent>
      </TodoListsContext.Provider>
    </div>
  );
};

export default TodoMenu;
