import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import './App.css'
import Home from './pages/Home'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/home' element={<Home />} />

   </Routes>
   
   </BrowserRouter>
  )
}

export default App