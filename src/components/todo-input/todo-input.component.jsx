import React, { useContext, useState } from "react";
import { DarkInputBox, LightInputBox } from "./todo-input.styles";
import ThemeContext from "../../contexts/theme/theme.context";
import TodoListsContext from "../../contexts/todo-lists/todo-lists.context";

const TodoInput = () => {
  const { theme } = useContext(ThemeContext);
  const { addTodos } = useContext(TodoListsContext);
  const [inputValue, setInputValue] = useState("");
  const onKeyEnter = (event) => {
    if (event.key === "Enter") {
      addTodos({
        id: Math.random(),
        text: event.target.value,
        isDone: false,
      });
      setInputValue("");
    } else {
      return "";
    }
  };
  return (
    <div className="todo-input">
      {theme ? (
        <DarkInputBox
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyPress={onKeyEnter}
        ></DarkInputBox>
      ) : (
        <LightInputBox
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={onKeyEnter}
          value={inputValue}
        ></LightInputBox>
      )}
    </div>
  );
};

export default TodoInput;
