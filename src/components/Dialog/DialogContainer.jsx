import React from "react";
import { addMessageAC, updateNewMessageTextAC } from "../../redux/dialog_reduser";
import Dialog from "./Dialog";

const DialogContainer = (props) => {
  debugger;
  let state = props.store.getState()
const onChangeNewMessange = (sms) =>{
  return props.dispatch(updateNewMessageTextAC(sms))
}

const onAddMessage = () =>{
  return props.dispatch(addMessageAC())
}

  return (
    <Dialog changeNewMessange={onChangeNewMessange} addMessage={onAddMessage} messagesData={state.dialogReduser.messagesData}
    dialogData={state.dialogReduser.dialogData} newMessageText={state.dialogReduser.newMessageText} />
  );
};

export default DialogContainer;
