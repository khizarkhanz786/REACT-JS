import React from 'react'
import { auth } from '../Firebase/Config.js'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { getAuth } from 'firebase/auth';


const Home = () => {
    const navigate = useNavigate()
    const LogOut = async () => {
        try {
            await signOut(auth)
            toast.success("Logged out successfully!");
            navigate('/')
        } catch (error) {
            toast.error("Logout error: " + error.message);
        }
    }
    return (
        <>
        <ToastContainer />
<button 
        onClick={LogOut}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
        </>
    )
}


export default Home