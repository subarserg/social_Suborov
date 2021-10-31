import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialog.module.css";

const DialogItems = (props) => {
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink activeClassName={style.active} to={"/dialog/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Messanges = props => {
  return (
  <div className={style.messanges}>
    <span>{props.sms}</span>
  </div>
  )
};

const Dialog = () => {

  let dialogData = [
    {id : 1, name : 'Sasha'},
    {id : 2, name : 'Valera'},
    {id : 3, name : 'Masha'},
    {id : 4, name : 'Denis'},
    {id : 5, name : 'Ira'}
    
  ]

  let messagesData = [
    {id : 1, message : 'Hello'},
    {id : 2, message : 'Hi'},
    {id : 3, message : 'Yo'}
  ]

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        <DialogItems name={dialogData[0].name} id={dialogData[0].id} />
        <DialogItems name={dialogData[1].name} id={dialogData[1].id} />
        <DialogItems name={dialogData[2].name} id={dialogData[2].id} />
        <DialogItems name={dialogData[3].name} id={dialogData[3].id} />
        <DialogItems name={dialogData[4].name} id={dialogData[4].id} />
      </div>
      <div className={style.messanges}>
        <Messanges  sms={messagesData[0].message} />
        <Messanges  sms={messagesData[1].message} />
        <Messanges  sms={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialog;
