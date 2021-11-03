import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <main>
      <ProfileInfo />
      <MyPost postData={props.state.postData} newText={props.state.newPostText} />
    </main>
  );
};

export default Profile;
