import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Signup = () => {
    const history=useNavigate();
    const [credentials,setCredentials]=useState({name:"",email:"",password:""})
    function onChange(e){
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }
    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch("http://localhost:7000/api/auth/creatuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success)
        {
            localStorage.setItem('token', json.authtoken); 
            history("/");
        }
        else{
            alert("Invalid credentials");
        }
    }
    return (
        <div>
            <h2>Sign-Up</h2>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={credentials.name} onChange={onChange} name="name" id="name" minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
