import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAddMessageSuccess, setUpdateNewMessageTextSuccess } from "../../redux/dialog_reduser";
import style from "./Dialog.module.css";
import DialogItems from "./DialogData/DialogData";
import Messanges from "./MessegesData/MessegesData";

const Dialog = (props) => {
  const dialogData = useSelector(state => state.dialogReduser.dialogData)
  const newMessageText = useSelector(state => state.dialogReduser.newMessageText)
  const messagesData = useSelector(state => state.dialogReduser.messagesData)
  const dispatch = useDispatch()

  let dialogsElements = dialogData.map((el) => (
    <DialogItems name={el.name} id={el.id} />
  ));

  let messagesDataElements = messagesData.map((el) => (
    <Messanges sms={el.message} />
  ));

const onChangeNewMessange = (event) =>{
  return dispatch(setUpdateNewMessageTextSuccess(event.target.value))
}

const onAddMessage = () =>{
  return dispatch(setAddMessageSuccess())
}

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogsElements}</div>
      <div className={style.messanges}>
        {messagesDataElements}
        <div><textarea onChange={onChangeNewMessange} value={newMessageText} /></div>
        <div><button onClick={onAddMessage}>Add message</button></div>
      </div>
    </div>
  );
};

export default Dialog;
