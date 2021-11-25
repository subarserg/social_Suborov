import React from "react";

const User = (props) => {

   const onUnfollowClick = () => {
    props.setUnfollowSuccess(props.user.id)
   }

const onFollowClick = () => {
    props.setFollowSuccess(props.user.id)
}

  return (
    <div>
      <div>
        <div><span>{props.user.fullName}</span></div>
        <div><img src={props.user.photos} alt="noPhoto"/></div>
        {
            props.user.followed
            ? <div><button onClick={onUnfollowClick} >UNFOLLOW</button></div>
            : <div><button onClick={onFollowClick} >FOLLOW</button></div>
        }
      </div>
      <div><span>{props.user.status}</span></div>
      <div>
        <div><span>{props.user.location.country}</span></div>
        <div><span>{props.user.location.city}</span></div>
      </div>
    </div>
  )
};

export default User;