import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("action payload", action.payload)
      state.todos.push(action.payload)
      console.log("state main gaya", state.todos)
    },
    deleteTodo: (state, action) => {
      // payload me todo.id aayegi
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    editTodo: (state, action) => {
      // payload me { id, title } aayega
      const { id, title } = action.payload
      const existingTodo = state.todos.find((todo) => todo.id === id)
      if (existingTodo) {
        existingTodo.title = title
      }
    }
  },
})

// ✅ TEENO ACTIONS KO EXPORT KAREIN (editTodo ke sath)
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions

// ✅ Corrected reducer export (reducero ko fix kiya)
export default todoSlice.reducer