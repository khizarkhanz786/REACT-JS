import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Blog from './pages/Blog'
import ProtectedRoute from './pages/ProtectedRoute'

const App = () => {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Home />} />
    <Route path='/blog' element={<ProtectedRoute><Blog /></ProtectedRoute>} />

   </Routes>
   
   </BrowserRouter>
  )
}

export default App