import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Todos from "./components/Todos";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo , setEditTodo] = useState(null)
  const toastHandler = (message) =>{
    return toast(message)
  }

  const addTodoHandler = () => {
    if(!input.trim()){
     return toastHandler("Please enter your task")
    }

    if (todos) {
      const existingTodo =todos.map((item) => item.title.includes(input))
      if (existingTodo[0]) {
        return toastHandler("This Item is Already Exist")
      }
    }
    if (editTodo) {
      const updateTodo = todos.map((todo) => todo.id == editTodo ?{...todo,title: input}:todo)
      setTodos(updateTodo)
      setEditTodo(null)
      setInput("")
      return toastHandler("Your value is Updated")
    }
    const todoItem = {
      title:input,
      id: Date.now()
    }
    setTodos((prev)=> [...prev,todoItem])
    setInput("")
  }

  const editTodoHandler = (id)=>{

    let editItem = todos.find((item) => item.id == id) 
    setEditTodo(editItem.id)
    setInput(editItem.title)
  }

  const deleteTodoHandler = (id) => {
    let deleteTodo = todos.filter((item) => item.id !== id) 
    setTodos(deleteTodo)
  }
  return (
    <>
    {/* this is container */}
      <div className="container">
      <div className="todos-con">
        {/* this is todo heading */}
      <h1 id='todos-app'>todo application</h1>

        {/* this is input arear */}

      <div className="input-area">
        <input type="text" placeholder='Add Your Tasks'
        onChange={(e) => setInput(e.target.value)} value={input}
        />
        <button onClick={addTodoHandler} id='inp-btn'>{editTodo ? "update" : "Add"}</button>
      </div>

      {todos.length > 0 ? todos.map((todo) => (
        <Todos deleteTodoHandler ={deleteTodoHandler} editTodoHandler={editTodoHandler} key={todo  .id} todo={todo} />
      )) : <p style={{textAlign:"center",fontSize:"22px",marginTop:"18px", margin: "10px", color:"white" , textTransform:"capitalize"}}>no todo</p>}     


      </div>

        {/* todos area */}

          <ToastContainer />


      </div>
    </>
  )
}

export default App
