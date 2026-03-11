export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const updateStatus = (id) => ({
  type: "UPDATE_STATUS",
  payload: id,
});

export const moveToCompleted = (id) => ({
  type: "MOVE_TO_COMPLETED",
  payload: id,
});

export const moveToTodo = (id) => ({
  type: "MOVE_TO_TODO",
  payload: id,
});
