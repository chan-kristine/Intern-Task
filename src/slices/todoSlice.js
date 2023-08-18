import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem('todoList', JSON.stringify([]));
  return [];
};

const initialValue = {
  todoList: getInitialTodo(),
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
    deleteTodo: (state, action) => {
      const updatedTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      state.todoList = updatedTodoList;
      window.localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
