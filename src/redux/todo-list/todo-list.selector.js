import { createSelector } from "reselect";

const selectTodo = (state) => state.todoList;

export const selectTodoLists = createSelector(
  [selectTodo],
  (todoList) => todoList.todo
);
