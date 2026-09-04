import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-[85vh] bg-slate-50 text-slate-900 flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        
        {/* Right Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          
          {/* Subtle Tagline Badge */}
          <span className="inline-block px-3.5 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
            Empowering Future Developers
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            About Our <span className="text-indigo-600">Academy</span>
          </h1>
          
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            We are dedicated to building modern web interfaces, empowering students with interactive learning modules, and managing structured user dashboards seamlessly.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              CONTACT US
            </Link>

            <Link 
              to="/anotheruser" 
              className="w-full sm:w-auto text-center bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              EXPLORE USERS
            </Link>
          </div>

        </div>

        {/* Left Floating Image */}
        <div className="flex-1 w-full flex justify-center md:justify-start">
          <div className="relative w-full max-w-lg">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
              alt="About Learning Academy" 
              className="w-full h-[340px] md:h-[420px] object-cover rounded-3xl shadow-xl border border-slate-200/80"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;