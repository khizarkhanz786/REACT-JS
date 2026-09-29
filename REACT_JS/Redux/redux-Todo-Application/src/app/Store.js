import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Feauteres/todo/TodoSlice.js'
export const store = configureStore({ reducer: {
    todo : todoReducer
} })