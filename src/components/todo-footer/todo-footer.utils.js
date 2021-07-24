export const sortActiveItems = (itmes) => {
  return itmes.filter((item) => item.isDone === false);
};

export const sortCompletedItems = (items) => {
  return items.filter((item) => item.isDone === true);
};
