import React, { useContext } from "react";
import { HiddenFooter, HiddenFooterContent } from "./hidden-footer.styles";
import { FooterText } from "../todo-footer/todo-footer.styles";
import TodoListsContext from "../../contexts/todo-lists/todo-lists.context";
import {
  sortActiveItems,
  sortCompletedItems,
} from "../todo-footer/todo-footer.utils";

const HiddenFooterMenu = ({ bgColor, textColor }) => {
  const { todos, sortActive, sortCompleted, sortAll } =
    useContext(TodoListsContext);
  return (
    <HiddenFooter
      bgColor={bgColor}
      textColor={textColor}
      isActive={todos.length > 0 ? true : false}
    >
      <HiddenFooterContent>
        <FooterText onClick={() => sortAll()}> All</FooterText>
        <FooterText onClick={() => sortActive(sortActiveItems(todos))}>
          {" "}
          Active
        </FooterText>
        <FooterText onClick={() => sortCompleted(sortCompletedItems(todos))}>
          {" "}
          Completed
        </FooterText>
      </HiddenFooterContent>
    </HiddenFooter>
  );
};

export default HiddenFooterMenu;
