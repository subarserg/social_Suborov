import  axios  from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { setProfileSuccess } from "../../../redux/profile_reduser";
import style from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
  const profile = useSelector((state)=>state.profileReduser.profile)
  const dispatch = useDispatch()
  const match = useRouteMatch()
  
  useEffect(() => {
    let userId = +match.params.userId
    if(!userId){
      userId = 21028
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response)=>{
      dispatch(setProfileSuccess(response.data))
    })
  }, [match.params.userId])


  return (
    <div>{!profile ? <></> : 
          <><div>
            <img src={profile.photos.large || "https://www.vinterier.ru/pictures/shop/osen-v-moskve-kartina-maslom-60x50.jpg"} alt=""></img>
          </div>
          <div><span>{profile.fullName}</span></div>
          <div className={style.profileInfo}>Ava+Discraption</div></>
          }
      </div>
  )
}

export default ProfileInfo