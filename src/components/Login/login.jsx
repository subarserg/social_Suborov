import React from "react";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const Login = () => {
    const isAuth = useSelector((state)=>state.authReduser.isAuth)
    if(isAuth) return <Redirect to={`profile/`} />


    return (

        <div>
            <h1>LOGIN</h1>
            <LoginForm />
        </div>

    )
}

export default Login