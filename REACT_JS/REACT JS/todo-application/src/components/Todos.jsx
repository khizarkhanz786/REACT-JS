import React from 'react'
import '../App.css'

const Todos = ({ todo , editTodoHandler , deleteTodoHandler}) => {
  return (
   
        <div className="todos">
            <h1 id='todos-h1'>{todo.title}</h1>
            <div className="todos-btn">
                <button id='child1' onClick={() => editTodoHandler(todo.id)}>edit</button>
                <button id='child2' onClick={()=> deleteTodoHandler(todo.id)}>delete</button>
            </div>
        </div>
   
  )
}

export default Todos