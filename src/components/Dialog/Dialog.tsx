import React, {ChangeEvent, FC} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actions } from "../../redux/dialog_reduser";
import { withRedirect } from "../hoc/withRedirect";
import style from "./Dialog.module.css";
import DialogItems from "./DialogData/DialogData";
import Messanges from "./MessegesData/MessegesData";
import {AppStateType} from "../../redux/store";

const Dialog : FC = () => {
  const dialogData = useSelector((state: AppStateType) => state.dialogReduser.dialogData)
  const newMessageText = useSelector((state: AppStateType) => state.dialogReduser.newMessageText)
  const messagesData = useSelector((state: AppStateType) => state.dialogReduser.messagesData)
  const dispatch = useDispatch()

  let dialogsElements = dialogData.map((el) => (
    <DialogItems name={el.name} id={el.id} />
  ));

  let messagesDataElements = messagesData.map((el) => (
    <Messanges sms={el.message} />
  ));

const onChangeNewMessange = (event: ChangeEvent<HTMLTextAreaElement>) =>{
  return dispatch(actions.setUpdateNewMessageTextSuccess(event.target.value))
}

const onAddMessage = () =>{
  return dispatch(actions.setAddMessageSuccess())
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

const DialogRiderect = withRedirect(Dialog)

export default DialogRiderect;
