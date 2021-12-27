import * as React from "react";
import { withRedirect } from "../hoc/withRedirect";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {FC} from "react";

const Profile : FC = () => {
  return (
    <main>
      <ProfileInfo />
      <MyPost />
    </main>
  );
};

const RedirectProfile = withRedirect(Profile)


export default RedirectProfile;
