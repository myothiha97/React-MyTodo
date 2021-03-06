import React, { useState, useContext } from "react";

import { connect } from "react-redux";
import Box from "../box/box.component";
import { ReactComponent as CheckIcon } from "../../assets/icon-check.svg";
import { ReactComponent as RemoveIcon } from "../../assets/icon-cross.svg";

import {
  CheckIconEmpty,
  CheckIconFilled,
  TodoListLeft,
} from "./todo-list.styles";

import "./todo-list.styles.scss";
// import { createStructuredSelector } from "reselect";
// import { selectAppTheme } from "../../redux/theme/theme.selector";
import ThemeContext from "../../contexts/theme/theme.context";
import TodoListsContext from "../../contexts/todo-lists/todo-lists.context";
import { removeTodoFromTodolists, setTodoStatus } from "./todo-list.utils";

const TodoList = ({ children, currentTodo }) => {
  const { theme } = useContext(ThemeContext);
  const { todos, setTodo, removeTodo } = useContext(TodoListsContext);
  const [active, setActive] = useState(false);
  const lineThroughColor = theme
    ? "line-through 1px white"
    : "line-through 1px black";

  const handleClick = (event) => {
    setTodo(setTodoStatus(todos, currentTodo));
  };
  return (
    <div className="todo-list">
      <Box borderColor={theme ? "#4F4F4F" : "#CDCDCD"}>
        <TodoListLeft>
          {currentTodo.isDone ? (
            <CheckIconFilled onClick={handleClick}>
              <CheckIcon width="10px" height="10px"></CheckIcon>
            </CheckIconFilled>
          ) : (
            <CheckIconEmpty onClick={handleClick}></CheckIconEmpty>
          )}
          <div
            className="todolist-content"
            style={{
              textDecoration: `${
                currentTodo.isDone ? lineThroughColor : "none"
              }`,
            }}
          >
            <p style={{ color: `${theme ? "white" : "black"}` }}>{children}</p>
          </div>
        </TodoListLeft>
        <div onClick={() => removeTodo(currentTodo)}>
          <RemoveIcon style={{ cursor: "pointer" }}></RemoveIcon>
        </div>
      </Box>
    </div>
  );
};

export default TodoList;
