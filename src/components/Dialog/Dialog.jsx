import React from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialog_reduser";
import style from "./Dialog.module.css";
import DialogItems from "./DialogData/DialogData";
import Messanges from "./MessegesData/MessegesData";

const Dialog = (props) => {
  debugger;
  let dialogsElements = props.dialogData.map((el) => (
    <DialogItems name={el.name} id={el.id} />
  ));

  let messagesDataElements = props.messagesData.map((el) => (
    <Messanges sms={el.message} />
  ));

const onChangeNewMessange = (event) =>{
  return props.changeNewMessange(event.target.value)
}

const onAddMessage = () =>{
  return props.addMessage()
}

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogsElements}</div>
      <div className={style.messanges}>
        {messagesDataElements}
        <div><textarea onChange={onChangeNewMessange} value={props.newMessageText} /></div>
        <div><button onClick={onAddMessage}>Add message</button></div>
      </div>
    </div>
  );
};

export default Dialog;
