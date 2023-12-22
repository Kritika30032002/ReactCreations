import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Left from "../login/Loginleft";

function SignUp() {
  const [name, setName] = useState();
  const [email, setMail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3006", { name, email, password })
      .then((result) => console.log(result));
    navigate("/login").catch((err) => console.log(err));
  };
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <Left />

        <hr></hr>

        <div className="right">
          <h2>REGISTER</h2>
          <form onSubmit={handleSubmit}>
            <div className="forms">
              <label htmlFor="email">{/* <strong>Name</strong> */}</label>
              <input
                type="text"
                placeholder="Enter Name"
                // autocomplete="off"
                name="email"
                className="searchInput"
                onChange={(e) => setName(e.target.value)}
              />
              <hr></hr>
            </div>
            <div className="forms">
              <label htmlFor="email">{/* <strong>Email</strong> */}</label>
              <input
                type="text"
                placeholder="Enter email"
                // autocomplete="off"
                name="email"
                className="searchInput"
                onChange={(e) => setMail(e.target.value)}
              />
              <hr></hr>
            </div>
            <div className="forms">
              <label htmlFor="email">{/* <strong>Password</strong> */}</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="searchInput"
                onChange={(e) => setPassword(e.target.value)}
              />
              <hr></hr>
            </div>
            <button type="submit" className="buttons">
              REGISTER
            </button>
          </form>
          <p>Already Have an Account</p>
          <Link to="/login" className="span">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
