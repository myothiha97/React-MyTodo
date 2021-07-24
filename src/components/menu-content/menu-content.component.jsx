import React, { useContext } from "react";
import TodoFooter from "../todo-footer/todo-footer.component";
import "./menu-content.styles.scss";
import TodoInput from "../todo-input/todo-input.component";
import ThemeContext from "../../contexts/theme/theme.context";
import TodoList from "../todo-list/todo-list.component";
import Logo from "../logo/logo.component";
import { TodoWrapper, EmptyItem } from "./menu-content.styles";
const MenuContent = ({ todoLists, type }) => {
  const { theme } = useContext(ThemeContext);

  const renderAllTodos = (renderTodos) => {
    // console.log("Todos quantity ------> ", todos.length);
    // console.log("renderTodos quantity ------> ", renderTodos.length);
    // console.log("To render todos type : ", renderTodos);
    if (renderTodos.length > 0) {
      return (
        <React.Fragment>
          {renderTodos.map((todo) => (
            <TodoList currentTodo={todo}>{todo.text}</TodoList>
          ))}
          <TodoFooter></TodoFooter>
        </React.Fragment>
      );
    } else {
      if (type !== "active" && type !== "completed" && todoLists.length < 1) {
        // console.log("Empty is fired");
        return (
          <EmptyItem textColor={theme ? "white" : "black"}>
            There is no item added yet
          </EmptyItem>
        );
      } else {
        // console.log("No Empty is fired");
        return (
          <React.Fragment>
            <EmptyItem textColor={theme ? "white" : "black"}>
              There is no item that is {type}
            </EmptyItem>
            <TodoFooter></TodoFooter>
          </React.Fragment>
        );
      }
    }
  };
  return (
    <div className="todo-menu">
      <div className="todo-menu__header">
        <h1
          style={{
            color: `${theme ? "white" : "black"}`,
          }}
        >
          TODO
        </h1>
        <Logo theme={theme}></Logo>
      </div>

      <TodoInput></TodoInput>

      <TodoWrapper bgColor={theme ? "#25273c" : "white"}>
        {renderAllTodos(todoLists)}
      </TodoWrapper>
    </div>
  );
};

export default MenuContent;
