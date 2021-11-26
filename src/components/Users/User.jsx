import React from "react";
import imgAva  from './../../assets/images/images.png'
import style from './Users.module.css'

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
        <div className={style.name} ><span>MY NAME IS: {props.user.name}</span></div>
        <div><img className={style.imgAva} src={
          props.user.photos.small === null
          ? imgAva
          : props.user.photos.small
          } alt="noPhoto"/></div>
        {
            props.user.followed
            ? <div><button onClick={onUnfollowClick} >UNFOLLOW</button></div>
            : <div><button onClick={onFollowClick} >FOLLOW</button></div>
        }
      </div>
      <div><span>MY STATUS: {
      props.user.name === 'subar' 
      ? 'I am BOSS' 
      :  props.user.status === null 
      ? 'вы лошары' 
      : props.user.status
      }</span></div>
      <div>
        <div><span>{`props.user.location.country`}</span></div>
        <div><span>{`props.user.location.city`}</span></div>
      </div>
    </div>
  )
};

export default User;