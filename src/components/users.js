import React from "react";

function Users({ isLoading, items }) 
{
    return (
    <div>
        {isLoading?<div id="loading">Loading...</div>:items.map((i)=>{
            return (<div className="user">{i}</div>)
        })}
    </div>
    );
}

export default Users;
