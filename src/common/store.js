import { configureStore } from '@reduxjs/toolkit';
import ToDoReducer from './toDoReducer';

export const store = configureStore({
  reducer: {
    toDosReducer: ToDoReducer,
  },
});
