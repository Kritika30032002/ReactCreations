import React from 'react'
import navlogo from '../assets/img1.png';
import '../components-css/Header.css'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navlogo-container'>
                    <img src={navlogo} alt="" className='nav-logo-img'/>
                </Link>
                <div className='nav-link'>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Sign in</Link>
                    <Link to="/register">Sign up</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
