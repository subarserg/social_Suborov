import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <main>
      <ProfileInfo />
      <MyPostContainer />
    </main>
  );
};

export default Profile;
