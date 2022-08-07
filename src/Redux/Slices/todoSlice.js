import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arrTodo: JSON.parse(localStorage.getItem('items')) || []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
     //объект функций которые будут управлять нашим состоянием
    reducers: {
        addTodoItem: (state, action) => {
            state.arrTodo.push(action.payload)
            localStorage.setItem('items', JSON.stringify(state.arrTodo))
        },
        removeTodoItem: (state, action) => {
            const newTodos = state.arrTodo.filter((todo) => todo.id !== action.payload)
            state.arrTodo = newTodos
            localStorage.setItem('items', JSON.stringify(newTodos))
        }
    },
})

export const { addTodoItem, removeTodoItem } = todoSlice.actions
export default todoSlice.reducer