import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  debugger;
  return (
    <main>
      <ProfileInfo />
      <MyPostContainer store={props.store} state={props.state} dispatch={props.dispatch} />
    </main>
  );
};

export default Profile;
