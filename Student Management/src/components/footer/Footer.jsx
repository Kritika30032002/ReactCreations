import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
const Footer = () => {
  return (
    <div className='footer_container' id='Footer'>
      <a href="#">Home</a>
      <a href="#contact">Contact</a>
      <a href="testimonials">Testimonials</a>
      <a href="#about">About</a>
      <a href="#footer">Footer</a>
      <ul>
        <li className="instagram"><FiInstagram/></li>
        <li className="facebook"><FaFacebookF/></li>
        <li className="whatsapp"><IoLogoTwitter/></li>

      </ul>

    </div>
  )
}

export default Footer
