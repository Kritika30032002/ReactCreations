import React from 'react'
import './contact.css';
import emailjs from 'emailjs-com';
import {useRef} from 'react';

const Contact = () => {
    const form=useRef();const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_r4ivf6j', 'template_843inrq', form.current, 'FQQp7JW3m4R7eM2Yo')
        e.target.reset();

    }
  return (
    <section className='container contact_container' id='contact'>
        <h5>For any query or suggestions</h5>
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>

            <label htmlFor="name">
                <input type="text" name='name' placeholder='Name'/>
            </label>
            <label htmlFor="">
                <input type="text" name='subject'placeholder='Subject' />
            </label>
            <label htmlFor="">
                <input type="text"name='email'placeholder=' write your email address'/>
            </label>
            <textarea name="query" id="query" cols="30" rows="10" placeholder='write your query'></textarea>
            <button type='submit' className='btn-primary'>Send Message</button>
        </form>
      
    </section>
  )
}

export default Contact
