import React from "react";
import style from "./Dialog.module.css";

const Dialog = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        <div className={style.dialog + ' ' + style.active}>Sasha</div>
        <div className={style.dialog}>Valera</div>
        <div className={style.dialog}>Masha</div>
        <div className={style.dialog}>Dima</div>
        <div className={style.dialog}>Ira</div>
      </div>
      <div className={style.messanges}>
        <div className={style.messange}>Hello</div>
        <div className={style.messange}>How are you</div>
        <div className={style.messange}>Yo</div>
      </div>
    </div>
  );
};

export default Dialog;
