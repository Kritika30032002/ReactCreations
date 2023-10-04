import React, { useContext, useState } from 'react'
import '../components-css/Login-Register.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eyeicon, setEyeIcon] = useState('-eye')
    const [visibility, setVisibility] = useState('password')
    // const [redirect, setRedirect] = useState(false)
    // const {setUser} = useContext(UserContext)

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
                toast.error('Invalid credentials', message)
                break;
            case 2:
                toast.success('Invalid credentials', message)
                break;
            default:
                break;
        }
    }

    function showPassword(){
        if(eyeicon === '-eye'){
            setEyeIcon('-eye-slash')
            setVisibility('text')
        }else if(eyeicon === '-eye-slash'){
            setEyeIcon('-eye')
            setVisibility('password')
        }
    }

    // if(redirect){
    //     return <Navigate to={'/'}/>
    // }

    // async function login(e) {
    //     e.preventDefault()
    //     try {
    //         const {data} = await axios.post('/login',{
    //             email,
    //             password
    //         })
    //         setUser(data)
    //         notify(2)
    //         setRedirect(true)
    //     } catch (error) {
    //         notify(1)
    //     }
        
    // }
    return (
        <>
            <div className='login-register'>
                <form className='login-register-form' >
                    <p style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold'}}>Login</p>
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
                    <button>Log in</button>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login
