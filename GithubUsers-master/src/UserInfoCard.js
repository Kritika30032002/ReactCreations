import React from "react";

function UserInfoCard({userData})
{

    return(
        <div className="outer">
            {userData.avatar_url ?(<div className="dataItem">
                <img src={userData.avatar_url} alt="Avatar"></img></div>) : <div>Nothing</div>}
                {userData.login ? (<div className="dataItem"> login: {userData.login}</div>): <div></div>}
                {
                    userData.name ?(<div className="dataItem">UserName: {userData.name}</div>):<div></div>
                }
        </div>
    );
}
export default UserInfoCard;