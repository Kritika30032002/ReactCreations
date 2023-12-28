
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLock} from 'react-icons/ai'
import Left from './Loginleft'

// import {logo} from '../asset/logo1.jpg';

function SignUp() {
  const [email, setMail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3006/login", { email, password })
      .then((result) => {
        console.log(result)
        if(result.data === "success"){
            navigate("/home")
        }
      });
    navigate("/home").catch((err) => console.log(err));
  };
  return (
    <div className="login-page">


      <div className="login-wrapper">

      <Left/>

        <hr></hr>


        <div className="right">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit} className="">

         
          <div className="forms">
            <label htmlFor="email">
              {/* <strong>Email</strong> */}
            </label>
            <input
              type="text"
              placeholder="Enter email"
              
              name="email"
              className="searchInput"
              onChange={(e) => setMail(e.target.value)}
            />
          <MdOutlineEmail/>
          <hr></hr>
          </div>
          
          <div className="forms">
            <label htmlFor="email">
              {/* <strong>Password</strong> */}
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="searchInput"
              onChange={(e) => setPassword(e.target.value)}

            />
            <AiFillLock/>
          <hr></hr>
          </div>
          <button type="submit" className="buttons">
            LOGIN
          </button> 
        </form>

        <h4>Don't have Account? <span><a className = "span"href="/">REGISTER</a> </span></h4>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
