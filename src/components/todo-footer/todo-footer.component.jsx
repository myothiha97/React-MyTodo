import React, { useContext } from "react";
import {
  FooterMiddle,
  TodoFooterElement,
  FooterText,
} from "./todo-footer.styles";
import TodoListsContext from "../../contexts/todo-lists/todo-lists.context";
import ThemeContext from "../../contexts/theme/theme.context";
import { sortActiveItems, sortCompletedItems } from "./todo-footer.utils";

const TodoFooter = () => {
  const { todos, sortActive, sortCompleted, sortAll, removeCompletedTodos } =
    useContext(TodoListsContext);
  const { theme } = useContext(ThemeContext);
  return (
    <TodoFooterElement textColor={theme ? "white" : "black"}>
      <div className="item-left-count">
        <FooterText>{todos.length} items left</FooterText>
      </div>
      <FooterMiddle>
        <FooterText onClick={() => sortAll()}> All</FooterText>
        <FooterText onClick={() => sortActive(sortActiveItems(todos))}>
          {" "}
          Active
        </FooterText>
        <FooterText onClick={() => sortCompleted(sortCompletedItems(todos))}>
          {" "}
          Completed
        </FooterText>
      </FooterMiddle>
      <div className="clear-completed">
        <FooterText onClick={removeCompletedTodos}> Clear Completed</FooterText>
      </div>
    </TodoFooterElement>
  );
};

export default TodoFooter;
