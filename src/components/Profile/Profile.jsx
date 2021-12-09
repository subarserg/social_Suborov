import React from "react";
import { withRedirect } from "../hoc/withRedirect";
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

const RiderectProfile = withRedirect(Profile)


export default RiderectProfile;
