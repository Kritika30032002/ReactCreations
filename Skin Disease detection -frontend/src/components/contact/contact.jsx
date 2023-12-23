import React from 'react'
import './contact.css'
import Navbar from '../Navbar/Navbar';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_r4ivf6j','template_nqxiuur',form.current,'FQQp7JW3m4R7eM2Yo');
    e.target.reset();

  }
  return (
    <>
    <div className="overall">
      <Navbar/>
    <section className='contact1'>




     <h5 className='eight'>Get Connected to Dermatalogist</h5>
     
     <div className="container contact_container">
     

      {/*END OF CONTACT OPTIONS */}
      <div className="contact">

        <div className="form_area">
          <p className='title'>FILL UP YOUR DETAILS</p>
      <form ref={form} onSubmit={sendEmail}>


        <div className="form_group">

        <label className="sub_title" htmlFor="name">Name</label>
        <input type="text" id='name'placeholder='Your Full Name' required />

        </div>

        <div className="form_group">


        <label className="sub_title" htmlFor="email">Email</label>

        <input type="email" id='email' placeholder='Your Email' required />

        </div>

        <div className="form_group">
        <label className="sub_title" htmlFor="message">Message</label>

        <textarea name="message" id="10" rows="7"placeholder='Add your Symptoms' required></textarea>

        </div>
        <button type='submit' className='btn'>Send Message</button>
      </form>

      </div>

      </div>
     </div>


    </section>
    </div>
    </>
  )
}

export default Contact
