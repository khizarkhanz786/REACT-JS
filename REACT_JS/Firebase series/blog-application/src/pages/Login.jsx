import React from 'react'
import { useState } from 'react'
import { getAuth,  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Firebase/Config.js"
import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {useNavigate,Link} from 'react-router-dom'
import Home from './Home.jsx'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const LoginHandler = async() => {
    const auth = getAuth();
  
      
    try {
    let response = await signInWithEmailAndPassword(auth, email, password)
    if (response && response.user) {
      toast.success("Login successfully")
      navigate('/home')
    }
    
  } catch (error) {
       const errorCode = error.code;
       const errorMessage = error.message;

    if (error.code || error.message) {
      toast.error("Invalid Information")
    }
  }


 };

  
 
  return (
    <>
  <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 px-6 py-6 flex items-center">

  <div className="mx-auto w-full max-w-6xl">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">


      {/* ================= LEFT SIDE ================= */}
      <div className="hidden lg:flex flex-col justify-center px-8">

        {/* Badge */}
        <div className="mb-5 flex w-fit items-center rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold tracking-wide text-indigo-600">
          ✦ YOUR SPACE • YOUR STORIES
        </div>


        {/* Heading */}
        <h1 className="max-w-xl text-5xl font-extrabold leading-tight tracking-tight text-slate-800">
          Share Your World,
          <span className="block text-indigo-600">
            One Post at a Time.
          </span>
        </h1>


        {/* Paragraph */}
        <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
          Connect with people, share your thoughts, discover interesting
          stories, and build your own profile. Blog Hub brings everything
          you love about social sharing into one simple community.
        </p>


        {/* Features */}
        <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">

          <div className="rounded-xl border border-white/80 bg-white/60 p-4 shadow-sm">
            <div className="mb-2 text-xl">
              ✍️
            </div>

            <h3 className="text-sm font-bold text-slate-800">
              Create Posts
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Share your thoughts, ideas and stories with everyone.
            </p>
          </div>


          <div className="rounded-xl border border-white/80 bg-white/60 p-4 shadow-sm">
            <div className="mb-2 text-xl">
              👥
            </div>

            <h3 className="text-sm font-bold text-slate-800">
              Connect
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Discover people and explore what they are sharing.
            </p>
          </div>


          <div className="rounded-xl border border-white/80 bg-white/60 p-4 shadow-sm">
            <div className="mb-2 text-xl">
              ❤️
            </div>

            <h3 className="text-sm font-bold text-slate-800">
              Engage
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Like, interact and become part of the community.
            </p>
          </div>


          <div className="rounded-xl border border-white/80 bg-white/60 p-4 shadow-sm">
            <div className="mb-2 text-xl">
              🌎
            </div>

            <h3 className="text-sm font-bold text-slate-800">
              Explore
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Find fresh content and stories from the community.
            </p>
          </div>

        </div>

      </div>



      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full flex justify-center">

        <div className="w-full max-w-sm">

          {/* Login Card */}
          <div className="rounded-2xl border border-white/70 bg-white/85 p-7 shadow-xl shadow-indigo-200/40 backdrop-blur-xl">


            {/* Heading */}
            <div className="mb-7 text-center">

              <div className="mx-auto mb-4 flex h-10 w-24 items-center justify-center rounded-lg bg-indigo-600 shadow-lg shadow-indigo-200">

                <span className="text-sm font-bold tracking-wide text-white">
                  Login
                </span>

              </div>


              <h1 className="text-3xl font-bold tracking-tight text-slate-800">
                Welcome Back! to Blog Hub
              </h1>


              <p className="mt-1.5 text-sm text-slate-500">
                Sign in and continue exploring your community
              </p>

            </div>


            {/* Form */}
            <div className="flex flex-col gap-4">


              {/* Email */}
              <div>

                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>


              {/* Password */}
              <div>

                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <input
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </div>


              {/* Login Button */}
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-200 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 active:scale-[0.98]"
                onClick={LoginHandler}
              >
                Login
              </button>


              {/* Signup */}
              <div className="pt-2 text-center">

                <p className="text-sm text-slate-500">
                  New to Blog Hub?{" "}

                  <Link
                    to="/"
                    className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700 hover:underline"
                  >
                    Create an account
                  </Link>
                </p>

              </div>

            </div>

          </div>


          {/* Footer */}
          <p className="mt-4 text-center text-xs text-slate-400">
            Your stories. Your community. Your space.
          </p>

        </div>

      </div>

    </div>

  </div>

</div>
      
 <ToastContainer />
 
    </>
  )
}


export default Login