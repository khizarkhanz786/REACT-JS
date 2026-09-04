import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebass/config'
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';

const auth = getAuth(app);

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const SignupHandler = () => {
        console.log(name, email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name
                })
                navigate('/login')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4">
            {/* Card Container */}
            <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
                
                {/* Left Side - Dark Purple Panel */}
                <div className="bg-[#323657] text-white p-8 md:p-12 md:w-2/5 flex flex-col justify-between min-h-[350px]">
                    <div>
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-12">
                            <div className="w-8 h-8 border-2 border-purple-400 rounded-lg flex items-center justify-center">
                                <div className="w-3 h-3 bg-purple-400 rounded-sm"></div>
                            </div>
                            <div>
                                <h2 className="font-bold text-lg leading-none tracking-wider">LOGO</h2>
                                <p className="text-[10px] text-gray-400 tracking-wider">Slogan here</p>
                            </div>
                        </div>

                        {/* Content */}
                        <h1 className="text-3xl font-bold mb-4">
                            Start our<br />journey
                        </h1>
                        <p className="text-xs text-gray-300 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form Section */}
                <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center bg-white">
                    <h1 className="text-2xl font-bold text-[#323657] mb-8">
                        Sign Up
                    </h1>

                    <div className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <input
                                type="text"
                                placeholder='Enter your name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full pb-2 border-b border-gray-300 text-sm focus:outline-none focus:border-purple-600 transition-colors bg-transparent text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <input
                                type="email"
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pb-2 border-b border-gray-300 text-sm focus:outline-none focus:border-purple-600 transition-colors bg-transparent text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <input
                                type="password"
                                placeholder='Enter your password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pb-2 border-b border-gray-300 text-sm focus:outline-none focus:border-purple-600 transition-colors bg-transparent text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        {/* Action Buttons & Links */}
                        <div className="pt-4 space-y-4">
                            <button 
                                onClick={SignupHandler}
                                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium py-2.5 px-4 rounded-md shadow-md transition duration-200 text-sm"
                            >
                                SignUp
                            </button>

                            <div className="text-center text-xs text-gray-500">
                                Already a member? {' '}
                                <Link to="/login">
                                    <button className="text-purple-600 font-semibold hover:underline bg-transparent border-none p-0 inline cursor-pointer">
                                        go to login
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp