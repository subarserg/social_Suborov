import React, {FC} from "react";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

const Login: FC = () => {
    const isAuth = useSelector((state:AppStateType) => state.authReduser.isAuth)
    if (isAuth) return <Redirect to={`profile/`}/>
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    )
}

export default Login