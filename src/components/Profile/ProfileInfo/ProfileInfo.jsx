import React from "react";
import style from './ProfileInfo.module.css'

const ProfileInfo = props => {
  return (
    <div>
          <div>
            <img src="https://www.vinterier.ru/pictures/shop/osen-v-moskve-kartina-maslom-60x50.jpg" alt=""></img>
          </div>
          <div className={style.profileInfo}>Ava+Discraption</div>
      </div>
  )
}

export default ProfileInfo