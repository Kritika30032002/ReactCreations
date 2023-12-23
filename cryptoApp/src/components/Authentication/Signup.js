// import { Button, TextField } from '@material-ui/core';
// import React from 'react'
// import { useState } from 'react'
// import Box from '@mui/material/Box';  
// import { Cryptostate } from '../../CryptoContext';
// import {auth} from '../../firebase'
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import firebase from 'firebase/app';

// const Signup = ({handleClose}) => {
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const [confirmPassword,setConfirmPassword]=useState("")
//     const {setAlert}=Cryptostate();
//     const handleSubmit=()=>{
//         if(password!==confirmPassword){
//            setAlert({
//             open:true,
//             message:"PASSWORD DO NOT MATCH",
//             type:"error"
//            })
//             return ;
//         }
//         const handleSignIn = async (email, password) => {
//         try {
//             const result =await createUserWithEmailAndPassword(
//               auth,
//               email,
//               password
//             );
//     console.log(result);
//     setAlert({
//         open: true,
//         message: `Sign Up successful welcome ${result.user.email}`,
//         type: "success"
//     });

//     handleClose();
// } catch (error) {
//     setAlert({
//         open: true,
//         message: error.message,
//         type: "error"
//     });
//     return;
// }
//         }

//     };
//   return (
//     <div>
//   <Box p={3} style={{display:"flex",flexdirection:"column", gap:"20px"}}/>
//   <TextField variant='outlined' type="email" label="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} fullWidth/>
//   <TextField variant='outlined' type="password"  label="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} fullWidth/>
//   <TextField variant='outlined' type="password"  label="Confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} fullWidth/>
//   <Button variant="contained" size="large" style={{backgroundColor: "#EEBC1D"}} onClick={handleSubmit}>
//     SignUp
//   </Button>
//     </div>
//   )
// }

// export default Signup
