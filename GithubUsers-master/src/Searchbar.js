import React from "react";

function Searchbar({username,setUsername})
{
    const onChange=(e)=>
    {
        setUsername(e.target.value);
    }
    return(
        <div className="Searchbar">
          
            <input type="text"
            placeholder="Search"
            onChange={(event)=>{onChange(event)}}
            onKeyUp={(event)=>{onChange(event)}}
            onInput={(event)=>{onChange(event)}}></input>
            <button> Search</button>
          
        </div>
    );
}

export default Searchbar;