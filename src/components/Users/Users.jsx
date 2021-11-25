import React from "react";
import User from "./User";

const Users = (props) => {
  return (
    <div>
      {
        props.users.map((user)=>{
          return (
            <User user={user} key={user.id} setUnfollowSuccess={props.setUnfollowSuccess} setFollowSuccess={props.setFollowSuccess}/>
          )
        })
      }
    </div>
  )
};

export default Users;
