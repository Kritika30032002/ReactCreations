import { useState,useEffect } from 'react'
import './App.css'
import {db} from "./firebase-config";
import  Navbar  from './Navbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {collection , getDocs , updateDoc ,deleteDoc,doc} from "firebase/firestore";
function App() {


  const [users ,setUsers] = useState([]);
  const userCollectionRef = collection(db , "user")

   
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "user", id));
  };

  // await deleteDoc(doc(db, "users", "DC"));

  const updateUser = async (id, age) => {
    await updateDoc(doc(db, "user", id), {age: age + 1});
  };






  useEffect(()=> {

    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data);

      setUsers(data.docs.map((doc) => ({...doc.data() , id: doc.id})));

    };
    getUsers();

  }, [])

  return (
    <>

    <Navbar/>


    {/* <Typography variant='h2'>Raghav Blog</Typography> */}

   


    


    {users.map((user) => {
      return (

        
        <div key={user.age} >
          {" "}


          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/src/blog.jpeg"
        title="green iguana"
      />
      <CardContent>


        <Typography gutterBottom variant="h5" component="div">
         {user.name}
          
        </Typography>




        <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: user.age }}/>
        




      </CardContent>
      <CardActions>
        <Button variant="outlined" startIcon={<EditIcon/>}

onClick={() => {
  updateUser(user.id, user.age);
}}
        >
  Edit
</Button>


        <Button variant="outlined" startIcon={<DeleteIcon />}

                onClick={() => {
                deleteUser(user.id);
              }}>
              Delete
            
        </Button>

      </CardActions>
    </Card>
         

        </div>
      )
    })}


    
      
    </>
  )
}

export default App
