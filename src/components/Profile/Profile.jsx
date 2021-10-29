import React from "react";
import MyPost from "./MyPosts/MyPost";
import style from './Profile.module.css'

const Profile = () => {
  return (
    <main>
          <div>
            <img src="https://www.vinterier.ru/pictures/shop/osen-v-moskve-kartina-maslom-60x50.jpg" alt=""></img>
          </div>
          <div>Ava+Discraption</div>
          <MyPost />
      </main>
  )
}

export default Profile