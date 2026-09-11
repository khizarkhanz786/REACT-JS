import React from 'react'
import { useState ,useEffect} from 'react'
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Config.js"
import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'
import Home from './Home.jsx'
import Img from '../Assets/Blog-image.png'




const Signup = () => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const SignupHandler = async () => {
    const auth = getAuth();

    try {

      let response = await createUserWithEmailAndPassword(auth, email, password)

      console.log(response)
      if (response) {
        toast.success("signup succsesfully")
        navigate('/home')
      }

    } catch (error) {
      console.log(error.message)
      console.log(error.code)
      if (error.message == "FirebaseError: Firebase: Error (auth/email-already-in-use)." || error.code == "auth/email-already-in-use") {
        toast.error("Invalid Credential")
      }

      // ..
    };

  }
  const SignUpWithGoogle = async () => {
    if (auth.currentUser) {
      toast.info("you are already signin")
      return
    }
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    try {
      const response = await signInWithPopup(auth, provider)
      if (response && response.user) {
        toast.success("Signup successfully")
        navigate('/home')
      }
      console.log(response)
    } catch (error) {
      if (error.code !== "auth/cancelled-popup-request") {
        toast.error(error.message);
      }
    }


  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } 
    });

    return () => unsubscribe(); // Cleanup listener
  }, [navigate, auth]);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-purple-100 px-6 py-6 flex items-center">

        <div className="mx-auto w-full max-w-6xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">


            {/* ================= LEFT SIDE ================= */}
            <div className="hidden lg:flex flex-col justify-center px-8">

              {/* Small Badge */}
              <div className="mb-5 inline-flex w-fit items-center rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold text-indigo-600">
                ✦ BLOG HUB APPLICATION
              </div>

              {/* Heading */}
              <h1 className="max-w-xl text-5xl font-extrabold leading-tight tracking-tight text-slate-800">
                Welcome to Our
                <span className="block text-indigo-600">
                  Blog Hub
                </span>
              </h1>

              {/* Paragraph */}
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
                Discover amazing stories, share your ideas, and connect with
                a community of passionate writers. Create your account and
                start exploring our world of blogs today.
              </p>


              {/* Image */}
              <div className="mt-7 overflow-hidden rounded-2xl border border-white/80 shadow-xl shadow-indigo-200/40">

                <img
                  src={Img}
                  alt="Blog workspace"
                  className="h-56 w-full object-cover transition duration-500 hover:scale-105"
                />

              </div>


              {/* Small Features */}
              <div className="mt-5 flex gap-6">

                <div>
                  <p className="text-lg font-bold text-slate-800">
                    ✍️ Write
                  </p>
                  <p className="text-xs text-slate-500">
                    Share your ideas
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-slate-800">
                    📖 Explore
                  </p>
                  <p className="text-xs text-slate-500">
                    Read amazing blogs
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-slate-800">
                    🌎 Connect
                  </p>
                  <p className="text-xs text-slate-500">
                    Join the community
                  </p>
                </div>

              </div>

            </div>



            {/* ================= RIGHT SIDE ================= */}
            <div className="w-full flex justify-center">

              <div className="w-full max-w-sm">

                {/* Card */}
                <div className="rounded-2xl border border-white/70 bg-white/85 p-6 shadow-xl shadow-indigo-200/40 backdrop-blur-xl">

                  {/* Heading */}
                  <div className="mb-5 text-center">

                    <div className="mx-auto mb-3 flex h-10 w-24 items-center justify-center rounded-lg bg-indigo-600 shadow-md shadow-indigo-200">

                      <span className="text-sm font-bold tracking-wide text-white">
                        SignUp
                      </span>

                    </div>

                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">
                      Create Account
                    </h1>

                    <p className="mt-1 text-xs text-slate-500">
                      Join our blog community today
                    </p>

                  </div>


                  {/* Form */}
                  <div className="flex flex-col gap-3.5">


                    {/* Name */}
                    <div>

                      <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Full Name
                      </label>

                      <input
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        placeholder="Enter your name"
                        type="text"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                      />

                    </div>


                    {/* Email */}
                    <div>

                      <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Email Address
                      </label>

                      <input
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                    </div>


                    {/* Password */}
                    <div>

                      <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                        Password
                      </label>

                      <input
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />

                    </div>


                    {/* Google */}
                    <button
                      type="button"
                      className="mt-1 flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md active:scale-[0.98]"
                      onClick={SignUpWithGoogle}
                    >

                      <svg className="h-5 w-5" viewBox="0 0 24 24">

                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />

                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />

                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />

                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />

                      </svg>

                      <span>
                        Continue with Google
                      </span>

                    </button>


                    {/* Divider */}
                    <div className="flex items-center gap-3">

                      <div className="h-px flex-1 bg-slate-200"></div>

                      <span className="text-[10px] font-medium text-slate-400">
                        OR
                      </span>

                      <div className="h-px flex-1 bg-slate-200"></div>

                    </div>


                    {/* Signup */}
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-200 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 active:scale-[0.98]"
                      onClick={SignupHandler}
                    >
                      Create Account
                    </button>


                    {/* Login */}
                    <p className="pt-1 text-center text-xs text-slate-500">

                      Already have an account?{" "}

                      <Link
                        to="./login"
                        className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700 hover:underline"
                      >
                        Login
                      </Link>

                    </p>

                  </div>

                </div>


                {/* Footer */}
                <p className="mt-3 text-center text-[10px] text-slate-400">
                  By creating an account, you agree to our terms & privacy policy.
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


export default Signup