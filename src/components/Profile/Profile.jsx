import React from "react";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  //debugger;
  return (
    <main>
      <ProfileInfo />
      <MyPost postData={props.store.profilePage.postData} newText={props.store.profilePage.newPostText} 
      dispatch={props.dispatch} />
    </main>
  );
};

export default Profile;
