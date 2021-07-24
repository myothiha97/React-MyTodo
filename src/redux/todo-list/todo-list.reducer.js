import { todoListTypes } from "./todo-list.types";
const FIRST_STATE = {
  todo: [],
};

const todoListReducer = (state = FIRST_STATE, action) => {
  switch (action.type) {
    case todoListTypes.ADD_TODO:
      console.log("This is todolist state : ", state);
      console.log("This is action.payload : ", action.payload);
      return {
        ...state,
        todo: state.todo.concat(action.payload),
      };

    default:
      return state;
  }
};

export default todoListReducer;
