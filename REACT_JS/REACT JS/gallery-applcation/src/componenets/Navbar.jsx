import React from 'react'
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="nav-con">
        <nav className='navbar'>
            <h2>snapVault</h2>
            <ul>
                   <li> <a href="#"><FaHome /> </a></li>
                   <li> <a href="#"><FaUser /> </a></li>
                   <li> <a href="#"><FaCog /></a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar