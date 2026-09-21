import React from "react";
import { Link } from "react-router-dom";
import video from "../Assets/video.mp4"
const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">

      


        {/* Hero Content */}
        <main className="flex flex-1 items-center justify-center px-6 text-center">

          <div className="max-w-4xl">

         

            {/* Main Heading */}
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">

              Your Ideas
              <br />

              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Deserve To Be Heard.
              </span>

            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">

              Blog Hub is a place where people share their thoughts,
              experiences, stories and ideas with a community that
              listens.

            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                to="/signup"
                className="rounded-xl bg-white px-7 py-3.5 font-semibold text-slate-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
              >
                Start Sharing →
              </Link>

              <Link
                to="/login"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Explore Blog Hub
              </Link>

            </div>

            {/* Bottom Stats */}
            <div className="mx-auto mt-14 flex max-w-xl items-center justify-center gap-8 border-t border-white/20 pt-6 text-white/80">

              <div>
                <p className="text-xl font-bold text-white">Ideas</p>
                <p className="text-xs">Worth Sharing</p>
              </div>

              <div className="h-8 w-px bg-white/20"></div>

              <div>
                <p className="text-xl font-bold text-white">Stories</p>
                <p className="text-xs">Worth Reading</p>
              </div>

              <div className="h-8 w-px bg-white/20"></div>

              <div>
                <p className="text-xl font-bold text-white">People</p>
                <p className="text-xs">Worth Connecting</p>
              </div>

            </div>

          </div>

        </main>

        

      </div>
    </div>
  );
};

export default Home;