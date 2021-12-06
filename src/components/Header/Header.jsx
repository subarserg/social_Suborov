import  axios  from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUserDataSuccess } from "../../redux/auth_reduser";
import style from "./Header.module.css";

const Header = () => {
  const login = useSelector((state)=>state.authReduser.login)
  const isAuth = useSelector((state)=>state.authReduser.isAuth)
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then((response) => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          dispatch(setUserDataSuccess(id, email, login));
        }
      });
  },[]);

  return (
    <header className={style.header}>
      <img
        src="https://w7.pngwing.com/pngs/995/548/png-transparent-superman-logo-superman-logo-superhero-superman-heroes-triangle-heart-thumbnail.png"
        alt=""
      ></img>

      <div className={style.loginBlock}>
        {isAuth 
        ? <span>{login}</span> 
        : <NavLink to="/login">Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;