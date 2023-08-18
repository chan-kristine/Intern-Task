import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList');
  return localTodoList ? JSON.parse(localTodoList) : [];
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
      window.localStorage.setItem(
        'todoList',
        JSON.stringify([...state.todoList])
      );
    },
    deleteTodo: (state, action) => {
      const updatedTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      state.todoList = updatedTodoList;
      window.localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    },
    updateTodo: (state, action) => {
      const todoListArr = [...state.todoList];
      todoListArr.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.status = action.payload.status;
          todo.title = action.payload.title;
        }
      });
      window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      state.todoList = todoListArr;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
