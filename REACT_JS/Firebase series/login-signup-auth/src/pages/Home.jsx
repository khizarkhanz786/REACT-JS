import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import app from '../firebass/config';

const auth = getAuth(app);

const Home = () => {
    const user = auth.currentUser;
    const navigate = useNavigate();


    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // User successful log out ho gaya
                console.log("Logged out successfully");
                navigate('/login'); // Login page par redirect kar dein
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };

    return (
        <>



            <div className="w-full min-h-screen flex justify-center flex-col  items-center bg-gray-50 p-4">
                <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col sm:flex-row items-center gap-6 max-w-xl border border-gray-100">
                    {/* Image Container */}
                    <div className="w-[200px] h-[200px] overflow-hidden rounded-2xl shrink-0">
                        <img
                            src="https://png.pngtree.com/thumb_back/fw800/background/20221216/pngtree-portrait-sketch-render-head-computer-generated-photo-image_4710182.jpg"
                            alt="Welcome"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Content Container */}
                    <div className="flex flex-col justify-center space-y-2 text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
                            Welcome back, <span className="text-purple-600 capitalize">{user?.displayName || 'User'}</span>!
                        </h1>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            We're glad to have you here. Explore and enjoy the features we offer.
                        </p>
                    </div>
                </div>
                <div className="m-5 flex justify-center items-center gap-2.5">
                    <p className="font-medium capitalize">if you want  Logout</p>
                 <button
                onClick={handleLogout}to
                className="bg-red-500  hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition duration-200 text-sm shadow"
            >
                LogOut
            </button>
            </div>
            </div>
        </>
    );
};

export default Home;