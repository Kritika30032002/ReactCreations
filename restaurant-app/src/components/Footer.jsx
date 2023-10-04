import React from 'react'
import logo from '../assets/img1.png';
import '../components-css/Footer.css'
import { Link } from 'react-router-dom';

const date = new Date().getFullYear();
function Footer() {
    return (
        <>
            <footer className='footer'>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Link to={'/'} className='footer-logo-container'>
                  <img src={logo} alt="" className='footer-logo' />
                </Link>
                <div className='subcribe-message-container'>
                  <p style={{color: '#495e57'}}><span style={{textDecoration: 'underline' , cursor: 'pointer'}}>Subscribe</span> to receive offers</p>
                </div>
              </div>
              <div>
                <p style={{color: 'gray', textAlign: 'center'}}>© COPYRIGHT LITTLE LEMON {date}</p>
              </div>
            </footer>
        </>
    )
}

export default Footer
