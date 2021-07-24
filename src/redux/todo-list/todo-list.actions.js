import { todoListTypes } from "./todo-list.types";

export const addTodoList = (data) => {
  console.log("This is action creater content : ", data);
  return {
    type: todoListTypes.ADD_TODO,
    payload: data,
  };
};
