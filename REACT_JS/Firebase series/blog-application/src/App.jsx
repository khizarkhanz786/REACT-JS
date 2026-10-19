
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import ProtectedRoute from "./pages/ProtectedRoute";
import About from "./pages/About";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {(location.pathname === "/" ||
        location.pathname === "/about") && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />

        {/* Galat URL par home par bhej do */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
