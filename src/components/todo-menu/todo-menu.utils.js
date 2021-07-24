export const removeTodoFromList = (todos, removetodo) => {
  return todos.filter((todo) => todo.id !== removetodo.id);
};

export const removeCompleteTodoFromList = (todos) => {
  return todos.filter((todo) => todo.isDone !== true);
};
