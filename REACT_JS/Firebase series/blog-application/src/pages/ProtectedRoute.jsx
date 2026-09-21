import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase/Config';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    let navigate = useNavigate();
    const [existUser, setExistUser] = useState(null);

    const getuserdata = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setExistUser(user);
            } else {
                setExistUser(null);
                navigate("/login");
            }
        });
    };

    useEffect(() => {
        getuserdata();
    }, []);

    return existUser ? children : null;
}

export default ProtectedRoute;