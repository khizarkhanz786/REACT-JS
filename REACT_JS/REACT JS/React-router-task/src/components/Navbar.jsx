import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Pages ka array jisme Name aur Route Path dono hain
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'AnotherUser', path: '/anotheruser' },
  ];

  return (
    <nav className="bg-slate-900 px-6 md:px-12 py-4 flex items-center justify-around relative">

      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg">
            ✦
          </div>

          <div className="text-2xl font-extrabold !text-white">
            Learning
            <span className="ml-1 !text-indigo-600">
              Academy
            </span>
          </div>
        </Link>
      </div>
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center bg-zinc-800 border border-zinc-700 rounded-full px-2 py-1 gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full text-sm transition-colors ${isActive
                ? 'bg-zinc-50 font-medium text-zinc-900'
                : 'text-zinc-300 hover:text-white'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Hamburger Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1"
      >
        <span className={`block w-6 h-0.5 bg-zinc-50 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-zinc-50 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-zinc-50 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-t border-zinc-800 flex flex-col p-5 gap-2 md:hidden z-50">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg text-sm ${isActive
                  ? 'bg-zinc-800 font-medium text-white'
                  : 'text-zinc-300 hover:bg-zinc-800/50'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;