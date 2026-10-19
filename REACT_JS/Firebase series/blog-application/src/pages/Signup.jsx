import { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../Firebase/Config.js";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Img from "../Assets/Blog-image.png";
import SignInWithGoogle from "../components/SignInWithGoogle.jsx";
import { doc, setDoc } from "firebase/firestore";

// SignInWithGoogle isko import karta hoga, is liye export rehna chahiye
export const SaveDataIntoDB = async (userName = "", data) => {
  if (!data || !data.uid) {
    console.error("UID missing hai!");
    return;
  }

  try {
    await setDoc(doc(db, "users", data.uid), {
      email: data.email,
      username: data.displayName ? data.displayName : userName,
      photoURL: data.photoURL ? data.photoURL : "",
      createdAt: new Date(),
    });
    console.log("user data saved");
  } catch (error) {
    console.error("Firestore Error:", error);
    toast.error(error.message);
  }
};

const getErrorMessage = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "Ye email pehle se registered hai, login karo";
    case "auth/invalid-email":
      return "Email ka format theek nahi hai";
    case "auth/weak-password":
      return "Password kam az kam 6 characters ka rakho";
    case "auth/network-request-failed":
      return "Internet connection check karo";
    case "auth/too-many-requests":
      return "Bohat zyada koshishein, thori der baad try karo";
    default:
      return "Signup nahi ho saka, dobara try karo";
  }
};

const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isSigningUp = useRef(false);
  const navigate = useNavigate();

  // Already logged-in user (ya Google login) ko blog par bhej do.
  // Email signup ke dauran skip, kyunke data save ke baad hum khud navigate karte hain.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && !isSigningUp.current) {
        navigate("/blog", { replace: true });
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const SignupHandler = async (e) => {
    e.preventDefault();

    if (!user.trim()) {
      toast.error("Apna naam likho");
      return;
    }
    if (!email.trim()) {
      toast.error("Email likho");
      return;
    }
    if (password.length < 6) {
      toast.error("Password kam az kam 6 characters ka rakho");
      return;
    }

    try {
      setLoading(true);
      isSigningUp.current = true;

      const response = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      await updateProfile(response.user, { displayName: user.trim() });

      // Firestore main save complete
      await SaveDataIntoDB(user.trim(), response.user);

      toast.success("Signup successfully");
      navigate("/blog", { replace: true });
    } catch (error) {
      console.log(error.code, error.message);
      toast.error(getErrorMessage(error.code));
    } finally {
      isSigningUp.current = false;
      setLoading(false);
    }
  };
const Backhandler = () => {
    navigate("/")
  }
  return (
    <>
    <button  onClick={Backhandler}>back</button>
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
              <span className="block text-indigo-600">Blog Hub</span>
            </h1>

            {/* Paragraph */}
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
              Discover amazing stories, share your ideas, and connect with a
              community of passionate writers. Create your account and start
              exploring our world of blogs today.
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
                <p className="text-lg font-bold text-slate-800">✍️ Write</p>
                <p className="text-xs text-slate-500">Share your ideas</p>
              </div>

              <div>
                <p className="text-lg font-bold text-slate-800">📖 Explore</p>
                <p className="text-xs text-slate-500">Read amazing blogs</p>
              </div>

              <div>
                <p className="text-lg font-bold text-slate-800">🌎 Connect</p>
                <p className="text-xs text-slate-500">Join the community</p>
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
                <form onSubmit={SignupHandler} className="flex flex-col gap-3.5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-semibold text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      placeholder="Enter your name"
                      type="text"
                      autoComplete="name"
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-semibold text-slate-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      placeholder="Enter your email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-1.5 block text-xs font-semibold text-slate-700"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      placeholder="Minimum 6 characters"
                      type="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* Signup Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-200 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Account"}
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-200"></div>
                    <span className="text-[10px] font-medium text-slate-400">
                      OR
                    </span>
                    <div className="h-px flex-1 bg-slate-200"></div>
                  </div>

                  {/* Google */}
                  <SignInWithGoogle />

                  {/* Login */}
                  <p className="pt-1 text-center text-xs text-slate-500">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700 hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </form>
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
    </>
  );
};

export default Signup;