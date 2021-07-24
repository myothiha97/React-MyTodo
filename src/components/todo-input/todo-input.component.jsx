import React, { useContext } from "react";
import { DarkInputBox, LightInputBox } from "./todo-input.styles";
import ThemeContext from "../../contexts/theme/theme.context";
import TodoListsContext from "../../contexts/todo-lists/todo-lists.context";

const TodoInput = () => {
  const { theme } = useContext(ThemeContext);
  const { addTodos } = useContext(TodoListsContext);
  const onKeyEnter = (event) => {
    if (event.key === "Enter") {
      addTodos({
        id: Math.random(),
        text: event.target.value,
        isDone: false,
      });
    } else {
      return "";
    }
  };
  return (
    <div className="todo-input">
      {theme ? (
        <DarkInputBox onKeyPress={onKeyEnter}></DarkInputBox>
      ) : (
        <LightInputBox onKeyPress={onKeyEnter}></LightInputBox>
      )}
    </div>
  );
};

export default TodoInput;
