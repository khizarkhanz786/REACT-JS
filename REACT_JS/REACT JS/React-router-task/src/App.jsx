import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import CoursesDetailing from "./pages/CoursesDetailing"
import User from "./pages/User"
import Contact from "./pages/Contact"
import Jobs from "./pages/Jobs"
import Dashboard from './dashboard/Dashboard';
import AnotherUser from './pages/AnotherUser';
import UserDetailPage from './pages/UserDetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* simple routing */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* nested routing */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="course-detailing" element={<CoursesDetailing />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="users" element={<User />} />
        </Route>


        {/* Dynamic Routinfg */}

        <Route path='/anotheruser' element={<AnotherUser />} />
        <Route path='/userdetailpage/:id' element={<UserDetailPage />} />

      </Routes>


    </BrowserRouter>
  )
}

export default App;