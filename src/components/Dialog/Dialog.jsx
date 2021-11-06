import React from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/state";
import style from "./Dialog.module.css";
import DialogItems from "./DialogData/DialogData";
import Messanges from "./MessegesData/MessegesData";

const Dialog = (props) => {
  let dialogsElements = props.store.dialogPage.dialogData.map((el) => (
    <DialogItems name={el.name} id={el.id} />
  ));

  let messagesDataElements = props.store.dialogPage.messagesData.map((el) => (
    <Messanges sms={el.message} />
  ));

const onChangeNewMessange = (event) =>{
  return props.dispatch(updateNewMessageTextAC(event.target.value))
}

const onAddMessage = () =>{
  return props.dispatch(addMessageAC())
}

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogsElements}</div>
      <div className={style.messanges}>
        {messagesDataElements}
        <div><textarea onChange={onChangeNewMessange} value={props.store.dialogPage.newMessageText} /></div>
        <div><button onClick={onAddMessage}>Add message</button></div>
      </div>
    </div>
  );
};

export default Dialog;
