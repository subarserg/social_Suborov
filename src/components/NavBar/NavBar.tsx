import  React from "react";
import { NavLink } from "react-router-dom";
import style from './NavBar.module.css'
import {FC} from "react";
import MyFriends from "../MyFriends/MyFriends";

const NavBar : FC = () => {
  return (
    <div className={style.items}>
        <div><NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink></div>
        <div><NavLink to='/dialog' activeClassName={style.activeLink}>Message</NavLink></div>
        <div><NavLink to='/users' activeClassName={style.activeLink}>Users</NavLink></div>
        <div><NavLink to='/news' activeClassName={style.activeLink}>News</NavLink></div>
        <div><NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink></div>
        <div><NavLink to='/settings' activeClassName={style.activeLink}>Settings</NavLink></div>
        <div><NavLink to='/games' activeClassName={style.activeLink}>Games</NavLink></div>
        <MyFriends/>
      </div>
  )
}
export default NavBar