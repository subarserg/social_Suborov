import React from "react";
import {withRedirect} from "../hoc/withRedirect";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {FC} from "react";
import ProfileWeather from "./ProfileInfo/ProfileWeather";
import ProfileRates from "./ProfileInfo/ProfileRates";

const Profile: FC = () => {
    return (
        <main>
            <ProfileInfo/>
            <MyPost/>
            <ProfileWeather/>
            <ProfileRates />
        </main>
    );
};

const RedirectProfile = withRedirect(Profile)


export default RedirectProfile;
