import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
     <div className="min-h-[85vh] bg-slate-100 flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Learning Academy
          </h1>
          
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Welcome to our dashboard platform. Explore interactive web courses, track student analytics, and manage user directories with ease.
          </p>

          <div className="pt-2">
            <Link 
              to="/anotheruser" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              VISIT USER DIRECTORY
            </Link>
          </div>
        </div>

        {/* Right Image (Without Box Frame) */}
        <div className="flex-1 w-full flex justify-center md:justify-end">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
            alt="Academy Meeting" 
            className="w-full max-w-lg h-[320px] md:h-[400px] object-cover rounded-3xl shadow-lg"
          />
        </div>

      </div>
    </div>
    

    </>
  );
};

export default Home;