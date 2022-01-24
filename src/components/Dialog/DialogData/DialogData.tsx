import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogData.module.css";
import {FC} from "react";

const DialogItems : FC<PropsType> = ({id, name}) => {
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink activeClassName={style.active} to={"/dialog/" + id}>{name}</NavLink>
    </div>
  );
};

export default DialogItems;

type PropsType = {
    id: number
    name: string
}
