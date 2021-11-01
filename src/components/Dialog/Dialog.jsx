import React from "react";
import style from "./Dialog.module.css";
import DialogItems from "./DialogData/DialogData";
import Messanges from "./MessegesData/MessegesData";

const Dialog = (props) => {
  let dialogsElements = props.dialogPage.dialogData.map((el) => (
    <DialogItems name={el.name} id={el.id} />
  ));

  let messagesDataElements = props.dialogPage.messagesData.map((el) => (
    <Messanges sms={el.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogsElements}</div>
      <div className={style.messanges}>{messagesDataElements}</div>
    </div>
  );
};

export default Dialog;
