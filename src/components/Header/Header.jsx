import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {deleteLoginThunk, getAuthUserThunk} from "../../redux/auth_reduser";
import style from "./Header.module.css";
import {Button} from "antd";

const Header = () => {
  const login = useSelector((state) => state.authReduser.login);
  const isAuth = useSelector((state) => state.authReduser.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthUserThunk())
  }, []);

  const onLogOut = () => {
      dispatch(deleteLoginThunk())
  }

  return (
    <header className={style.header}>
      <img
        src="https://w7.pngwing.com/pngs/995/548/png-transparent-superman-logo-superman-logo-superhero-superman-heroes-triangle-heart-thumbnail.png"
        alt=""
      ></img>

      <div className={style.loginBlock}>
        {isAuth
            ? <div>
                <span>{login}</span>
                <Button onClick={onLogOut} type={"primary"}>LOG OUT</Button>
                </div>
            : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
