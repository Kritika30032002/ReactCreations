import React, { useState } from 'react'
import '../components-css/Login-Register.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import axios from 'axios'
// import { Navigate } from 'react-router-dom'

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [eyeicon, setEyeIcon] = useState('-eye')
    const [visibility, setVisibility] = useState('password')
    const [redirect, setRedirect] = useState(false)

    function showPassword(){
        if(eyeicon === '-eye'){
            setEyeIcon('-eye-slash')
            setVisibility('text')
        }else if(eyeicon === '-eye-slash'){
            setEyeIcon('-eye')
            setVisibility('password')
        }
    }

    const notify = (value) => {
        const message =  {
            className: "toast-position",
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        }
        switch (value) {
            case 1:
                toast.error("Password should contain atleast 8 characters", message)                
                break;
            case 2:
                toast.error("Use atleast one lowercase alphabet", message)                           
                break;
            case 3:
                toast.error("Use atleast one uppercase alphabet", message)                    
                break;
            case 4:
                toast.error("Use atleast one digit", message)                       
                break;
            case 5:
                toast.error("Use atleast one special character", message)         
                break;
            case 6:
                toast.error("Password and confirm password are not same", message)
                break;
            case 7:
                toast.success("Registration successful. Now you can login.", message)
                break;
            case 8:
                toast.error("Registration failed. Please try again later", message)
                break;
            default:
                break;
        }
    }

    function Validation(e){
        e.preventDefault();
        let lowerCase = 0;
        let upperCase = 0;
        let digits = 0; 
        let specialCharacters = 0;
        let flag = 0;

        if(password.length < 8){        
            notify(1);
            return;
        }

        for(let i = 0; i < password.length; i++){
            if(password[i] >= 'a' && password[i] <= 'z'){
                lowerCase++;
            }else if(password[i] >= 'A' && password[i] <= 'Z'){
                upperCase++;
            }else if(password[i] >= '0' && password[i]<= '9'){
                digits++;
            }else{
                specialCharacters++;
            }

            if(lowerCase !== 0 && upperCase !== 0 && digits !== 0 && specialCharacters !==0){
                flag = 1;
                break;
            }
        }

        if(!flag){

            if(!lowerCase){
                notify(2);
            }else if(!upperCase){
                notify(3);
            }else if(!digits){
                notify(4);
            }else if(!specialCharacters){
                notify(5);
            }
            return;
        }

        if(confirmPassword !== password){
            notify(6);
            return;
        }
        // registerUser();
    }

    // async function registerUser() {
    //     try {
    //         await axios.post('/register', {
    //             username,
    //             email,
    //             password,
    //         })
    //         notify(7)
    //         setRedirect(true)
    //     } catch (error) {
    //         notify(8)
    //     }
    // }

    // if(redirect){
    //     return <Navigate to={'/login'}/>
    // }
    return (
        <>
            <div className='login-register'>
                <form className='login-register-form' onSubmit={Validation}>
                    <p style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold'}}>Register</p>

                    <div className="input-icons">
                        <i className="fa fa-user icon"></i>
                        <input className="input-field"
                            type="text"
                            placeholder="Username" onChange={(e) => {
                                setUsername(e.target.value)
                            }} 
                            required />
                    </div>
        
                    <div className="input-icons">
                        <i className="fa fa-envelope icon"></i>
                        <input className="input-field"
                            type="email"
                            placeholder="Email" onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            required />
                    </div>
        
                    <div className="input-icons">
                        <i onClick={showPassword}  className={`fa fa${eyeicon} icon`} style={{cursor: 'pointer'}}></i>
                        <input className="input-field"
                            type={`${visibility}`}
                            placeholder="Password" onChange={(e) => {
                                setPassword(e.target.value)
                            }} 
                            required />
                    </div>

                    <div className="input-icons">
                        <i onClick={showPassword}  className={`fa fa${eyeicon} icon`} style={{cursor: 'pointer'}}></i>
                        <input className="input-field"
                            type={`${visibility}`}
                            placeholder="Confirm password" onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }} 
                            required />
                    </div> 
                    <button type='submit' >Register</button>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default Register
