import React, { useState } from 'react'
import '../components-css/Contact.css'

function Contact() {

    const [phone, setPhone] = useState(null);
    return (
        <>
            <div className='contact'>
                <div className='contact-div'>
                    <div style={{marginBottom: '50px'}}>
                        <p style={{textAlign: 'center', fontSize: '40px',marginBottom: '30px', fontWeight: 'bolder'}}>Contact us</p>
                    </div>
                    <div className='contact-con'>
                        <div className='contact-items'>
                            <div className='item'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{height: '50px'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2>Address</h2>
                                    <div style={{width: '200px'}}>Lorem ipsum dolor sit</div>
                                </div>
                            </div>
                            <div className='item'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{height: '50px'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2>Phone number</h2>
                                    <div style={{width: '200px'}}>+91 87932847442</div>
                                </div>
                            </div>
                            <div className='item'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{height: '50px'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <h2>Email</h2>
                                    <div style={{width: '200px'}}>
                                        jasdflkj@res.ac.in
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='message-con'>
                            <form className='message-form'>
                                <div style={{ marginBottom: '50px'}}>
                                    <h2 className={{textAlign: 'center',}}>Send Message</h2>
                                </div>
                                <div>
                                    <div className="input-icons">
                                        <i className="fa fa-phone icon"></i>
                                        <input className="input-field"
                                            type="telephone"
                                            placeholder="Phone number" onChange={(e) => {
                                                setPhone(e.target.value)
                                            }}
                                        required />
                                    </div>
                                    <textarea name="" id="" cols="30" rows="2" className='input-icons'></textarea>
                                    <button type='submit' className='button'>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
