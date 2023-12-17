import { useState,useRef} from 'react'
import JoditEditor from 'jodit-react';
import TextField from '@mui/material/TextField';
import {db} from "./firebase-config";
import  Navbar  from './Navbar';
import {collection , addDoc} from "firebase/firestore";
import Button from '@mui/material/Button';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Card  from '@mui/material';


const Blog = () => {
    const editor = useRef(null);
    const [newName ,setNewName] = useState("");

    const [newAge , setNewAge] =useState("");
    const [content, setContent] = useState('');
    const userCollectionRef = collection(db , "user");


    const createUser = async () => {

        await addDoc(userCollectionRef , {name : newName , age: content});
    
    
      };
    
     

  return (
    <div>

        <Navbar/>

        <div className="head">

    <Typography variant='h2' className='head' >Write a Blog !!</Typography>


        </div>


    <div className="heading">

        <TextField id="outlined-basic" label="Heading" variant="outlined" onChange={(event) => {setNewName(event.target.value);
    }} />
</div>
    {/* {console.log(newContent)} */}


<div className="content">

<JoditEditor
			ref={editor}
			value={content}
			
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>


</div>

<div className="succ">



<Button variant="contained" color="success" 

onClick={createUser}
>
  SUBMIT
</Button>

</div>



        

        
        
    
    
    </div>
  )
}

export default Blog