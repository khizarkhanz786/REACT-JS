import React, { useEffect, useState , } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase/Config";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check Login User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
<nav className="sticky top-0 z-50 h-14 border-b border-indigo-100 bg-white">
  
  <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5">

    {/* Logo */}
    <Link
      to="/"
      className="group flex items-center gap-2"
    >
      {/* Logo Icon */}
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-105">
        <span className="text-lg font-black">B</span>
      </div>

      {/* Logo Text */}
      <div className="text-xl font-extrabold tracking-tight">
        <span className="text-indigo-600">Blog</span>
        <span className="text-slate-800">Hub</span>
      </div>
    </Link>


    {/* Desktop Links */}
    <div className="hidden items-center gap-8 md:flex">

      <Link
        to="/"
        className="font-medium text-slate-600 transition hover:text-indigo-600"
      >
        Home
      </Link>

      <Link
        to="/blog"
        className="font-medium text-slate-600 transition hover:text-indigo-600"
      >
        Blogs
      </Link>

      <Link
        to="/create-blog"
        className="font-medium text-slate-600 transition hover:text-indigo-600"
      >
        Create Blog
      </Link>

      <Link
        to="/about"
        className="font-medium text-slate-600 transition hover:text-indigo-600"
      >
        About
      </Link>

    </div>


    {/* Right Side */}
    <div className="flex items-center gap-3">

      {/* Not Logged In */}
      {!user && (
        <>
          <Link
            to="/login"
            className="hidden px-3 py-2 font-medium text-slate-600 transition hover:text-indigo-600 sm:block"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white shadow-sm transition duration-300 hover:bg-indigo-700 hover:shadow-md"
          >
            Sign Up
          </Link>
        </>
      )}


      {/* Logged In */}
      {user && (
        <button
          onClick={handleLogout}
          className="rounded-xl bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
        >
          Logout
        </button>
      )}


      {/* Mobile Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="ml-1 rounded-xl p-2 text-xl text-indigo-600 transition hover:bg-indigo-50 md:hidden"
      >
        ☰
      </button>

    </div>

  </div>


  {/* Mobile Menu */}
  {menuOpen && (
    <div className="border-t border-indigo-100 bg-white px-5 py-4 md:hidden">

      <div className="flex flex-col gap-1">

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-3 py-2.5 font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
        >
          Home
        </Link>

        <Link
          to="/blog"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-3 py-2.5 font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
        >
          Blogs
        </Link>

        <Link
          to="/create-blog"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-3 py-2.5 font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
        >
          Create Blog
        </Link>

        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
          className="rounded-lg px-3 py-2.5 font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
        >
          About
        </Link>

        {!user && (
          <>
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-center font-semibold text-white hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </>
        )}

        {user && (
          <button
            onClick={handleLogout}
className="mt-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-left font-semibold text-indigo-600 transition hover:bg-indigo-100"          >
            Logout
          </button>
        )}

      </div>

    </div>
  )}

</nav>
  );
};

export default Navbar;