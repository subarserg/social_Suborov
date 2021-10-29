import React from "react";
import { NavLink } from "react-router-dom";
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={style.items}>
        <div><NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink></div>
        <div><NavLink to='/dialog' activeClassName={style.activeLink}>Message</NavLink></div>
        <div><NavLink to='/news' activeClassName={style.activeLink}>News</NavLink></div>
        <div><NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink></div>
        <div><NavLink to='/settings' activeClassName={style.activeLink}>Settings</NavLink></div>
      </div>
  )
}

export default NavBar