import React from "react";
import MyPost from "./MyPosts/MyPost";

import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <main>
      <ProfileInfo />
      <MyPost />
    </main>
  );
};

export default Profile;
