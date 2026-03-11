import { createSlice } from '@reduxjs/toolkit';

const fallbackState = {
  todoItems: [],
  completedItems: [],
};

const getInitialState = () => {
  try {
    const storedState = JSON.parse(localStorage.getItem('todos'));
    if (!storedState || typeof storedState !== 'object') {
      return fallbackState;
    }

    return {
      todoItems: Array.isArray(storedState.todoItems)
        ? storedState.todoItems
        : Array.isArray(storedState.actionItems)
        ? storedState.actionItems
        : [],
      completedItems: Array.isArray(storedState.completedItems)
        ? storedState.completedItems
        : [],
    };
  } catch {
    return fallbackState;
  }
};

const saveState = (state) => {
  localStorage.setItem('todos', JSON.stringify(state));
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: getInitialState(),
  reducers: {
    addTodo: (state, action) => {
      state.todoItems.push(action.payload);
      saveState(state);
    },
    updateStatus: (state) => {
      state.todoItems.forEach((item) => {
        item.status = 'in-progress';
      });
      saveState(state);
    },
    moveCompleted: (state, action) => {
      const completedItem = state.todoItems.find(
        (item) => item.id === action.payload
      );

      if (completedItem) {
        completedItem.status = 'completed';
        state.completedItems.push(completedItem);
        state.todoItems = state.todoItems.filter(
          (item) => item.id !== action.payload
        );
        saveState(state);
      }
    },
    moveBack: (state, action) => {
      const todoItem = state.completedItems.find(
        (item) => item.id === action.payload
      );

      if (todoItem) {
        todoItem.status = 'in-progress';
        state.todoItems.push(todoItem);
        state.completedItems = state.completedItems.filter(
          (item) => item.id !== action.payload
        );
        saveState(state);
      }
    },
  },
});

export const { addTodo, updateStatus, moveCompleted, moveBack } = todoSlice.actions;
export default todoSlice.reducer;
