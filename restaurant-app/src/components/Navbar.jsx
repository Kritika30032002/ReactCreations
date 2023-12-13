import React,{ useState } from 'react';
import navlogo from '../assets/img1.png';
import '../components-css/Header.css'
import {Link} from 'react-router-dom';
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
    let [open, setOpen] =useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };
    return (
            <nav className='navbar'>
                <Link to='/' className='navlogo-container'>
                    <img src={navlogo} alt="" className='nav-logo-img'/>
                </Link>
                <div className={`nav-link ${open ? 'open' : ''}`}>
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/menu" onClick={closeMenu}>Menu</Link>
                <Link to="/contact" onClick={closeMenu}>Contact</Link>
                <Link to="/login" onClick={closeMenu}>Sign in</Link>
                <Link to="/register" onClick={closeMenu}>Sign up</Link>
                 </div>
                    <div onClick={handleToggle} className='hamburger-menu'>
                       {open ? <RxCross1 className='menu-pic'/>:<HiMiniBars3 className='menu-pic'/>}
                    </div>
                </nav>
    );
}

export default Navbar;
