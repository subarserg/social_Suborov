import React from "react";
import {withRedirect} from "../hoc/withRedirect";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {FC} from "react";
import ProfileWeather from "./ProfileInfo/ProfileWeather";

const Profile: FC = () => {
    return (
        <main>
            <ProfileInfo/>
            <MyPost/>
            <ProfileWeather/>
        </main>
    );
};

const RedirectProfile = withRedirect(Profile)


export default RedirectProfile;
