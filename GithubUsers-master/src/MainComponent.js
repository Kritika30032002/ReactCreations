import  { useEffect, useState } from "react";
import axios from 'axios';
import Searchbar from "./Searchbar";
import UserInfoCard from "./UserInfoCard";

function Main()
{
    const [username,setUsername]=useState("");
    const[userData,setUserData]=useState([]);
   
    

const getUserData= async()=>
{
   const response=await fetch(`https://api.github.com/search/users?q=${username}`);
    const jsonData=await response.json();
    if (response.ok) {
        setUserData(jsonData.items);
       
    }
    
    else {
        console.log(response.status);
        console.log("No Response");
        setUserData({});
    }

};
const onChange=(e)=>
{
    setUsername(e.target.value);
};
return(
    <div >
         <div className="Searchbar">
          
          <input type="text"
          placeholder="Search"
          
          onChange={(event)=>{onChange(event)}}
          onKeyUp={(event)=>{onChange(event)}}
          onInput={(event)=>{onChange(event)}}></input>
          <button onClick={getUserData}> Search</button>
        
      </div>
       
        <div className="outer">

        <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <h2>
              <a href={user.html_url} target="_blank" >
                {user.login}
              </a>
            </h2>
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" height="100" />
          </li>
        ))}
      </ul>
           
        </div>
    </div>
)


}
export default Main;