import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogData.module.css";

const DialogItems = (props) => {
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink activeClassName={style.active} to={"/dialog/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItems;
