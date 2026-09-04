import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import app from '../firebass/config';

const auth = getAuth(app);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const LoginHandler = () => {
        console.log(email, password);
        
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate('/home'); 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            {/* Main Card Container */}
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[500px]">
                
                {/* Left Dark Sidebar */}
                <div className="w-full md:w-5/12 bg-[#2d2d54] text-white p-8 md:p-12 flex flex-col justify-between">
                    <div>
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-16">
                            <div className="w-8 h-8 border-2 border-purple-400 rounded flex items-center justify-center relative">
                                <div className="w-4 h-4 bg-purple-500 rounded-sm absolute -bottom-1 -right-1"></div>
                            </div>
                            <div>
                                <h2 className="font-bold text-xl tracking-wide leading-none">LOGO</h2>
                                <p className="text-xs text-gray-400">Slogan here</p>
                            </div>
                        </div>

                        {/* Heading & Text */}
                        <h2 className="text-3xl font-semibold mb-6">Start your<br />journey</h2>
                        <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </div>
                </div>

                {/* Right Form Area */}
                <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-[#2d2d54] mb-8">Login</h1>

                    <div className="space-y-6">
                        <input
                            type="email"
                            placeholder='Enter your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border-b border-gray-300 pb-2 text-sm focus:outline-none focus:border-purple-600 transition"
                        />

                        <input
                            type="password"
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border-b border-gray-300 pb-2 text-sm focus:outline-none focus:border-purple-600 transition"
                        />

                        <div>
                            <button 
                                onClick={LoginHandler}
                                className="w-36 bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2.5 rounded-md font-medium text-sm hover:opacity-90 transition shadow-md mt-4"
                            >
                                Login
                            </button>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-8">
                        Already a member?{' '}
                        <Link to="/" className="text-purple-600 font-semibold hover:underline">
                            Go to signup
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;