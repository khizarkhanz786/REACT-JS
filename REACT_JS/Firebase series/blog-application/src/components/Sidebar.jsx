import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {
  Home,
  BookOpen,
  PlusCircle,
  Info,
  User,
  LogOut,
} from "lucide-react";
import { auth } from "../Firebase/Config";

const Sidebar = ({ onOpenModal }) => {
  const navigate = useNavigate();

  const menuItems = [
      { name: "Profile", path: "/profile", icon: User, type: "link" },
    { name: "Home", path: "/", icon: Home, type: "link" },
    { name: "All Blogs", path: "/blog", icon: BookOpen, type: "link" },
    { name: "Create Blog", icon: PlusCircle, type: "button", onClick: onOpenModal },
    { name: "About", path: "/about", icon: Info, type: "link" },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-16 flex-col border-r border-slate-200 bg-white md:w-64">
      <div className="border-b border-slate-200 px-2 py-5 md:px-6">
        <h1 className="text-center text-xl font-bold text-blue-600 md:text-left">
          <span className="md:hidden">B</span>
          <span className="hidden md:inline">BlogHub</span>
        </h1>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto px-2 py-5">
        {menuItems.map(({ name, path, icon: Icon, type, onClick }) => {
          if (type === "button") {
            return (
              <button
                key={name}
                onClick={onClick}
                title={name}
                className="flex w-full items-center justify-center gap-3 rounded-xl px-3 py-3 text-slate-600 transition hover:bg-slate-100 md:justify-start"
              >
                <Icon size={21} />
                <span className="hidden text-sm font-medium md:inline">
                  {name}
                </span>
              </button>
            );
          }

          return (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              title={name}
              className={({ isActive }) =>
                `flex items-center justify-center gap-3 rounded-xl px-3 py-3 transition md:justify-start ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              <Icon size={21} />
              <span className="hidden text-sm font-medium md:inline">
                {name}
              </span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 p-2 md:p-4">
        <button
          onClick={handleLogout}
          title="Logout"
          className="flex w-full items-center justify-center gap-3 rounded-xl px-3 py-3 text-red-600 transition hover:bg-red-50 md:justify-start"
        >
          <LogOut size={21} />
          <span className="hidden text-sm font-medium md:inline">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;