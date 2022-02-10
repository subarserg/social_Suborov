import React from "react";
import {withRedirect} from "../hoc/withRedirect";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {FC} from "react";
import ProfileWeather from "./ProfileInfo/ProfileWeather";
import ProfileRates from "./ProfileInfo/ProfileRates";
import {useLocation, useParams} from "react-router";
import {useHistory, useRouteMatch} from "react-router-dom";
import Edamam from "./ProfileInfo/ProfileEdamam";

const Profile: FC = () => {
    return (
        <main>
            <ProfileInfo/>
            <MyPost/>
            <ProfileWeather/>
            <ProfileRates />
            <Edamam />
        </main>
    );
};

const RedirectProfile = withRedirect(Profile)


export default RedirectProfile;
