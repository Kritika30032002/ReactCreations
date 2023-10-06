import React from 'react'
import logo from '../assets/img1.png';
import '../components-css/Header.css'
import Navbar from './Navbar';

function Header() {
    return (
        <>
            <header>
                {/* {user ? <NavbarLoggedIn />: <Navbar />} */}
                <Navbar />
            </header>
        </>
    )
}

export default Header
